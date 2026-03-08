import Link from "next/link";
import { SITE_LINKS } from "@/lib/constants";

export default function TermsOfService() {
    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary opacity-5 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-4xl z-10 space-y-12">
                <Link href={SITE_LINKS.home} className="text-sm opacity-50 hover:opacity-100 transition-opacity flex items-center gap-2">
                    ← Back to Oasis
                </Link>

                <header>
                    <h1 className="text-5xl font-extrabold mb-4 text-gradient-orange">Terms of Service</h1>
                    <p className="opacity-40 text-sm italic">Last Updated: March 8, 2026</p>
                </header>

                <div className="glass-card p-8 md:p-12 space-y-8 text-sm md:text-md leading-relaxed opacity-80">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">1. ยอมรับข้อกำหนด</h2>
                        <p>การใช้บริการ **KUB-Nexus** ถอดแบบมาเป็นชุดซอฟต์แวร์ต้นแบบ (Software Prototype) สำหรับการทดลอง การเข้าใช้งานหมายความว่าคุณยอมรับข้อกำหนดทั้งหมด รวมทั้งความรับผิดชอบในการถือครองสินทรัพย์ดิจิทัลของคุณเอง</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-8 p-6 bg-red-500/10 border border-red-500/20 rounded-2xl">⚠️ ข้อความแจ้งเตือนความเสี่ยง (Risk Disclosure)</h2>
                        <ul className="list-disc ml-6 space-y-4">
                            <li><strong>ไม่มีคำแนะนำทางการเงิน:</strong> ข้อมูลทั้งหมดที่ปรากฏบนหน้า Dashboard และระบบอัตโนมัติไม่ใช่คำแนะนำทางการเงินหรือการชักชวนให้ลงทุน</li>
                            <li><strong>ความผันผวนของตลาด:</strong> สินทรัพย์ดิจิทัลมีความเสี่ยงสูง มีความผันผวนด้านราคามหาศาล ระบบอัตโนมัติอาจทำการเทรดในสภาวะตลาดที่ไม่เอื้ออำนวย</li>
                            <li><strong>ความรับผิดชอบส่วนบุคคล:</strong> ผู้ใช้มีหน้าที่รับผิดชอบในการเลือก Key ที่จำกัดสิทธิ์ (Read/Trade เท่านั้น ห้ามถอนเงิน) หากเกิดความสูญหายของ Key ทาง GridsMicro ไม่สามารถรับผิดชอบต่อความเสียหายใดๆ ได้</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">2. ข้อจำกัดความรับผิด</h2>
                        <p>**KUB-Nexus** และผู้พัฒนา (GridsMicro) จะไม่รับผิดชอบต่อความสูญเสียใดๆ ที่เกิดจากความผิดพลาดของระบบเครือข่าย Bitkub API v3, การเชื่อมต่ออินเทอร์เน็ตที่บ้านของผู้ใช้ หรือปัญหาทางเทคนิคของอุปกรณ์ ESP32</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">3. การใช้งานที่ถูกต้อง</h2>
                        <p>ห้ามมิให้ผู้ใช้นำโปรเจกต์นี้ไปทำซ้ำ ดัดแปลง เพื่อแสวงหาผลประโยชน์ทางการค้าหรือใช้ในรูปแบบที่ผิดกฎหมายต่อการประกอบธุรกิจสินทรัพย์ดิจิทัล</p>
                    </section>

                    <section className="pt-8 border-t border-white/5">
                        <p className="text-xs opacity-50">ข้อตกลงนี้เป็นสัญญาผูกพันทางกฎหมายระหว่างคุณและ © 2026 GridsMicro. All rights reserved.</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
