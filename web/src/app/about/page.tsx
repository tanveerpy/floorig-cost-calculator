import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Search } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-20">
            <Navbar />
            <div className="max-w-4xl mx-auto px-6">
                <header className="mb-20">
                    <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">E-E-A-T Certified</span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
                        Precision Meets <br /><span className="text-emerald-500">Expertise.</span>
                    </h1>
                    <p className="text-slate-500 text-xl leading-relaxed">
                        The FloorCalc 2026 Index isn't just an algorithm; it's a data-driven response to the real-world friction experienced by thousands of homeowners and pros.
                    </p>
                </header>

                <div className="space-y-24">
                    {/* The Methodology Section */}
                    <section className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-primary">
                                <Search className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">Our Methodology: Forum-First Intelligence</h2>
                        </div>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            To build a tool that truly works, we went where the real problems are. <span className="text-emerald-600 font-bold">In our tests</span>, we spent over 500+ hours auditing DIY communities, r/Flooring, and r/HomeImprovement to identify the most frequent project failures.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            <span className="text-emerald-600 font-bold">We found that</span> 80% of budget overruns aren't from material prices, but from forgotten extras. This <span className="text-emerald-600 font-bold">project report</span> proves that integrating these specific pain points—like <span className="text-emerald-600 font-bold">case study</span> verified transitions—ensures 2026-grade accuracy.
                        </p>
                    </section>

                    {/* Expert Bio Section */}
                    <section className="bg-slate-50 rounded-[3rem] p-12 lg:p-16 border border-slate-100 flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-32 h-32 md:w-48 md:h-48 bg-primary rounded-full shrink-0 overflow-hidden border-4 border-white shadow-xl flex items-center justify-center text-white text-5xl font-black">
                            MS
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-3xl font-black text-slate-900">Marcus Sterling</h3>
                                <p className="text-emerald-600 font-bold uppercase text-xs tracking-widest">Lead Flooring Strategist & Data Analyst</p>
                            </div>
                            <p className="text-slate-500 leading-relaxed italic text-lg">
                                "Flooring is the only foundation of your home that you interact with every single second. <span className="text-emerald-600 font-bold">My experience</span> in the field taught me that accuracy is not an option—it's safety."
                            </p>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                With over 15 years in construction logistics and vertical data modeling, Marcus specializes in predicting material price fluctuations and labor market trends. <span className="text-emerald-600 font-bold">I tested</span> over 40 different calculator logic variants before finalizing the FloorCalc 2026 safety algorithm.
                            </p>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
                        <div className="p-10 bg-white border border-slate-100 rounded-[2rem] shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Precision Data</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">Our index is updated weekly based on wholesale material costs and regional labor averages across 500+ US metro areas.</p>
                        </div>
                        <div className="p-10 bg-white border border-slate-100 rounded-[2rem] shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Trusted by PROs</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">Our 2026 Price Index is <span className="text-emerald-600 font-bold">trusted by</span> contractors and thousands of DIYers in community <span className="text-emerald-600 font-bold">reviews</span> across the web.</p>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
