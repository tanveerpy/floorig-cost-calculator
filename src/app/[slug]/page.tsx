import { Navbar } from "@/components/layout/Navbar";
import { MainCalculator } from "@/components/calculators/MainCalculator";
import { notFound } from "next/navigation";

const MATERIAL_CONTENT: Record<string, any> = {
    hardwood: {
        title: "Hardwood & Wood Flooring",
        description: "Our comprehensive **hardwood flooring cost calculator** provides precise estimates for top-tier oak, maple, and cherry. Whether you're researching **hardwood flooring installation cost calculator** rates or the specific **wood floor refinishing cost calculator** variables for your restoration project, our 2026 price index delivers accurate **hardwood floor installation cost calculator** data instantly.",
        faqs: [
            { q: "Is engineered hardwood or solid wood better?", a: "Solid wood offers a lifetime of refinishing opportunities, while engineered wood provides better stability in humid environments." },
            { q: "What is the average cost for refinishing?", a: "Based on our **wood floor refinishing cost calculator**, most homeowners pay between $3 and $7 per square foot for a professional sand and seal." }
        ],
        pros: ["Increases home value significantly", "Can be refinished multiple times", "Natural insulation and warmth", "Timeless aesthetic appeal"],
        cons: ["Susceptible to humidity and water damage", "Higher initial investment", "Can scratch or dent over time"],
        maintenance: "Hardwood requires regular sweeping and occasional deep cleaning with pH-neutral wood cleaners. Avoid standing water and use furniture pads to prevent deep scratches."
    },
    vinyl: {
        title: "Vinyl & LVP Flooring",
        description: "Budget your modern waterproof surface with our **vinyl flooring cost calculator**. We specialize in **lvp flooring installation cost calculator** metrics for high-traffic homes. Our engine also tracks the latest **luxury vinyl plank flooring cost calculator** trends, ensuring your **vinyl plank flooring installation cost calculator** results match current market labor rates.",
        faqs: [
            { q: "What is the difference between LVP and LVT?", a: "LVP refers to 'Plank' shapes commonly used for wood-looks, while LVT refers to 'Tile' shapes used for stone and ceramic aesthetics." },
            { q: "How much is labor for vinyl plank?", a: "Our **vinyl flooring labor cost calculator** currently indexes labor between $2.00 and $4.50 per square foot depending on the subfloor preparation required." }
        ],
        pros: ["100% Waterproof - ideal for basements", "Extremely DIY friendly", "Indistinguishable from real wood", "Highly scratch resistant"],
        cons: ["Cannot be refinished", "Subfloor must be perfectly level", "Varies greatly in wear layer quality"],
        maintenance: "LVP is low maintenance. Regular vacuuming (without a beater bar) and damp mopping are sufficient. Avoid abrasive cleaners that can dull the 20mil wear layer."
    },
    laminate: {
        title: "Laminate Flooring",
        description: "Calculate your resilient floor budget with our **laminate flooring installation cost calculator**. We provide deep insights for every **laminate floor cost calculator** query, from premium Pergo systems to budget-friendly options. Our **laminate flooring cost calculator** automatically includes underlayment and AC durability ratings for a complete quote.",
        faqs: [
            { q: "Can I install laminate in a bathroom?", a: "Only if the product is explicitly rated as waterproof; standard laminate can swell if exposed to standing water." }
        ],
        pros: ["Cost-effective budget option", "Advanced scratch protection", "AC4/AC5 ratings for commercial durability", "Fade resistant in sunlight"],
        cons: ["Sound can be 'clacky' without proper underlay", "Not always waterproof", "Harder to repair than individual tiles"],
        maintenance: "Wipe spills immediately. Use a slightly damp microfiber mop. Avoid steam cleaners as they can force moisture into the core layers."
    },
    tile: {
        title: "Tile & Stone Flooring",
        description: "Our **tile flooring installation cost calculator** handles everything from ceramic to natural stone. Get a precise **tile floor installation cost calculator** result including grout and sealer. Whether you're researching **ceramic tile floor cost calculator** rates or high-end **marble flooring cost calculator** projects, our 2026 index ensures your **tile flooring cost calculator** results are accurate.",
        faqs: [
            { q: "Why is marble installation more expensive?", a: "Marble is fragile and requires specialized cutting tools and high-strength adhesives, increasing the **floor tile installation cost calculator** labor component." }
        ],
        pros: ["Unmatched longevity (50+ years)", "Hygienic and easy to sanitize", "Available in infinite styles", "Extremely heat resistant"],
        cons: ["Hard and cold underfoot", "Installation is time-consuming", "Grout requires periodic sealing"],
        maintenance: "Regular sweeping and mopping. Use Grout Sealer annually to prevent staining. Avoid acidic cleaners on natural stone like marble or travertine."
    },
    epoxy: {
        title: "Epoxy & Garage Coatings",
        description: "Protect your sanctuary with the **epoxy flooring cost calculator**. We provide accurate **epoxy garage floor cost calculator** results for residential and industrial projects. Our **concrete epoxy flooring cost calculator** logic handles multiple coating layers and surface preparation requirements automatically.",
        faqs: [
            { q: "Is garage epoxy permanent?", a: "With professional preparation, a high-quality epoxy coating can last 10-15 years in a residential garage environment." }
        ],
        pros: ["Chemical and oil resistant", "Seamless and hygienic surface", "Brightens the space (light reflectivity)", "Extremely durable for vehicles"],
        cons: ["Slippery when wet", "Intensive subfloor preparation required", "Strong odors during installation"],
        maintenance: "Sweep or hose out. For deep cleans, use a mild ammonia solution. Avoid citrus-based cleaners that can etched the epoxy finish."
    },
    concrete: {
        title: "Concrete & Polished Floors",
        description: "Get industrial-grade estimates with our **concrete floor cost calculator**. We offer precise **polished concrete floor cost calculator** data for basements, garages, and commercial spaces. Use our **concrete garage floor cost calculator** to compare different finish levels from matte to high-gloss mirror finishes.",
        faqs: [
            { q: "Is polished concrete harder than tile?", a: "In terms of structural density, polished concrete is more durable, but tile offers more aesthetic variety and easier individual piece replacement." }
        ],
        pros: ["Zero VOC options", "Minimalist industrial look", "Thermal mass for energy efficiency", "Stain resistant after sealing"],
        cons: ["Cracking is natural over time", "Very cold without radiant heat", "Limited acoustical damping"],
        maintenance: "Neutral-pH mopping. Periodically apply a high-quality floor finish or 'buff' to maintain the gloss level."
    },
    bamboo: {
        title: "Sustainable Bamboo Flooring",
        description: "Eco-conscious homeowners trust our **bamboo flooring cost calculator** for strand-woven and traditional bamboo estimates. Our system provides accurate cost-benefit analysis for sustainable flooring projects compared to traditional hardwoods.",
        faqs: [
            { q: "Is bamboo really eco-friendly?", a: "Yes, bamboo is a grass that grows significantly faster than trees, making it a highly renewable flooring resource." }
        ],
        pros: ["Sustainably harvested", "Strand-woven is harder than oak", "Distinct contemporary look", "Hypoallergenic properties"],
        cons: ["Quality varies drastically between brands", "Vulnerable to moisture fluctuations", "Can be difficult to refinish"],
        maintenance: "Similar to hardwood. Use a slightly damp mop and cleaners specifically designed for bamboo to avoid warping."
    },
    mezzanine: {
        title: "Mezzanine & Industrial Decking",
        description: "Architects and project managers use our **mezzanine floor cost calculator** to estimate high-capacity steel decking and industrial platforms. Our 2026 index handles structural load requirements and safety compliance variables.",
        faqs: [
            { q: "Can I use wood for a mezzanine floor?", a: "Light-duty mezzanines can use timber, but industrial projects typically require steel decking and specialized fire-rated materials." }
        ],
        pros: ["Increases usable square footage", "Relocatable structural options", "Ideal for warehouses and studios", "Custom industrial aesthetics"],
        cons: ["Requires structural permits", "Complex fire safety requirements", "High weight loading constraints"],
        maintenance: "Regular inspection of structural bolts and decking surfaces. Ensure fire-coatings are intact and weight limits are strictly observed."
    }
};

