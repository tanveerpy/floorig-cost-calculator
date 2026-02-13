"use client";

import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50 min-h-[70vh] flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary-dark font-bold text-sm uppercase tracking-widest mb-4 block">
                        2026 Flooring Cost Database
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 text-balance">
                        Budget Your Flooring <br />
                        With <span className="text-primary">Confidence</span>.
                    </h1>
                    <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-lg">
                        Get instant, local-market-aligned estimates for any flooring project. From high-end hardwoods to industrial epoxy, we provide data-driven budgeting in seconds.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#calculator" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark shadow-lg shadow-primary/20 transition-all hover:-translate-y-1">
                            Check Prices Now
                        </a>
                        <a href="/guides/ultimate-flooring-cost-guide-2026/" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
                            Read 2026 Guide
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="relative lg:block hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-2xl rotate-3" />
                    <div className="relative bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Market Index</span>
                            <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded">Live Data</span>
                        </div>
                        <div className="space-y-4">
                            {[
                                { label: "Classic Hardwood", price: "$12.50", trend: "+ 1.2%" },
                                { label: "Modern LVT/Vinyl", price: "$4.80", trend: "- 0.5%" },
                                { label: "Designer Tile", price: "$8.20", trend: "+ 2.8%" },
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                                    <div>
                                        <div className="text-xs font-bold text-slate-500 uppercase">{item.label}</div>
                                        <div className="text-xl font-black text-slate-800">{item.price}<span className="text-sm font-normal text-slate-400">/sf</span></div>
                                    </div>
                                    <div className="text-xs font-bold text-emerald-600">{item.trend}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
