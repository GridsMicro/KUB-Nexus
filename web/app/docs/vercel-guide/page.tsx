import Link from "next/link";
import { SITE_LINKS } from "@/lib/constants";

export default function VercelDeploymentDoc() {
    const steps = [
        {
            title: "1. เตรียมความพร้อมก่อน Deploy",
            items: [
                "ตรวจสอบให้แน่ใจว่าโปรเจกต์รัน `npm run build` ผ่าน 100% (ผ่านแล้ว ✅)",
                "อัปโหลดโค้ดทั้งหมดขึ้นที่ GitHub Repository ของคุณ",
                "เตรียมค่า Bitkub API Key สำหรับการตั้งค่า Environment Variables"
            ]
        },
        {
            title: "2. ขั้นตอนบน Vercel Dashboard",
            items: [
                "ไปที่ [vercel.com](https://vercel.com) และเข้าสู่ระบบด้วย GitHub",
                "กดปุ่ม 'Add New' และเลือก 'Project'",
                "เลือก Repository ของ KUB-Nexus ที่คุณเพิ่งอัปโหลด",
                "ในส่วน 'Root Directory' ให้เลือกโฟลเดอร์ `web` (เนื่องจากโปรเจกต์เรามีทั้ง firmware และ web)"
            ]
        },
        {
            title: "3. การตั้งค่า Environment Variables (สำคัญมาก 🔒)",
            items: [
                "ในหน้า Configure Project ให้ไปที่หัวข้อ 'Environment Variables'",
                "เพิ่มค่าดังต่อไปนี้:",
                "• `BITKUB_API_KEY`: ใส่ Key ของคุณ",
                "• `BITKUB_API_SECRET`: ใส่ Secret ของคุณ",
                "• `NEXT_PUBLIC_APP_URL`: ใส่ URL ของเว็บคุณ (เช่น https://kub-nexus.vercel.app)"
            ]
        },
        {
            title: "4. กด Deploy และใช้งาน",
            items: [
                "กดปุ่ม 'Deploy' และรอระบบทำงานประมาณ 1-2 นาที",
                "เมื่อเสร็จสิ้น คุณจะได้ URL ของโปรเจกต์มาใช้งาน!",
                "อย่าลืมนำ URL ที่ได้ไปเพิ่มใน 'IP Whitelist' ของ Bitkub เพื่อให้ API ทำงานได้จริง"
            ]
        }
    ];

    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary opacity-5 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-4xl z-10 space-y-12">
                <Link href={SITE_LINKS.docs.root} className="text-sm opacity-50 hover:opacity-100 transition-opacity flex items-center gap-2">
                    ← Back to Docs Hub
                </Link>

                <header className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gradient-green">Vercel Deployment Guide</h1>
                    <p className="opacity-60 text-lg">
                        คู่มือการนำหน้าเว็บ KUB-Nexus ขึ้นสู่ระบบ Cloud ของ Vercel อย่างเป็นมืออาชีพและปลอดภัย
                    </p>
                </header>

                <div className="space-y-8">
                    {steps.map((step, i) => (
                        <section key={i} className="glass-card p-10 border-white/5">
                            <h2 className="text-2xl font-bold mb-6 text-white">{step.title}</h2>
                            <ul className="space-y-4">
                                {step.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 opacity-80 text-sm md:text-md">
                                        <span className="text-primary font-bold mt-1">{i + 1}.{idx + 1}</span>
                                        <span dangerouslySetInnerHTML={{ __html: item.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" class="text-primary hover:underline">$1</a>') }} />
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>

                <div className="p-8 bg-black/40 rounded-3xl border border-white/5 text-center">
                    <p className="text-sm opacity-50 leading-relaxed italic">
                        "Once deployed, your sustainable trading engine will be live 24/7 on the edge network."
                    </p>
                </div>
            </div>
        </main>
    );
}
