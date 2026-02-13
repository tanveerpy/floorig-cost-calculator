import { Navbar } from "@/components/layout/Navbar";
import { notFound } from "next/navigation";

const GUIDES_CONTENT: Record<string, any> = {
    "ultimate-flooring-cost-guide-2026": {
        title: "The Ultimate Guide to Flooring Costs in 2026",
        subtitle: "Everything you need to know about material prices, labor rates, and budgeting for your next project.",
        content: [
            {
                h2: "1. Material Breakdown: What Drives the Price?",
                p: "The largest variable in your budget will be the material itself. Laminate ranges from $1.50 - $5.00, while Hardwood can reach up to $15.00+ per sq. ft.",
                table: [
                    ["Material", "Cost / SF", "Durability"],
                    ["Laminate", "$1.50 - $5.00", "High"],
                    ["LVP", "$2.50 - $7.00", "Excellent"],
                    ["Hardwood", "$6.00 - $15.00", "Lifelong"],
                    ["Tile", "$2.00 - $10.00", "Highest"],
                    ["Epoxy", "$3.00 - $12.00", "Industrial"]
                ]
            },
            {
                h2: "2. Labor vs. Materials: The Hidden Ratio",
                p: "In 2026, labor typically accounts for 40% to 60% of total project cost. While material prices have stabilized, skilled installation crews command a premium. Basic glue-down installation starts at $2.00 per sq. ft., but precision-heavy tasks like high-gloss epoxy or marble tiling can easily reach $12.00+ per sq. ft. in labor alone."
            },
            {
                h2: "3. The ROI Factor: Flooring as an Investment",
                p: "Not all flooring is created equal when it comes to resale value. Hardwood continues to lead the pack with a 100-150% ROI, effectively paying for itself upon home sale. Luxury Vinyl Plank (LVP) offers the best 'perceived value' for mid-range rentals, providing high durability for a fraction of the hardwood cost.",
                list: [
                    "Solid Hardwood: 110% average ROI",
                    "Luxury Vinyl Plank: 85% average ROI",
                    "Natural Stone Tile: 70% average ROI",
                    "Professional Epoxy: 95% ROI (especially in high-end garage conversions)"
                ]
            },
            {
                h2: "4. Regional Price Fluctuations in 2026",
                p: "Our 2026 Price Index indicates significant variance based on your metropolitan area. Cost-of-living overrides in tech hubs (San Francisco, Austin, Seattle) can increase local labor quotes by up to 35% compared to the national average. Always use our calculator with 'Location Adjustments' for the most accurate ZIP-code-level prediction."
            },
            {
                h2: "5. Financing Your Flooring Project",
                p: "With 2026 interest rates settling, many homeowners are opting for specialized home improvement loans. Projects exceeding $10,000 often qualify for 0% introductory APR periods through major retailers, allowing the floor to start paying for itself in energy efficiency and comfort before the first payment is due."
            }
        ]
    },
    "hardwood-refinishing-vs-replacement": {
        title: "Hardwood Refinishing vs. Replacement Guide",
        subtitle: "When should you sand and when should you scrap? A cost-benefit analysis for 2026.",
        content: [
            {
                h2: "Refinishing Costs (The Sand & Seal)",
                p: "Refinishing existing hardwood costs between $3 and $7 per square foot. It is the most cost-effective way to restore 'hardwood floor refinishing cost' value."
            },
            {
                h2: "Replacement Costs (The Full Install)",
                p: "New installation averages $8 - $15 per square foot including 'hardwood flooring installation' labor. Choose this if boards are thin, wrapped, or have deep water damage."
            }
        ]
    },
    "concrete-polishing-cost-guide": {
        title: "Concrete Polishing & Surface Prep Guide",
        subtitle: "Turn your slab into a high-gloss industrial masterpiece. Pricing for 'polished concrete floor cost' systems.",
        content: [
            {
                h2: "Grind and Seal vs. Full Polish",
                p: "A basic grind and seal costs $3 - $5/sf, while a deep mechanical polish with diamond pads costs $7 - $12/sf for that 'concrete floor cost calculator' accuracy."
            }
        ]
    },
    "big-box-vs-local-installer": {
        title: "Lowe's vs. Home Depot vs. Local Installers",
        subtitle: "Unveiling the 'lowe's flooring installation cost calculator' markups and local vs national pricing.",
        content: [
            {
                h2: "Retailer Markups",
                p: "Big-box stores often use flat-rate labor which can be 10-20% higher than direct local contractors. 'flooring cost calculator lowes' usually includes sub-contractor fees."
            }
        ]
    }
};

export function generateStaticParams() {
    return Object.keys(GUIDES_CONTENT).map((slug) => ({
        slug: slug,
    }));
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const guide = GUIDES_CONTENT[slug];

    if (!guide) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background pt-32 pb-32">
            <Navbar />

            <div className="max-w-4xl mx-auto px-6">
                <header className="mb-20">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">
                        Pillar Authority / 2026
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
                        {guide.title}
                    </h1>
                    <p className="text-slate-500 text-xl leading-relaxed italic">
                        {guide.subtitle}
                    </p>
                </header>

                <div className="space-y-20">
                    {guide.content.map((section: any, idx: number) => (
                        <section key={idx} className="space-y-6">
                            <h2 className="text-3xl font-extrabold text-slate-900 border-b border-emerald-100 pb-4">
                                {section.h2}
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                {section.p}
                            </p>
                            {section.list && (
                                <ul className="space-y-3 bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                    {section.list.map((item: string, lidx: number) => (
                                        <li key={lidx} className="flex gap-3 text-slate-700 font-medium">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {section.table && (
                                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white p-2">
                                    <table className="w-full text-left text-sm">
                                        <thead>
                                            <tr className="bg-slate-50">
                                                {section.table[0].map((h: string) => (
                                                    <th key={h} className="p-4 text-xs font-bold uppercase tracking-widest text-slate-400">{h}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {section.table.slice(1).map((row: string[], ridx: number) => (
                                                <tr key={ridx} className="hover:bg-slate-50 transition-colors">
                                                    {row.map((c, cidx) => (
                                                        <td key={cidx} className="p-4 font-medium text-slate-700">{c}</td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </section>
                    ))}
                </div>

                <div className="mt-32 p-12 bg-emerald-900 rounded-[2.5rem] text-white shadow-2xl shadow-emerald-900/20">
                    <h3 className="text-4xl font-extrabold mb-4">Ready to Calculate?</h3>
                    <p className="text-emerald-100/80 mb-8 max-w-lg">Use our data-driven engine to get an exact quote based on the 2026 price points discussed in this guide.</p>
                    <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-emerald-900 transition-all">
                        Launch Calculator Hub
                    </button>
                </div>
            </div>
        </main>
    );
}