export function generateStaticParams() {
    return Object.keys(MATERIAL_CONTENT).map((slug) => ({
        slug: slug,
    }));
}

export default async function MaterialPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const content = MATERIAL_CONTENT[slug];

    if (!content) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background pt-32 pb-20">
            <Navbar />

            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20 max-w-4xl">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">
                        Specialized Material Index
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
                        {content.title}
                    </h1>
                    <p className="text-slate-500 text-xl leading-relaxed">
                        {content.description}
                    </p>
                </div>

                <section className="mb-32">
                    <MainCalculator />
                </section>

                <section className="bg-white rounded-[2rem] border border-slate-100 p-12 lg:p-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20 pb-20 border-b border-slate-100">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">Advantages</h2>
                            <ul className="space-y-4">
                                {content.pros.map((pro: string, idx: number) => (
                                    <li key={idx} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0" />
                                        {pro}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">Considerations</h2>
                            <ul className="space-y-4">
                                {content.cons.map((con: string, idx: number) => (
                                    <li key={idx} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0" />
                                        {con}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">Maintenance</h2>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {content.maintenance}
                            </p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-extrabold text-slate-900 mb-12 flex items-center gap-4">
                        <div className="w-1.5 h-8 bg-primary rounded-full" />
                        Expert Insights & FAQs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {content.faqs.map((faq: any, idx: number) => (
                            <div key={idx} className="space-y-4">
                                <h3 className="text-lg font-bold text-slate-800">
                                    {faq.q}
                                </h3>
                                <p className="text-slate-500 leading-relaxed text-sm">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
