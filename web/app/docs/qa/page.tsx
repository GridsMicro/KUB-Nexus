import Link from "next/link";
import { SITE_LINKS } from "@/lib/constants";

export default function QALogDoc() {
    const qas = [
        {
            q: "ซื้อขาย Bitcoin ผ่าน Bitkub บนเว็บได้ไหม?",
            a: "ทำได้แน่นอนครับ! ผ่าน Bitkub API v3 สำหรับการเทรดอัตโนมัติ และหน้า Dashboard ส่วนตัวที่ปลอดภัย"
        },
        {
            q: "ผู้ใช้ต้องเป็น Dev หรือไม่ ถึงจะใช้งานได้?",
            a: "ไม่จำเป็นครับ! เราออกแบบหน้า Settings UI และ IoT WiFi Portal ให้ใช้งานง่ายเหมือนเครื่องใช้ไฟฟ้าอัจฉริยะทั่วไป"
        },
        {
            q: "วาง API Key อย่างไรให้ปลอดภัย?",
            a: "ใช้ .env.local สำหรับเว็บ และใช้ ConfigManager (NVS) ภายในชิป ESP32 โดยห้าม Hardcode ลงโค้ดเด็ดขาด"
        },
        {
            q: "ผู้ใช้ต้องมีบัญชี Bitkub และล็อกอินยังไง?",
            a: "จำเป็นต้องมีบัญชีเพื่อทำธุรกรรมจริง เชื่อมต่อได้ทั้งผ่าน API Key และ Bitkub NEXT (OAuth) ในอนาคต"
        }
    ];

    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary opacity-5 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-4xl z-10 space-y-12">
                <Link href={SITE_LINKS.home} className="text-sm opacity-50 hover:opacity-100 transition-opacity flex items-center gap-2">
                    ← Back to Oasis
                </Link>

                <header>
                    <h1 className="text-5xl font-extrabold mb-4 text-gradient-green">Q&A Logs</h1>
                    <p className="opacity-60 text-lg">บันทึกฐานความรู้และคำตอบเชิงเทคนิคที่เกิดขึ้นระหว่างการพัฒนา</p>
                </header>

                <div className="space-y-6">
                    {qas.map((item, i) => (
                        <div key={i} className="glass-card p-8 md:p-12 border-white/5 hover:border-primary/20 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-white flex gap-4">
                                <span className="text-primary font-mono shrink-0">Q:</span>
                                {item.q}
                            </h3>
                            <div className="flex gap-4 p-6 bg-white/5 rounded-2xl">
                                <span className="text-secondary font-mono shrink-0 font-bold italic">Ans:</span>
                                <p className="text-md opacity-80 leading-relaxed italic">{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-8 border border-dashed border-white/10 rounded-2xl text-center opacity-40 text-xs">
                    บันทึกนี้จะถูกอัปเดตอย่างต่อเนื่องตามความคืบหน้าของโครงการ KUB-Nexus
                </div>
            </div>
        </main>
    );
}
