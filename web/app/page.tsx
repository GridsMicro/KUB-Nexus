import Image from "next/image";
import Link from "next/link";
import { getTicker } from "@/lib/bitkub";
import { SITE_LINKS } from "@/lib/constants";

export default async function Home() {
  const [btcTicker, usdtTicker] = await Promise.all([
    getTicker('BTC_THB'),
    getTicker('USDT_THB')
  ]);

  const btcPrice = btcTicker ? new Intl.NumberFormat('th-TH').format(btcTicker.last) : 'กำลังโหลด...';
  const usdtPrice = usdtTicker ? new Intl.NumberFormat('th-TH').format(usdtTicker.last) : 'กำลังโหลด...';

  // Calculate BTC/USDT price since Bitkub is primarily THB-based
  const btcUsdtPrice = (btcTicker && usdtTicker)
    ? new Intl.NumberFormat('en-US', { minimumFractionDigits: 0 }).format(btcTicker.last / usdtTicker.last)
    : '...';

  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary opacity-10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary opacity-10 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation Bar */}
      <nav className="w-full max-w-7xl flex justify-between items-center mb-16 z-10 glass-card px-8 py-4">
        <Link href={SITE_LINKS.home} className="text-2xl font-bold tracking-tighter">
          KUB<span className="text-primary">-Nexus</span>
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium opacity-70">
          <a href={SITE_LINKS.sections.ecosystem} className="hover:opacity-100 transition-opacity">Ecosystem</a>
          <a href={SITE_LINKS.sections.technology} className="hover:opacity-100 transition-opacity">Technology</a>
          <Link href={SITE_LINKS.docs.root} className="hover:opacity-100 transition-opacity">Docs</Link>
          <Link href={SITE_LINKS.store} className="hover:text-primary hover:opacity-100 transition-colors font-bold text-white relative group">
            <span className="absolute -top-3 -right-6 bg-red-500 text-[9px] px-2 py-0.5 rounded-full text-white shadow-lg shadow-red-500/50 animate-pulse">HOT</span>
            Store
          </Link>
          <Link href={SITE_LINKS.settings} className="hover:opacity-100 transition-opacity">Settings</Link>
        </div>
        <Link href={SITE_LINKS.settings}>
          <button className="bg-primary text-background px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform active:scale-95">
            Get Started
          </button>
        </Link>
      </nav>



      {/* Hero Section */}
      <section id="ecosystem" className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <div className="flex flex-col space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            The Next Evolution of <br />
            <span className="text-gradient-green">Sustainable Trading</span>
          </h1>
          <p className="text-lg opacity-80 max-w-xl leading-relaxed">
            เชื่อมต่อพลังงานสะอาดเข้ากับโลก Blockhain ด้วยระบบ Autonomous อัจฉริยะ
            ควบคุมทุกการลงทุนผ่าน IoT และ Interface ระดับพรีเมียม
          </p>
          <div className="flex flex-wrap gap-3 z-20">
            <div className="flex items-center space-x-3 glass-card px-5 py-2 w-fit">
              <span className="text-secondary text-xs font-bold uppercase tracking-tight">BTC/THB</span>
              <span className="text-lg font-mono font-bold">฿{btcPrice}</span>
              <span className={`text-[10px] ${btcTicker && btcTicker.percentChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {btcTicker && btcTicker.percentChange >= 0 ? '▲' : '▼'} {btcTicker?.percentChange}%
              </span>
            </div>

            <div className="flex items-center space-x-3 glass-card px-5 py-2 w-fit border-white/5">
              <span className="text-primary text-xs font-bold uppercase tracking-tight">BTC/USDT</span>
              <span className="text-lg font-mono font-bold">${btcUsdtPrice}</span>
            </div>

            <div className="flex items-center space-x-3 glass-card px-5 py-2 w-fit border-white/5">
              <span className="opacity-50 text-xs font-bold uppercase tracking-tight text-white">USDT/THB</span>
              <span className="text-lg font-mono font-bold">฿{usdtPrice}</span>
              <span className={`text-[10px] ${usdtTicker && usdtTicker.percentChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {usdtTicker && usdtTicker.percentChange >= 0 ? '▲' : '▼'} {usdtTicker?.percentChange}%
              </span>
            </div>
          </div>

          <div className="flex space-x-4 pt-4">
            <Link href={SITE_LINKS.settings}>
              <button className="bg-secondary text-background px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-[0_0_30px_rgba(247,147,26,0.3)] transition-all">
                Start Mining Energy
              </button>
            </Link>
            <button className="border border-white/10 glass-card px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/5 transition-all">
              View Analytics
            </button>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative glass-card p-2 overflow-hidden aspect-square flex items-center justify-center">
            <Image
              src="/hero.png"
              alt="KUB-Nexus Dashboard Preview"
              width={800}
              height={800}
              className="rounded-[24px] object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section id="technology" className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 z-10">
        {[
          { title: "Eco-DCA", desc: "ซื้อ Bitcoin อัตโนมัติเมื่อผลิตพลังงานสะอาดได้ตามเป้าหมาย", icon: "🌱", gradient: "text-gradient-green" },
          { title: "Hardware Guard", desc: "ความปลอดภัยระดับทหารด้วย ESP32 Hardware Authentication", icon: "🔒", gradient: "" },
          { title: "Real-time Aura", desc: "แสดงสภาวะตลาดผ่าน Dashboard และแสงสีอัจฉริยะบนโต๊ะทำงาน", icon: "📊", gradient: "text-gradient-orange" }
        ].map((f, i) => (
          <div key={i} className="glass-card p-10 hover:translate-y-[-8px] transition-transform cursor-pointer group">
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{f.icon}</div>
            <h3 className={`text-2xl font-bold mb-4 ${f.gradient}`}>{f.title}</h3>
            <p className="opacity-60 leading-relaxed text-sm">
              {f.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-48 w-full max-w-7xl pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs opacity-40 z-10 pb-12 gap-6">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p>© 2026 GridsMicro. All rights reserved.</p>
          <span className="hidden md:block opacity-20">|</span>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-pointer group">
            <span className="text-xl">☕</span>
            <span>Buy me a coffee: </span>
            <span className="font-bold text-white group-hover:text-primary transition-colors">PromptPay {SITE_LINKS.support.promptpay}</span>
          </div>
        </div>
        <div className="flex space-x-6">
          <Link href={SITE_LINKS.legal.privacy} className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href={SITE_LINKS.legal.terms} className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href={SITE_LINKS.legal.security} className="hover:text-white transition-colors">Security</Link>
        </div>
      </footer>
    </main>
  );
}

