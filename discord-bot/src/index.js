import { Client, GatewayIntentBits, Events, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputBuilder, TextInputStyle } from "discord.js";
import "dotenv/config";
import { FAQ } from "./faq.js";

// ---- Bot Initialization ----
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
    ],
});

const QA_CHANNEL_ID = process.env.CHANNEL_QA;

// ---- Bot Ready Event ----
client.once(Events.ClientReady, (ready) => {
    console.log(`\n🤖 KUB-Nexus Bot พร้อมทำงานแล้วครับ! (${ready.user.tag})`);
    console.log(`📡 เชื่อมต่ออยู่กับ ${ready.guilds.cache.size} เซิร์ฟเวอร์\n`);
    ready.user.setPresence({
        status: "online",
        activities: [{ name: "KUB-Nexus ⚡ | !help", type: 3 }],
    });
});

// ---- Message Handler (FAQ) ----
client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return; // ห้ามตอบบอทด้วยกันเอง

    const content = message.content.toLowerCase();

    // --- คำสั่ง !help ---
    if (content === "!help" || content === "/help") {
        const embed = new EmbedBuilder()
            .setColor(0xf97316) // สีส้ม (KUB-Nexus Primary)
            .setTitle("🤖 KUB-Nexus Support Bot")
            .setDescription("ยินดีต้อนรับสู่ **KUB-Nexus Community**! ผมพร้อมช่วยเหลือคุณ 24/7 ครับ")
            .addFields(
                { name: "📋 คำสั่งที่ใช้ได้", value: "```!help``` → แสดงรายการคำสั่งทั้งหมด\n```!hardware``` → รายการอุปกรณ์และลิงก์ซื้อ\n```!status``` → สถานะระบบและเวอร์ชั่น\n```!report``` → รายงานบัก\n```!request``` → ขอฟีเจอร์ใหม่" },
                { name: "💬 ถามแบบภาษาธรรมชาติ", value: "พิมพ์คำถามเป็นภาษาไทยหรืออังกฤษได้เลยครับ เช่น:\n- `ตั้งค่า WiFi ยังไง?`\n- `ซื้อ ESP32 ได้ที่ไหน?`\n- `ขอ API Key ยังไง?`" },
                { name: "🌐 ลิงก์สำคัญ", value: "[Dashboard](https://kub-nexus.vercel.app) | [GitHub](https://github.com/GridsMicro/KUB-Nexus) | [Docs](https://kub-nexus.vercel.app/docs)" }
            )
            .setThumbnail("https://kub-nexus.vercel.app/globe.svg")
            .setFooter({ text: "GridsMicro | Autonomous Eco-Trading Gateway", iconURL: "https://kub-nexus.vercel.app/globe.svg" })
            .setTimestamp();

        return message.reply({ embeds: [embed] });
    }

    // --- คำสั่ง !hardware ---
    if (content === "!hardware") {
        const embed = new EmbedBuilder()
            .setColor(0x10b981) // สีเขียว
            .setTitle("🛠️ BOM: Bill of Materials — KUB-Nexus Gateway")
            .setDescription("รายการอุปกรณ์ทั้งหมดที่ต้องใช้ในการประกอบ พร้อมลิงก์สั่งซื้อตรงจาก Lazada ครับ:")
            .addFields(
                { name: "🧠 ESP32 DevKit V1", value: "[🛒 สั่งซื้อ Lazada (~฿120)](https://s.lazada.co.th/s.ZdX4uZ?cc&t=p-i1mwIIi-sJH26c3)" },
                { name: "📊 OLED Display 0.96\"", value: "[🛒 สั่งซื้อ Lazada (~฿65)](https://s.lazada.co.th/s.ZdwHl?cc)" },
                { name: "💡 RGB LED (Common Cathode)", value: "[🛒 สั่งซื้อ Lazada (~฿15)](https://s.lazada.co.th/s.ZdwHs?cc)" },
                { name: "🔊 Active Buzzer 5V", value: "[🛒 สั่งซื้อ Lazada (~฿10)](https://s.lazada.co.th/s.Zdwu6?cc)" },
                { name: "🖲️ Tactile Switch", value: "[🛒 สั่งซื้อ Lazada (~฿8)](https://s.lazada.co.th/s.ZdwuH?cc)" },
                { name: "⚡ Resistors 220Ω+10kΩ", value: "[🛒 สั่งซื้อ Lazada (~฿20)](https://s.lazada.co.th/s.ZdwFp?cc)" },
            )
            .setFooter({ text: "ดูคู่มือการต่อวงจรฉบับสมบูรณ์ที่ kub-nexus.vercel.app/docs/hardware" });

        return message.reply({ embeds: [embed] });
    }

    // --- คำสั่ง !status ---
    if (content === "!status") {
        const embed = new EmbedBuilder()
            .setColor(0x6366f1)
            .setTitle("📡 KUB-Nexus System Status")
            .addFields(
                { name: "🌐 Web Dashboard", value: "🟢 Online", inline: true },
                { name: "📦 Firmware Version", value: "v1.2.0-beta", inline: true },
                { name: "🔗 GitHub", value: "🟢 Active", inline: true },
                { name: "⛓️ Bitkub Chain", value: "🟢 Connected", inline: true },
            )
            .setTimestamp()
            .setFooter({ text: "อาจมีความล่าช้าในการอัปเดต Status ครับ" });

        return message.reply({ embeds: [embed] });
    }

    // --- คำสั่ง !report (Bug Report) ---
    if (content === "!report") {
        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId("open_bug_report")
                .setLabel("📝 กรอกแบบฟอร์ม Bug Report")
                .setStyle(ButtonStyle.Danger)
        );
        return message.reply({
            content: "**🐛 Bug Report System**\nกดปุ่มด้านล่างเพื่อกรอกรายละเอียดบักที่พบครับ ทีมนักพัฒนาจะได้รับการแจ้งเตือนทันที!",
            components: [row],
        });
    }

    // --- คำสั่ง !request (Feature Request) ---
    if (content === "!request") {
        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId("open_feature_request")
                .setLabel("💡 กรอกแบบฟอร์ม Feature Request")
                .setStyle(ButtonStyle.Primary)
        );
        return message.reply({
            content: "**💡 Feature Request System**\nมีฟีเจอร์อะไรอยากให้เพิ่มไหมครับ? กดปุ่มด้านล่างแล้วบอกไอเดียของคุณได้เลย!",
            components: [row],
        });
    }

    // ---- FAQ Auto-Reply (Pattern Matching) ----
    // ตอบเฉพาะใน QA Channel เท่านั้น
    if (message.channelId === QA_CHANNEL_ID) {
        const matched = FAQ.find((faq) =>
            faq.keywords.some((kw) => content.includes(kw))
        );

        if (matched) {
            const embed = new EmbedBuilder()
                .setColor(0xf97316)
                .setDescription(matched.answer)
                .setFooter({ text: "KUB-Nexus Bot | หากไม่ตรงกับที่ถาม ลองพิมพ์ !help เพื่อดูคำสั่งทั้งหมดครับ" });
            return message.reply({ embeds: [embed] });
        }

        // ถ้าไม่มีใน FAQ ส่งข้อความนำทาง
        if (content.includes("?") || content.includes("ยังไง") || content.includes("ทำไม") || content.includes("วิธี") || content.includes("how")) {
            const embed = new EmbedBuilder()
                .setColor(0xfbbf24)
                .setTitle("🤔 ยังหาคำตอบที่ตรงกันให้ไม่ได้เลยครับ...")
                .setDescription("ลองค้นหาในแหล่งข้อมูลด้านล่างนี้ หรือรอทีมงานมาตอบในวันทำการนะครับ 🌿")
                .addFields(
                    { name: "📚 เอกสาร (Docs)", value: "[kub-nexus.vercel.app/docs](https://kub-nexus.vercel.app/docs)" },
                    { name: "🐛 พบบัก?", value: "พิมพ์ `!report` เพื่อรายงานครับ" },
                    { name: "💡 อยากเพิ่มฟีเจอร์?", value: "พิมพ์ `!request` เพื่อแจ้งไอเดียครับ" },
                );
            return message.reply({ embeds: [embed] });
        }
    }
});

