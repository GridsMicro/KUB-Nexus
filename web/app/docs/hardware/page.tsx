import Link from "next/link";
import { SITE_LINKS } from "@/lib/constants";

export default function HardwareDoc() {
    const pins = [
        { item: "OLED Display", scl: "GPIO 22", sda: "GPIO 21", power: "3.3V / GND" },
        { item: "RGB LED (Failsafe)", red: "GPIO 25", green: "GPIO 26", blue: "GPIO 27" },
        { item: "Active Buzzer", sig: "GPIO 32", power: "5V / GND" },
        { item: "Push Button", sig: "GPIO 4", power: "GND (Pull-up)" },
    ];

    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-24 relative overflow-hidden text-white">
            {/* Background Glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary opacity-5 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-4xl z-10 space-y-12">
                <header>
                    <Link href="/docs" className="text-sm opacity-50 hover:opacity-100 transition-opacity mb-8 block">
                        ← Back to Documentation
                    </Link>
                    <h1 className="text-5xl font-extrabold mb-4 text-gradient-orange">Hardware & Assembly</h1>
                    <p className="opacity-60 text-lg">คู่มือการประกอบนวัตกรรม KUB-Nexus สำหรับระบบอัตโนมัติ 24/7</p>
                </header>

                {/* Requirements Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { icon: "🧠", title: "The Brain", desc: "ESP32 DevKit V1 (30 pins)", link: "https://c.lazada.co.th/t/c.YOUR_AFFILIATE_LINK_1" },
                        { icon: "📊", title: "Display", desc: "OLED 0.96 inch (SSD1306)", link: "https://c.lazada.co.th/t/c.YOUR_AFFILIATE_LINK_2" },
                        { icon: "🛠️", title: "Status", desc: "RGB LED & Buzzer Alert & Switch", link: "https://c.lazada.co.th/t/c.YOUR_AFFILIATE_LINK_3" },
                    ].map((item, i) => (
                        <div key={i} className="glass-card p-6 border-white/5 bg-white/5 relative group">
                            <span className="text-4xl mb-4 block">{item.icon}</span>
                            <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                            <p className="text-sm opacity-50 mb-6">{item.desc}</p>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-xs font-bold text-primary opacity-80 hover:opacity-100 hover:text-white transition-all bg-primary/10 hover:bg-primary px-4 py-2 rounded-full shadow-lg"
                            >
                                🛒 สั่งซื้อ (Lazada)
                            </a>
                        </div>
                    ))}
                </section>

                {/* Pinout Table */}
                <section className="glass-card p-8 md:p-12 border-white/10">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        🔌 Wiring Assignment <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">Standard v1.0</span>
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="border-b border-white/10 uppercase tracking-widest text-[10px] opacity-40">
                                <tr>
                                    <th className="py-4">Component</th>
                                    <th className="py-4">Signal/Pin</th>
                                    <th className="py-4">Power Requirement</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 font-mono">
                                {pins.map((pin, i) => (
                                    <tr key={i} className="hover:bg-white/5 transition-colors">
                                        <td className="py-4 font-bold text-white">{pin.item}</td>
                                        <td className="py-4 text-primary">
                                            {pin.scl ? `SCL: ${pin.scl}, SDA: ${pin.sda}` : ""}
                                            {pin.red ? `R/G/B: ${pin.red}, ${pin.green}, ${pin.blue}` : ""}
                                            {pin.sig ? `SIG: ${pin.sig}` : ""}
                                        </td>
                                        <td className="py-4 opacity-70">{pin.power}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Pro Tips */}
                <section className="p-8 rounded-3xl bg-primary/10 border border-primary/20 flex flex-col md:flex-row gap-8 items-center">
                    <div className="text-5xl">⚡</div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Pro Engineering Tips</h3>
                        <p className="opacity-70 leading-relaxed text-sm">
                            เพื่อความเสถียรสูงสุดในการเทรด Autonomous แนะนำให้ใช้แหล่งจ่ายไฟ USB 5V/2A แยกต่างหาก และเก็บกิ่งสายไฟให้เรียบร้อยเพื่อลดสัญญาณรบกวน (EMI) ในระบบดึงราคา Real-time ครับ 🌿🛡️
                        </p>
                    </div>
                </section>

                <footer className="pt-12 text-center">
                    <p className="text-xs opacity-30 uppercase tracking-[0.4em]">Designed & Documented by GridsMicro</p>
                </footer>
            </div>
        </main>
    );
}
