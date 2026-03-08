import Link from "next/link";
import { SITE_LINKS } from "@/lib/constants";

export default function DocsPage() {
    const docs = [
        { title: "Project Proposal", desc: "วิสัยทัศน์และโครงสร้างโครงการ KUB-Nexus", path: SITE_LINKS.docs.proposal },
        { title: "User Guide", desc: "คู่มือการตั้งค่าสำหรับผู้ใช้งานทั่วไป", path: SITE_LINKS.docs.manual },
        { title: "Developer Identity", desc: "มาตรฐานการพัฒนาและกฎเหล็กของ GridsMicro", path: SITE_LINKS.docs.identity },
        { title: "Q&A Logs", desc: "บันทึกฐานความรู้และคำตอบทางเทคนิค", path: SITE_LINKS.docs.qa },
        { title: "Vercel Deployment", desc: "ขั้นตอนการนำหน้าเว็บขึ้นระบบ Cloud อย่างปลอดภัย", path: "/docs/vercel-guide" },
    ];

    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary opacity-5 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-4xl z-10">
                <Link href={SITE_LINKS.home} className="text-sm opacity-50 hover:opacity-100 transition-opacity mb-8 block">
                    ← Back to Dashboard
                </Link>

                <h1 className="text-5xl font-extrabold mb-4 text-gradient-green">Documentation</h1>
                <p className="opacity-60 mb-12 max-w-2xl">
                    แหล่งรวมข้อมูลทางเทคนิค คู่มือการใช้งาน และบันทึกการพัฒนาโครงการ KUB-Nexus เพื่อความโปร่งใสและยั่งยืน
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {docs.map((doc, i) => (
                        <div key={i} className="glass-card p-8 hover:border-primary/30 transition-all cursor-pointer group">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{doc.title}</h3>
                            <p className="text-sm opacity-60 mb-6 leading-relaxed">{doc.desc}</p>
                            <span className="text-xs font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                Read More →
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-16 p-8 rounded-3xl border border-dashed border-white/10 text-center">
                    <p className="text-sm opacity-40">
                        เอกสารฉบับเต็มกำลังถูกย้ายระบบไปยัง MkDocs ตามมาตรฐาน GitHub Pages เร็วๆ นี้
                    </p>
                </div>
            </div>
        </main>
    );
}
