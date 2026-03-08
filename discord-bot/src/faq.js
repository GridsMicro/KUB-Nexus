// KUB-Nexus FAQ Knowledge Base
// บอทจะใช้ข้อมูลเหล่านี้ตอบคำถามอัตโนมัติครับ

export const FAQ = [
    {
        keywords: ["esp32", "บอร์ด", "board", "ซื้อ", "hardware", "อุปกรณ์"],
        answer: "🧠 **ESP32 DevKit V1** คือหัวใจของ KUB-Nexus\n\n**สเปค:** Dual Core 240MHz, WiFi + BT, 30 Pin\n**ราคา:** ~120 บาท\n**แหล่งซื้อ (TH):** https://s.lazada.co.th/s.ZdX4uZ?cc&t=p-i1mwIIi-sJH26c3\n\nดูคู่มือการประกอบได้ที่: https://kub-nexus.vercel.app/docs/hardware"
    },
    {
        keywords: ["oled", "จอ", "display", "ราคา", "screen"],
        answer: "📊 **OLED Display 0.96\"** ใช้สำหรับแสดงราคา BTC/KUB แบบ Real-time\n\n**สเปค:** SSD1306, I2C (GPIO 21/22), 128x64 pixels\n**ราคา:** ~65 บาท\n**แหล่งซื้อ:** https://s.lazada.co.th/s.ZdwHl?cc"
    },
    {
        keywords: ["wifi", "ตั้งค่า", "ssid", "password", "รหัสผ่าน", "setup", "connect", "เชื่อมต่อ"],
        answer: "📶 **วิธีตั้งค่า WiFi บนอุปกรณ์ KUB-Nexus:**\n\n1. เปิดอุปกรณ์ครั้งแรก 🔌\n2. เปิด WiFi บนมือถือ แล้วมองหาสัญญาณ **`KUB-Nexus-Setup`**\n3. เชื่อมต่อ → เบราว์เซอร์จะเปิดหน้า Portal อัตโนมัติ\n4. กรอก WiFi บ้าน + API Key ของ Bitkub แล้วกด Save\n5. อุปกรณ์จะ Restart และเริ่มทำงานอัตโนมัติ ✅"
    },
    {
        keywords: ["api", "bitkub", "key", "secret", "ขอ", "สมัคร"],
        answer: "🔑 **วิธีขอ Bitkub API Key:**\n\n1. เข้า https://www.bitkub.com/th/api-management\n2. ล็อกอิน → คลิก **Create New API**\n3. ตั้งชื่อ (เช่น `KUB-Nexus-Bot`)\n4. ✅ ติ๊ก **Read** และ **Trade** เท่านั้น\n5. ❌ **ห้ามติ๊ก Withdraw** เด็ดขาดครับ!\n6. คัดลอก Key + Secret มาใส่ในหน้า Settings ของเว็บ"
    },
    {
        keywords: ["line", "notify", "แจ้งเตือน", "token", "notification"],
        answer: "🔔 **วิธีตั้งค่า LINE Notify:**\n\n1. เข้า https://notify-bot.line.me/th/\n2. คลิก **My page** → **Generate token**\n3. ตั้งชื่อ `[KUB-Nexus]` และเลือกแชทที่ต้องการรับข้อความ\n4. Copy Token แล้วนำไปใส่ใน KUB-Nexus Setup Portal\n\n📌 ระบบจะส่งข้อความเมื่อมีการเทรดสำเร็จครับ!"
    },
    {
        keywords: ["failsafe", "ความปลอดภัย", "emergency", "led", "สี", "status"],
        answer: "🔒 **ระบบ FailsafeManager (4-State):**\n\n🔵 **BOOT** → กำลังเปิดเครื่อง (LED สีฟ้า)\n🟢 **READY** → พร้อมใช้งาน (LED สีเขียว)\n🟡 **ACTIVE** → กำลังเทรด (LED สีเหลืองกะพริบ)\n🔴 **EMERGENCY** → เกิดข้อผิดพลาด (LED สีแดง + Buzzer)\n\nหาก LED สีแดงต่อเนื่อง แนะนำให้ Reset แล้วตั้งค่าใหม่ครับ"
    },
    {
        keywords: ["github", "code", "โค้ด", "source", "repo", "ดาวน์โหลด"],
        answer: "💻 **Source Code KUB-Nexus:**\n\nhttps://github.com/GridsMicro/KUB-Nexus\n\nโปรเจกต์ Open Source ครับ Fork ได้เลย! ถ้าอยากสนับสนุนโปรเจกต์ กด ⭐ Star บน GitHub ด้วยนะครับ 🌟"
    },
    {
        keywords: ["ราคา", "price", "btc", "kub", "เหรียญ", "coin", "dashboard"],
        answer: "📈 **ดูราคาแบบ Real-time:**\n\nเปิดหน้า Dashboard ได้เลยที่: https://kub-nexus.vercel.app\n\nระบบดึงราคาจาก **Bitkub Public API** แบบอัตโนมัติครับ ไม่ต้องสมัครอะไรเพิ่มเติม"
    },
    {
        keywords: ["donate", "สนับสนุน", "coffee", "กาแฟ", "promptpay", "พร้อมเพย์"],
        answer: "☕ **สนับสนุนโปรเจกต์ KUB-Nexus:**\n\nถ้าโปรเจกต์นี้เป็นประโยชน์กับคุณ สามารถเลี้ยงกาแฟทีมพัฒนาได้ครับ:\n\n**PromptPay:** `0655419166`\n\nทุกการสนับสนุนคือแรงผลักดันในการสร้างนวัตกรรมฝั่งสีเขียวต่อไปครับ 🌱"
    },
];
