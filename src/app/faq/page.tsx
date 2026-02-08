import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HelpCircle, Search, ChevronRight } from "lucide-react";

const FAQ_CATEGORIES = [
    {
        title: "Project Budgeting",
        icon: <HelpCircle className="w-5 h-5" />,
        questions: [
            { q: "How much does it cost to install 1000 sq ft of flooring?", a: "For laminate, expect $4,000-$6,000. For hardwood, expect $10,000-$15,000 including labor and materials. Our calculator provides a precise dynamic quote for any area." },
            { q: "What is the hidden cost of flooring?", a: "Most homeowners forget the price of transitions ($50/stick), subfloor leveling ($2/sq ft), and furniture moving. We've integrated these into our tool to prevent budget surprises." },
            { q: "Is professional labor or DIY cheaper?", a: "DIY saves ~$2-$8 per sq ft in labor, but mistakes in subfloor prep can cause floor failure (creaking, gapping), potentially doubling your long-term cost." }
        ]
    },
    {
        title: "Material Selection",
        icon: <Search className="w-5 h-5" />,
        questions: [
            { q: "Which flooring is best for large dogs?", a: "Luxury Vinyl Plank (LVP) with a 20mil wear layer or Ceramic Tile are the most scratch-resistant options for pets." },
            { q: "Should I choose laminate or vinyl?", a: "Vinyl (LVP) is 100% waterproof and better for basements/baths. Laminate is superior for scratch resistance and often has a more realistic 'wood feel'." },
            { q: "Is bamboo considered hardwood?", a: "Technically a grass, but strand-woven bamboo is actually harder and more durable than traditional Red Oak." }
        ]
    },
    {
        title: "Installation & Prep",
        icon: <ChevronRight className="w-5 h-5" />,
        questions: [
            { q: "Does old flooring need to be removed?", a: "Generally, yes. Installing over old carpet is impossible. You can sometimes install over old vinyl or tile if it is perfectly level and secured." },
            { q: "What is acclimatization?", a: "Materials like hardwood and laminate need to sit in your controlled home environment for 48 hours to 7 days before install to prevent warping." },
            { q: "What subfloor prep is required?", a: "The subfloor must be flat, dry, and structurally sound. Any dip over 1/8 inch requires self-leveling compound." }
        ]
    }
];

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-[#F8FAFC]">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 bg-emerald-900 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[120px] rounded-full translate-x-1/2" />
                <div className="max-w-7xl mx-auto px-6 relative">
                    <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Help Center</span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight">
                        Common Questions <br /><span className="text-emerald-400">Expert Answers.</span>
                    </h1>
                    <p className="text-emerald-100/60 text-xl max-w-2xl leading-relaxed">
                        Everything you need to know about 2026 flooring costs, material durability, and professional installation standards.
                    </p>
                </div>
            </section>

            {/* FAQ Grid */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {FAQ_CATEGORIES.map((cat, idx) => (
                            <div key={idx} className="space-y-10">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 text-primary">
                                        {cat.icon}
                                    </div>
                                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">{cat.title}</h2>
                                </div>
                                <div className="space-y-8">
                                    {cat.questions.map((faq, fidx) => (
                                        <div key={fidx} className="group">
                                            <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">
                                                {faq.q}
                                            </h3>
                                            <p className="text-slate-500 leading-relaxed text-sm bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
                                                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-100 group-hover:bg-primary transition-colors" />
                                                {faq.a}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expert CTA */}
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto p-12 lg:p-20 bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-lg">
                        <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Still have questions about your specific project?</h2>
                        <p className="text-slate-500 text-lg">Our data-driven pricing index is updated weekly. Launch the calculator to see real-time quotes for your area.</p>
                    </div>
                    <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-1">
                        Back to Calculator
                    </button>
                </div>
            </section>
        </main>
    );
}
