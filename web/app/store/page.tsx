import Link from "next/link";
import { SITE_LINKS } from "@/lib/constants";

export default function StorePage() {
    const hardwareItems = [
        { title: "ESP32 DevKit V1", desc: "สมองกลอัจฉริยะ 30-pin พร้อม WiFi/BT", price: "฿120.00", link: "https://s.lazada.co.th/s.ZdX4uZ?cc&t=p-i1mwIIi-sJH26c3", tag: "Hot 🔥" },
        { title: "OLED Display 0.96\"", desc: "จอภาพคมชัด SSD1306 (I2C)", price: "฿65.00", link: "https://s.lazada.co.th/s.ZdwHl?cc", tag: "Essential" },
        { title: "RGB LED Module", desc: "หลอดไฟแสดงสถานะ Failsafe P/N", price: "฿15.00", link: "https://s.lazada.co.th/s.ZdwHs?cc" },
        { title: "Active Buzzer", desc: "ตัวกำเนิดเสียงแจ้งเตือนการเทรด", price: "฿10.00", link: "https://s.lazada.co.th/s.Zdwu6?cc" },
    ];

    const digitalProducts = [
        { title: "KUB-Nexus Pro Kit (Code + 3D File)", desc: "Source Code พรีเมียมเต็มรูปแบบ แบบแกะกล่องพร้อมใช้ ไม่ต้องเขียนเอง", price: "฿1,900.00", link: "#", isDigital: true },
        { title: "IoT Trading Mastery Course", desc: "คอร์สออนไลน์ สอนประกอบและเขียนระบบเทรดอัตโนมัติบน ESP32 0-100", price: "฿3,500.00", link: "#", isDigital: true },
    ];

    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-24 relative overflow-hidden">
            {/* SEO Magic */}
            <head>
                <title>GridsMicro Store | อะไหล่ IoT และ Source Code พรีเมียม</title>
                <meta name="description" content="ช้อปปิ้งออนไลน์ อะไหล่ ESP32, จอ OLED, และ Source Code ระบบเทรด KUB-Nexus" />
            </head>

            {/* Glowing Effects */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary opacity-5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary opacity-10 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-5xl z-10 space-y-16">
                <header className="text-center">
                    <Link href={SITE_LINKS.home} className="text-sm opacity-50 hover:opacity-100 transition-opacity mb-8 inline-block">
                        ← Back to Oasis
                    </Link>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gradient-green">
                        Creator Store Hub
                    </h1>
                    <p className="text-lg opacity-70 max-w-2xl mx-auto leading-relaxed text-balance">
                        ยกระดับโปรเจกต์ของคุณด้วยฮาร์ดแวร์ที่เราคัดสรรมาอย่างดี หรือปลดล็อกประสิทธิภาพสูงสุดด้วย **Digital Assets** จากทีมนักพัฒนา GridsMicro (Support us via Affiliate)
                    </p>
                </header>

                {/* Hardware Section (Local Affiliate) */}
                <section>
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                        <span className="text-4xl">🇹🇭</span> Local Hardware Parts
                        <span className="text-xs bg-white/10 text-white/50 px-3 py-1 rounded-full font-normal">Lazada Partner</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {hardwareItems.map((item, i) => (
                            <div key={i} className="glass-card p-6 flex flex-col justify-between hover:border-primary/50 transition-all group overflow-hidden relative">
                                {item.tag && (
                                    <div className="absolute top-4 right-[-24px] bg-red-500 text-white text-[10px] font-bold px-8 py-1 rotate-45 shadow-lg">
                                        {item.tag}
                                    </div>
                                )}
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2 pr-4">{item.title}</h3>
                                    <p className="text-xs opacity-60 mb-6 line-clamp-2">{item.desc}</p>
                                </div>
                                <div>
                                    <p className="text-xl font-extrabold text-primary mb-4">{item.price}</p>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full block text-center bg-white/5 hover:bg-primary hover:text-background text-sm font-bold py-3 rounded-xl transition-colors border border-white/10 group-hover:border-primary/50"
                                    >
                                        🛒 สั่งซื้อ (Lazada)
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Global Ad Network Placeholder (Google AdSense) */}
                <div className="w-full h-24 border border-dashed border-white/10 bg-white/5 rounded-2xl flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity">
                    <p className="text-xs font-mono uppercase tracking-widest text-center">
                        [ Google AdSense / Global Display Ad Placement ] <br />
                        <span className="text-[10px] text-white/50">Space reserved for automated ads (Requires AdSense Pub-ID)</span>
                    </p>
                </div>

                {/* Hardware Section (Global Affiliate) */}
                <section>
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                        <span className="text-4xl">🌍</span> Global Suppliers
                        <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full font-normal border border-blue-500/30">AliExpress / Amazon / Taobao</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "ESP32 Bulk (10 Pcs)", desc: "สั่งซื้อชิป ESP32 ลอตใหญ่ราคาส่งจากจีน (Taobao/AliExpress)", platform: "AliExpress", link: "https://portals.aliexpress.com/" },
                            { title: "OLED SSD1306 (Global)", desc: "หาอะไหล่จอแบบ Global Shipping", platform: "Amazon", link: "https://affiliate-program.amazon.com/" },
                            { title: "Custom PCB Fabrication", desc: "สั่งทำแผ่น PCB ต้นแบบสำหรับโปรเจกต์ (JLCPCB/PCBWay)", platform: "PCBWay", link: "https://www.pcbway.com/setinvite.aspx" }
                        ].map((item, i) => (
                            <div key={i} className="glass-card p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all group overflow-hidden relative">
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-xs opacity-60 mb-6">{item.desc}</p>
                                </div>
                                <div>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full block text-center text-blue-300 bg-blue-500/10 hover:bg-blue-500 hover:text-white text-sm font-bold py-3 rounded-xl transition-colors border border-blue-500/20"
                                    >
                                        🌐 สั่งซื้อผ่าน {item.platform}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Digital Products Section (High Ticket) */}
                <section>
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                        <span className="text-4xl">🚀</span> Premium Digital Assets
                        <span className="text-xs bg-gradient-to-r from-orange-500 to-primary text-white px-3 py-1 rounded-full font-bold shadow-lg shadow-primary/20">Exclusive</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {digitalProducts.map((item, i) => (
                            <div key={i} className="glass-card p-8 border-primary/20 hover:border-primary/100 transition-all bg-primary/5 hover:-translate-y-1 shadow-2xl shadow-black/50 group">
                                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed">{item.desc}</p>
                                <div className="flex items-center justify-between">
                                    <p className="text-3xl font-black text-gradient-orange">{item.price}</p>
                                    <button className="bg-primary text-background font-extrabold px-8 py-4 rounded-2xl group-hover:scale-105 transition-transform shadow-lg shadow-primary/30">
                                        Unlock Now 🔓
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer Banner */}
                <div className="p-8 rounded-[2rem] border border-dashed border-white/20 text-center bg-black/20 backdrop-blur-md">
                    <p className="text-sm opacity-50 mb-2">Want a custom Autonomous System built for your business?</p>
                    <a href="mailto:contact@gridsmicro.com" className="text-primary font-bold hover:underline">Contact GridsMicro Enterprise Team</a>
                </div>
            </div>
        </main>
    );
}
