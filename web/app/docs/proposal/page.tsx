import Link from "next/link";
import { SITE_LINKS } from "@/lib/constants";

export default function ProposalDoc() {
    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary opacity-5 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-4xl z-10 space-y-12">
                <Link href={SITE_LINKS.docs.root} className="text-sm opacity-50 hover:opacity-100 transition-opacity flex items-center gap-2">
                    ← Back to Docs Hub
                </Link>

                <article className="glass-card p-8 md:p-16 space-y-10 prose prose-invert max-w-none">
                    <header className="border-b border-white/10 pb-10">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gradient-green">Project Proposal: KUB-Nexus</h1>
                        <p className="text-xl opacity-60 italic">The Autonomous Eco-Trading Gateway for the Future</p>
                    </header>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-primary">🌟 1. บทนำ (The Vision)</h2>
                        <p className="opacity-80 leading-relaxed">
                            ในโลกที่เทคโนโลยีการเงินเร็วกว่าที่มนุษย์จะตามทัน และปัญหาสิ่งแวดล้อมเป็นเรื่องเร่งด่วน **KUB-Nexus** จึงถูกออกแบบมาให้เป็น "จุดเชื่อมต่ออัจฉริยะ" ที่ไม่ใช่แค่แอปเทรด Bitcoin ทั่วไป แต่เป็นระบบนิเวศแนวคิดใหม่ที่ใช้ **IoT (ESP32)** เป็นประสาทสัมผัส และใช้ **Next.js 16 (App Router)** เป็นสมองส่วนกลาง เพื่อให้การเทรดเป็นไปอย่างอัตโนมัติ แม่นยำ และช่วยโลกไปพร้อมๆ กัน
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-primary">🏛️ 2. สถาปัตยกรรมนวัตกรรม (Technical Pillars)</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                                <h3 className="text-lg font-bold mb-3 text-secondary">🌿 Hardware - ESP32</h3>
                                <ul className="text-sm opacity-70 space-y-2">
                                    <li>• Eco-Oracle: วัดค่าพลังงานสะอาดจริง</li>
                                    <li>• RNPacket/CRC-16 Protocol</li>
                                    <li>• FailsafeManager Security</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                                <h3 className="text-lg font-bold mb-3 text-primary">🌐 Web - Next.js 16</h3>
                                <ul className="text-sm opacity-70 space-y-2">
                                    <li>• Premium Glassmorphism UI</li>
                                    <li>• Autonomous Trading Logic</li>
                                    <li>• Real-time Bitkub API Cloud</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-primary">🔒 4. มาตรฐานความปลอดภัย</h2>
                        <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl">
                            <p className="text-sm text-red-200 font-bold mb-2">Security Alert & Standards:</p>
                            <p className="text-xs text-red-100/70 leading-relaxed">
                                เนื่องจากระบบมีการถือครอง API Keys และเข้าถึงเงินในบัญชีจริง เราจึงใช้มาตรฐานสูงสุด: ห้าม Hardcode Secret, ใช้ IP Whitelisting,
                                และบังคับใช้ Non-Withdrawal Keys เท่านั้น เพื่อปกป้องทรัพย์สินดิจิทัลของคุณ
                            </p>
                        </div>
                    </section>

                    <footer className="pt-10 border-t border-white/10 text-center opacity-40 text-xs">
                        © 2026 GridsMicro. Strategic Documentation.
                    </footer>
                </article>
            </div>
        </main>
    );
}
