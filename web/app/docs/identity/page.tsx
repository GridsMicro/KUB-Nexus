import Link from "next/link";
import { SITE_LINKS } from "@/lib/constants";

export default function IdentityDoc() {
    const standards = [
        { title: "🚀 วิสัยทัศน์ (Vision)", desc: "สร้าง Robot, IoT และ AI ที่เป็นมิตรต่อโลก ขับเคลื่อนด้วยบล็อกเชน" },
        { title: "🌐 Web (Next.js 16+)", desc: "App Router, Tailwind 4, Glassmorphism และความสวยงามระดับพรีเมียม" },
        { title: "🤖 IoT & Robotics", desc: "RNPacket Protocol, FailsafeManager และระบบ NVS Encryption" },
        { title: "📐 กฎเหล็กในการทำงาน", desc: "Security First, No Hardcoding และ Thai Language Communication" }
    ];

    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-24 relative overflow-hidden">
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary opacity-5 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-4xl z-10 space-y-12">
                <Link href={SITE_LINKS.docs.root} className="text-sm opacity-50 hover:opacity-100 transition-opacity flex items-center gap-2">
                    ← Back to Docs Hub
                </Link>

                <article className="glass-card p-8 md:p-16 space-y-12">
                    <header className="text-center space-y-4">
                        <h1 className="text-5xl font-extrabold text-gradient-green">Developer Identity</h1>
                        <p className="opacity-40 tracking-widest uppercase text-xs font-bold">The Core Values of GridsMicro</p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {standards.map((s, i) => (
                            <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:border-primary/20 transition-all">
                                <h3 className="text-xl font-bold mb-3 text-white">{s.title}</h3>
                                <p className="text-sm opacity-60 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>

                    <section className="p-8 bg-primary/5 rounded-[40px] border border-primary/10">
                        <h2 className="text-2xl font-bold mb-6 text-center">📂 มาตรฐานโครงสร้างโปรเจกต์</h2>
                        <div className="font-mono text-sm space-y-2 opacity-70">
                            <p>├── /web &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Next.js 16 (App Router)</p>
                            <p>├── /firmware &nbsp;# ESP32 (PlatformIO)</p>
                            <p>├── /docs &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Documentation (MkDocs)</p>
                            <p>└── /tests &nbsp;&nbsp;&nbsp;&nbsp;# Unit Testing (Jest/Unity)</p>
                        </div>
                    </section>

                    <footer className="pt-8 border-t border-white/5 text-center text-xs opacity-30">
                        "We build the future, not just software." — GridsMicro
                    </footer>
                </article>
            </div>
        </main>
    );
}
