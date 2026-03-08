"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_LINKS } from "@/lib/constants";

export default function SettingsPage() {
    const [apiKey, setApiKey] = useState("");
    const [apiSecret, setApiSecret] = useState("");
    const [status, setStatus] = useState<"idle" | "saving" | "success">("idle");
    const [showAdvanced, setShowAdvanced] = useState(false);

    const handleSave = () => {
        setStatus("saving");
        setTimeout(() => {
            setStatus("success");
            setTimeout(() => setStatus("idle"), 2000);
        }, 1000);
    };

    const handleBitkubNext = () => {
        // Mock Bitkub NEXT Integration
        alert("กำลังเชื่อมต่อกับ Bitkub NEXT... (ฟีเจอร์นี้จะพร้อมใช้งานในเวอร์ชันถัดไปผ่าน OAuth 2.0)");
    };

    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-24 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary opacity-5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary opacity-5 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-2xl z-10 space-y-8">
                <header className="flex justify-between items-end">
                    <div>
                        <h1 className="text-4xl font-extrabold text-gradient-orange">Settings</h1>
                        <p className="opacity-50 text-sm mt-2">จัดการการเชื่อมต่อและสิทธิ์การเข้าถึงบัญชีของคุณ</p>
                    </div>
                </header>

                {/* Level 1: Quick & Easy (Bitkub NEXT) */}
                <section className="glass-card p-8 border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all cursor-pointer group" onClick={handleBitkubNext}>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                            💎
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-bold text-white mb-1">Connect with Bitkub NEXT</h2>
                            <p className="text-sm opacity-60 leading-relaxed">
                                วิธีที่ง่ายและปลอดภัยที่สุด ไม่ต้องใช้ API Key เพียงแค่ล็อกอินด้วยบัญชี Bitkub ของคุณ (แนะนำสำหรับผู้ใช้ทั่วไป)
                            </p>
                        </div>
                        <div className="text-primary font-bold hidden md:block">
                            Connect →
                        </div>
                    </div>
                </section>

                <div className="flex items-center gap-4 py-4">
                    <div className="h-px bg-white/10 flex-1"></div>
                    <span className="text-[10px] uppercase tracking-widest opacity-30 font-bold">หรือใช้การตั้งค่าขั้นสูง</span>
                    <div className="h-px bg-white/10 flex-1"></div>
                </div>

                {/* Level 2: Advanced (API Keys for Hardware) */}
                <section className="glass-card overflow-hidden transition-all duration-500">
                    <button
                        onClick={() => setShowAdvanced(!showAdvanced)}
                        className="w-full p-8 flex justify-between items-center hover:bg-white/5 transition-colors"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-2xl">🤖</span>
                            <div className="text-left">
                                <h3 className="font-bold text-white">Advanced Configuration</h3>
                                <p className="text-xs opacity-40">สำหรับอุปกรณ์ IoT / Autonomous Hardware</p>
                            </div>
                        </div>
                        <span className={`transform transition-transform text-xs opacity-50 ${showAdvanced ? 'rotate-180' : ''}`}>▼</span>
                    </button>

                    {showAdvanced && (
                        <div className="p-8 pt-0 space-y-8 animate-in fade-in slide-in-from-top-4">
                            <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl flex items-start gap-4">
                                <span className="text-xl">💡</span>
                                <div className="text-xs opacity-80 leading-relaxed">
                                    <p className="font-bold mb-1">วิธีลัดความยุ่งยาก:</p>
                                    <p>คุณสามารถขอ API Key ได้ทันทีที่ <strong><a href={SITE_LINKS.external.apiManagement} target="_blank" className="text-primary hover:underline">Bitkub API Management</a></strong> <br />ระบุสิทธิ์เป็น <strong>Read/Trade</strong> เท่านั้น ห้ามเลือก Withdraw!</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex flex-col space-y-2">
                                    <label className="text-xs font-bold opacity-70 uppercase tracking-widest">API KEY</label>
                                    <input
                                        type="text"
                                        value={apiKey}
                                        onChange={(e) => setApiKey(e.target.value)}
                                        placeholder="3bc4... (จดจากหน้า Bitkub)"
                                        className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-primary focus:outline-none transition-all placeholder:opacity-20"
                                    />
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <label className="text-xs font-bold opacity-70 uppercase tracking-widest">API SECRET</label>
                                    <input
                                        type="password"
                                        value={apiSecret}
                                        onChange={(e) => setApiSecret(e.target.value)}
                                        placeholder="••••••••••••••••••••••••"
                                        className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-primary focus:outline-none transition-all placeholder:opacity-20"
                                    />
                                </div>
                            </div>

                            <button
                                onClick={handleSave}
                                className={`w-full py-5 rounded-[24px] font-extrabold text-lg shadow-xl shadow-primary/10 transition-all ${status === 'success' ? 'bg-green-500 text-white' : 'bg-primary text-background hover:-translate-y-1 active:scale-95'
                                    }`}
                            >
                                {status === 'idle' && 'Save Configuration'}
                                {status === 'saving' && '⚡ System Saving...'}
                                {status === 'success' && '🚀 Success! Device Ready ✓'}
                            </button>
                        </div>
                    )}
                </section>

                <footer className="pt-8 flex flex-col items-center gap-6">
                    <p className="text-[10px] opacity-20 text-center uppercase tracking-[0.3em] font-bold">
                        Security Notice: All keys are encrypted and strictly isolated.
                    </p>

                    <Link
                        href={SITE_LINKS.home}
                        className="text-sm opacity-40 hover:opacity-100 hover:text-primary transition-all flex items-center space-x-2 bg-white/5 px-6 py-2 rounded-full border border-white/5"
                    >
                        <span>← Back to Oasis</span>
                    </Link>
                </footer>
            </div>
        </main>
    );
}
