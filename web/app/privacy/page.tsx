import Link from "next/link";
import { SITE_LINKS } from "@/lib/constants";

export default function PrivacyPolicy() {
    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary opacity-5 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-4xl z-10 space-y-12">
                <Link href={SITE_LINKS.home} className="text-sm opacity-50 hover:opacity-100 transition-opacity flex items-center gap-2">
                    ← Back to Oasis
                </Link>

                <header>
                    <h1 className="text-5xl font-extrabold mb-4 text-gradient-green">Privacy Policy</h1>
                    <p className="opacity-40 text-sm italic">Last Updated: March 8, 2026</p>
                </header>

                <div className="glass-card p-8 md:p-12 space-y-8 text-sm md:text-md leading-relaxed opacity-80">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">1. ขอบเขตของนโยบาย</h2>
                        <p>นโยบายความเป็นส่วนตัวนี้ครอบคลุมการเก็บรวบรวม ใช้ และป้องกันข้อมูลที่เกิดขึ้นผ่านแพลตฟอร์ม **KUB-Nexus** (รวมถึงเว็บแอปพลิเคชันและอุปกรณ์ IoT) ภายใต้การดูแลของ **GridsMicro** เรามุ่งมั่นที่จะปฏิบัติตามมาตรฐาน PDPA ของประเทศไทยและ GDPR ในระดับสากล</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">2. ข้อมูลที่เราจัดเก็บ</h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li><strong>ข้อมูลทางเทคนิค:</strong> ที่อยู่ IP, ข้อมูลเบราว์เซอร์ และข้อมูลจากเซนเซอร์ IoT (เช่น ปริมาณพลังงานที่ผลิตได้)</li>
                            <li><strong>ข้อมูลความลับ (API Credentials):</strong> ข้อมูล Bitkub API Key/Secret จะถูกจัดเก็บในรูปแบบการเข้ารหัส (Encryption) ในเครื่องของผู้ใช้เอง (LocalStorage/NVS) เราจะไม่บันทึก Key ของคุณลงใน Server ของเราเด็ดขาด</li>
                            <li><strong>ข้อมูลการทำธุรกรรม:</strong> ประวัติการสั่งซื้อขายที่เกิดขึ้นผ่านระบบ Autonomous เพื่อใช้ในการแสดงผล Dashboard</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">3. วัตถุประสงค์ในการใช้ข้อมูล</h2>
                        <p>เพื่อดำเนินการเทรดอัตโนมัติ (Autonomous Trading) ตามเงื่อนไขของพลังงานสะอาดที่คุณกำหนด และเพื่อบันทึกหลักฐานความโปร่งใสลงใน Bitkub Chain ผ่านระบบ Oracle</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">4. การรักษาความปลอดภัย</h2>
                        <p>เราใช้มาตรการรักษาความปลอดภัยระดับอุตสาหกรรม รวมถึงการเข้ารหัสแบบ HMAC-SHA256 สำหรับการสื่อสาร API และระบบ Failsafe ในระดับฮาร์ดแวร์เพื่อป้องกันการเข้าถึงจากบุคคลที่สาม</p>
                    </section>

                    <section className="pt-8 border-t border-white/5">
                        <p className="text-xs opacity-50">หากมีข้อสงสัยเกี่ยวกับนโยบายความเป็นส่วนตัว โปรดติดต่อทีมวิศวกรของเราผ่านช่องทางโครงการที่กำหนด © 2026 GridsMicro</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