// ---- Button Interaction Handler ----
client.on(Events.InteractionCreate, async (interaction) => {
    if (interaction.isButton()) {

        // Bug Report Modal
        if (interaction.customId === "open_bug_report") {
            const modal = new ModalBuilder()
                .setCustomId("bug_report_modal")
                .setTitle("🐛 KUB-Nexus Bug Report");

            const titleInput = new TextInputBuilder()
                .setCustomId("bug_title")
                .setLabel("หัวข้อบัก (Bug Title)")
                .setStyle(TextInputStyle.Short)
                .setPlaceholder("เช่น: บอร์ด ESP32 ไม่เชื่อมต่อ WiFi หลังบูตครั้งที่ 3")
                .setRequired(true);

            const descInput = new TextInputBuilder()
                .setCustomId("bug_desc")
                .setLabel("รายละเอียด / ขั้นตอนที่ทำให้เกิดบัก")
                .setStyle(TextInputStyle.Paragraph)
                .setPlaceholder("1. เปิดอุปกรณ์\n2. ต่อ WiFi...\n3. บัคเกิดขึ้นเมื่อ...")
                .setRequired(true);

            const versionInput = new TextInputBuilder()
                .setCustomId("bug_version")
                .setLabel("เวอร์ชั่น Firmware / Web")
                .setStyle(TextInputStyle.Short)
                .setPlaceholder("เช่น: v1.2.0-beta")
                .setRequired(false);

            modal.addComponents(
                new ActionRowBuilder().addComponents(titleInput),
                new ActionRowBuilder().addComponents(descInput),
                new ActionRowBuilder().addComponents(versionInput),
            );
            return interaction.showModal(modal);
        }

        // Feature Request Modal
        if (interaction.customId === "open_feature_request") {
            const modal = new ModalBuilder()
                .setCustomId("feature_request_modal")
                .setTitle("💡 KUB-Nexus Feature Request");

            const titleInput = new TextInputBuilder()
                .setCustomId("feat_title")
                .setLabel("ชื่อฟีเจอร์ที่ต้องการ")
                .setStyle(TextInputStyle.Short)
                .setPlaceholder("เช่น: รองรับเหรียญ ETH/THB ด้วย")
                .setRequired(true);

            const descInput = new TextInputBuilder()
                .setCustomId("feat_desc")
                .setLabel("อธิบายไอเดียนี้ว่าจะมีประโยชน์อย่างไร")
                .setStyle(TextInputStyle.Paragraph)
                .setPlaceholder("ฉันอยากให้ระบบ Autonomous ของ KUB-Nexus สามารถ DCA เหรียญ ETH ได้ด้วย เพราะ...")
                .setRequired(true);

            modal.addComponents(
                new ActionRowBuilder().addComponents(titleInput),
                new ActionRowBuilder().addComponents(descInput),
            );
            return interaction.showModal(modal);
        }
    }

    // ---- Modal Submit Handler ----
    if (interaction.isModalSubmit()) {

        // Bug Report Submit
        if (interaction.customId === "bug_report_modal") {
            const title = interaction.fields.getTextInputValue("bug_title");
            const desc = interaction.fields.getTextInputValue("bug_desc");
            const version = interaction.fields.getTextInputValue("bug_version") || "ไม่ระบุ";

            const embed = new EmbedBuilder()
                .setColor(0xef4444)
                .setTitle(`🐛 Bug Report #${Date.now().toString(36).toUpperCase()}`)
                .addFields(
                    { name: "📌 หัวข้อ", value: title },
                    { name: "📋 รายละเอียด", value: desc },
                    { name: "🏷️ เวอร์ชั่น", value: version, inline: true },
                    { name: "👤 ผู้รายงาน", value: `<@${interaction.user.id}>`, inline: true },
                )
                .setTimestamp();

            // ส่งไป Channel ที่กำหนด (ถ้ามี)
            const bugChannel = process.env.CHANNEL_BUG_REPORT;
            if (bugChannel) {
                const ch = interaction.guild.channels.cache.get(bugChannel);
                if (ch) ch.send({ embeds: [embed] });
            } else {
                // ส่งใน Channel เดิมถ้ายังไม่ได้ตั้งค่า
                interaction.channel.send({ embeds: [embed] });
            }

            return interaction.reply({ content: "✅ ขอบคุณครับ! ทีมนักพัฒนาได้รับรายงานของคุณแล้วครับ 🙏", ephemeral: true });
        }

        // Feature Request Submit
        if (interaction.customId === "feature_request_modal") {
            const title = interaction.fields.getTextInputValue("feat_title");
            const desc = interaction.fields.getTextInputValue("feat_desc");

            const embed = new EmbedBuilder()
                .setColor(0x3b82f6)
                .setTitle(`💡 Feature Request #${Date.now().toString(36).toUpperCase()}`)
                .addFields(
                    { name: "✨ ชื่อฟีเจอร์", value: title },
                    { name: "📖 รายละเอียด", value: desc },
                    { name: "👤 ผู้เสนอ", value: `<@${interaction.user.id}>`, inline: true },
                )
                .setTimestamp();

            const featChannel = process.env.CHANNEL_FEATURE_REQUEST;
            if (featChannel) {
                const ch = interaction.guild.channels.cache.get(featChannel);
                if (ch) ch.send({ embeds: [embed] });
            } else {
                interaction.channel.send({ embeds: [embed] });
            }

            return interaction.reply({ content: "🚀 ขอบคุณสำหรับไอเดียดีๆ ครับ! เราจะพิจารณาเพิ่มในเวอร์ชั่นถัดไปครับ 💡", ephemeral: true });
        }
    }
});

// ---- Login ----
client.login(process.env.DISCORD_TOKEN);
