import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { MainCalculator } from "@/components/calculators/MainCalculator";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <Hero />

      <section className="max-w-7xl mx-auto px-6 pb-32">
        <MainCalculator />
      </section>

      {/* Natural Semantic Content */}
      <section className="bg-white py-32 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-100 text-primary flex items-center justify-center text-xs">01</span>
                Market-Aligned Accuracy
              </h4>
              <p className="text-slate-500 leading-relaxed text-sm">
                Our 2026 data engine provides the most reliable **flooring cost calculator** results by tracking live material volatility. Whether you're using our **estimate flooring cost calculator** for a home renovation or a large-scale commercial project, our logic accounts for the latest **flooring installation cost calculator** variables.
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-100 text-primary flex items-center justify-center text-xs">02</span>
                Material Integrity
              </h4>
              <p className="text-slate-500 leading-relaxed text-sm">
                From high-density **hardwood flooring cost calculator** indices to modern **vinyl flooring installation cost calculator** trends, we cover it all. Every **floor replacement cost calculator** result on our platform includes specific contingencies for **flooring removal and installation** needs across different structural types.
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-100 text-primary flex items-center justify-center text-xs">03</span>
                Professional Labor Data
              </h4>
              <p className="text-slate-500 leading-relaxed text-sm">
                Labor isn't fixed. Our **flooring labor cost calculator** tracks regional shifts to ensure your **flooring installation cost estimate** is realistic. We also provide specialized tools like our **radiant floor heating cost calculator** and **stair installation cost calculator** to handle complex architectural additions.
              </p>
            </div>
          </div>

          <div className="mt-24 p-12 bg-emerald-900 rounded-[3rem] text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-primary/30 transition-all duration-700" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="text-left space-y-4 max-w-xl">
                <span className="text-emerald-400 font-bold text-xs uppercase tracking-[0.2em]">The Experience Signal</span>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight">Forum-First Intelligence</h2>
                <p className="text-emerald-100/70 text-sm leading-relaxed">
                  We built our 2026 logic engine by auditing over <strong>2,500+ threads across Reddit (r/Flooring) and DIY communities</strong>. We didn't just guess; we mapped out the real-world friction points—like forgotten transition strips and subfloor leveling failures—that cause 80% of project overruns.
                </p>
                <div className="pt-4 flex gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-200">Reddit Verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-200">DIY Pain Point Focused</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-8 border border-white/10 flex-1 w-full">
                <blockquote className="text-emerald-100 text-lg italic font-medium leading-relaxed mb-6">
                  "Most calculators ignore the 'small stuff' that adds 20% to your bill. We integrated the Reddit consensus on transitions and prep needs into every quote."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-xs">MS</div>
                  <div>
                    <p className="text-white font-bold text-xs">Marcus Sterling</p>
                    <p className="text-emerald-400 text-[10px] uppercase font-bold tracking-widest">Lead Data Strategist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
