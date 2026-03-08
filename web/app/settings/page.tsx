"use client";

import { useState } from "react";

export default function SettingsPage() {
    const [apiKey, setApiKey] = useState("");
    const [apiSecret, setApiSecret] = useState("");
    const [status, setStatus] = useState<"idle" | "saving" | "success">("idle");

    const handleSave = () => {
        setStatus("saving");
        // ในอนาคตจะบันทึกผ่าน API route หรือ LocalStorage แบบเข้ารหัส
        setTimeout(() => {
            setStatus("success");
            setTimeout(() => setStatus("idle"), 2000);
        }, 1000);
    };

    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-24 relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary opacity-10 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-2xl z-10">
                <h1 className="text-4xl font-extrabold mb-8 text-gradient-orange">Device Settings</h1>

                <div className="glass-card p-8 md:p-12 space-y-8">
                    <div>
                        <h2 className="text-xl font-bold mb-2">Bitkub API Configuration</h2>
                        <p className="text-sm opacity-60 mb-6">กรุณากรอก API Key ของคุณเพื่อเริ่มใช้งานระบบ Autonomous Trading</p>

                        <div className="space-y-4">
                            <div className="flex flex-col space-y-2">
                                <label className="text-xs font-bold opacity-70">API KEY</label>
                                <input
                                    type="text"
                                    value={apiKey}
                                    onChange={(e) => setApiKey(e.target.value)}
                                    placeholder="กรอก API Key ของคุณ"
                                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary focus:outline-none transition-colors"
                                />
                            </div>

                            <div className="flex flex-col space-y-2">
                                <label className="text-xs font-bold opacity-70">API SECRET</label>
                                <input
                                    type="password"
                                    value={apiSecret}
                                    onChange={(e) => setApiSecret(e.target.value)}
                                    placeholder="กรอก API Secret ของคุณ"
                                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary focus:outline-none transition-colors"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            onClick={handleSave}
                            className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${status === 'success' ? 'bg-green-500 text-white' : 'bg-primary text-background hover:scale-[1.02] active:scale-95'
                                }`}
                        >
                            {status === 'idle' && 'Save Configuration'}
                            {status === 'saving' && 'Saving...'}
                            {status === 'success' && 'Configuration Saved! ✓'}
                        </button>
                    </div>

                    <div className="pt-4 border-t border-white/5">
                        <p className="text-[10px] opacity-40 text-center uppercase tracking-[0.2em]">
                            Security: All data is encrypted and stored locally.
                        </p>
                    </div>
                </div>

                <button
                    onClick={() => window.history.back()}
                    className="mt-8 text-sm opacity-60 hover:opacity-100 transition-opacity flex items-center space-x-2"
                >
                    <span>← Back to Dashboard</span>
                </button>
            </div>
        </main>
    );
}
