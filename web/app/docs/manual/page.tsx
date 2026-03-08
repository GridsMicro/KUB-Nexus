import Link from "next/link";
import { SITE_LINKS } from "@/lib/constants";

export default function UserGuideDoc() {
    const steps = [
        {
            id: "api",
            title: "1. การเตรียม Bitkub API Key",
            content: [
                "เข้าสู่ระบบที่ Bitkub.com ไปที่เมนู การจัดการ API",
                "กดสร้าง API Key ใหม่ และตั้งค่าสิทธิ์ให้ถูกต้อง",
                "✅ เลือก 'ดูข้อมูล' (Read) และ 'ซื้อขาย' (Trading)",
                "❌ ห้ามเลือก 'การถอนเงิน' (Withdraw) เด็ดขาดเพื่อความปลอดภัย"
            ]
        },
        {
            id: "web",
            title: "2. การตั้งค่าผ่านหน้าเว็บ",
            content: [
                "เปิดแอปพลิเคชัน KUB-Nexus และไปที่เมนู Settings (รูปฟันเฟือง)",
                "กรอก API Key และ API Secret ในช่องที่กำหนด",
                "ระบบจะทำการทดสอบการเชื่อมต่ออัตโนมัติ (Connection Test)",
                "ข้อมูลจะถูกเก็บรักษาด้วยการเข้ารหัส Client-side ภายในเครื่องคุณเท่านั้น"
            ]
        },
        {
            id: "iot",
            title: "3. การตั้งค่าอุปกรณ์ IoT (ESP32)",
            content: [
                "เสียบปลั๊กเปิดเครื่อง KUB-Nexus Hardware ของคุณ",
                "ใช้มือถือเชื่อมต่อ WiFi ชื่อ 'KUB-Nexus-Setup' ใน Setup Mode",
                "กรอกชื่อ WiFi บ้าน และ API Key ผ่านหน้า Portal ที่เด้งขึ้นมา",
                "กด Save และรอเครื่องรีบูตเพื่อเริ่มดึงราคา Bitcoin ทันที"
            ]
        }
    ];

    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary opacity-5 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-4xl z-10 space-y-12">
                <Link href={SITE_LINKS.docs.root} className="text-sm opacity-50 hover:opacity-100 transition-opacity flex items-center gap-2">
                    ← Back to Docs Hub
                </Link>

                <header className="space-y-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gradient-orange">User Manual</h1>
                    <p className="opacity-60 max-w-2xl mx-auto">
                        คู่มือการตั้งค่าและเริ่มต้นใช้งาน KUB-Nexus อย่างละเอียด เพื่ออิสรภาพทางการเงินที่ยั่งยืนของคุณ
                    </p>
                </header>

                <div className="space-y-8">
                    {steps.map((step, i) => (
                        <section key={i} className="glass-card p-8 md:p-12 border-white/5 hover:border-primary/20 transition-all">
                            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-4">
                                <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">{step.id.toUpperCase()}</span>
                                {step.title}
                            </h2>
                            <ul className="space-y-4">
                                {step.content.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 opacity-80 text-sm md:text-md">
                                        <span className="text-primary mt-1">▹</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>

                <section className="p-8 bg-primary/5 rounded-[32px] border border-primary/10 text-center">
                    <h3 className="text-xl font-bold text-primary mb-2">🌿 ระบบ Eco-DCA พร้อมทำงานมั้ย?</h3>
                    <p className="text-sm opacity-60">ระบบจะเริ่มออมอัตโนมัติเมื่อราคา BTC เหมาะสมและพลังงานสะอาดของคุณเพียงพอตามเป้าหมาย</p>
                </section>
            </div>
        </main>
    );
}
