import Link from "next/link";
import { SITE_LINKS } from "@/lib/constants";

export default function SecurityPage() {
    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary opacity-5 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-4xl z-10 space-y-12">
                <Link href={SITE_LINKS.home} className="text-sm opacity-50 hover:opacity-100 transition-opacity flex items-center gap-2">
                    ← Back to Oasis
                </Link>

                <header>
                    <h1 className="text-5xl font-extrabold mb-4 text-gradient-green leading-tight">Security & Safeguards</h1>
                    <p className="opacity-60 text-lg leading-relaxed max-w-2xl">
                        ความปลอดภัยคือหัวใจของ KUB-Nexus เราใช้เทคโนโลยีการป้องกันขั้นสูงสุดเพื่อรักษาความลับของ API Key และความเสถียรของเครื่องควบคุม IoT
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="glass-card p-10 space-y-6">
                        <h3 className="text-2xl font-bold flex items-center gap-3">
                            <span className="text-3xl text-primary">🛡️</span> Data Privacy
                        </h3>
                        <p className="text-sm opacity-60 leading-relaxed uppercase tracking-widest font-bold">Client-Side Ownership</p>
                        <p className="text-md opacity-80 leading-relaxed">
                            เราไม่เก็บ API Secret Key ไว้บน Server ของเรา ข้อมูลทั้งหมดจะถูกจัดเก็บแบบ <strong>Encrypted State</strong> บนเซสชันเฉพาะของเครื่องผู้ใช้เท่านั้น หากผู้ใช้ปิดหน้าเว็บหรือ Logout ข้อมูลจะถูกทำลายทันทีเพื่อความปลอดภัยสูงสุด
                        </p>
                    </div>

                    <div className="glass-card p-10 space-y-6">
                        <h3 className="text-2xl font-bold flex items-center gap-3">
                            <span className="text-3xl text-secondary">🤖</span> IoT Security
                        </h3>
                        <p className="text-sm opacity-60 leading-relaxed uppercase tracking-widest font-bold">Secure Hardware Guard</p>
                        <p className="text-md opacity-80 leading-relaxed">
                            อุปกรณ์ ESP32 ของเราใช้ระบบ <strong>NVS (Non-volatile Storage) Encryption</strong> ภายในชิปเพื่อป้องกันการดึงค่า API Key ออกทางกายภาพ พร้อมติดตั้งระบบ <strong>WiFi Captive Portal</strong> ที่เข้ารหัสเพื่อความปลอดภัยในการตั้งค่าข้อมูลเบื้องต้น
                        </p>
                    </div>

                    <div className="glass-card p-10 space-y-6">
                        <h3 className="text-2xl font-bold flex items-center gap-3">
                            <span className="text-3xl text-primary">⛓️</span> API V3 Standards
                        </h3>
                        <p className="text-sm opacity-60 leading-relaxed uppercase tracking-widest font-bold">HMAC-SHA256 Signatures</p>
                        <p className="text-md opacity-80 leading-relaxed">
                            ทุกคำสั่งซื้อ (Market Order) ที่ส่งไปยัง Bitkub จะถูกลงลายมือชื่อดิจิทัล (Signed Signature) ผ่านอัลกอริทึม HMAC-SHA256 ที่ได้รับมาตรฐานความปลอดภัยระดับโลก ป้องกันการแก้ไขข้อมูลระหว่างทาง (Man-in-the-Middle Attack)
                        </p>
                    </div>

                    <div className="glass-card p-10 space-y-6">
                        <h3 className="text-2xl font-bold flex items-center gap-3">
                            <span className="text-3xl text-red-500">🚫</span> Fraud Prevention
                        </h3>
                        <p className="text-sm opacity-60 leading-relaxed uppercase tracking-widest font-bold">Non-Withdrawal Keys Only</p>
                        <p className="text-md opacity-80 leading-relaxed">
                            ระบบของเรามีการตรวจสอบเพื่อป้องกันการใช้ Key ที่มีสิทธิ์การถอนเงิน หากคุณเผลอใส่ Key ที่ทำรายการถอนเงินได้ ระบบความปลอดภัยจะแจ้งเตือนและปิดกั้นการทำงานทันทีเพื่อปกป้องทรัพย์สินของคุณ
                        </p>
                    </div>
                </div>

                <div className="mt-16 p-10 glass-card border-primary/20 bg-primary/5 text-center">
                    <p className="text-sm opacity-80 leading-relaxed italic">
                        "We believe security is a journey, not a destination. Our engineers are constantly auditing the KUB-Nexus codebase to ensure the highest level of integrity."
                    </p>
                    <p className="mt-4 text-xs font-bold uppercase tracking-widest opacity-40">— GridsMicro Security Team</p>
                </div>
            </div>
        </main>
    );
}
