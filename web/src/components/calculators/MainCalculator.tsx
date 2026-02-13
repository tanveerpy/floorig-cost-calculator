"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Calculator, Hammer, HardHat, Info, Thermometer, ChevronRight } from "lucide-react";

const MATERIALS = [
    { id: "laminate", name: "Laminate", basePrice: 3.50, labor: 2.50, waitTime: "48 Hours" },
    { id: "hardwood", name: "Hardwood", basePrice: 9.00, labor: 5.50, waitTime: "7+ Days" },
    { id: "vinyl", name: "Vinyl/LVP", basePrice: 4.10, labor: 2.20, waitTime: "24 Hours" },
    { id: "tile", name: "Ceramic Tile", basePrice: 5.00, labor: 7.00, waitTime: "24 Hours" },
    { id: "epoxy", name: "Epoxy", basePrice: 6.00, labor: 4.50, waitTime: "48 Hours" },
    { id: "mezzanine", name: "Mezzanine", basePrice: 12.00, labor: 8.00, waitTime: "0 Hours" },
    { id: "bamboo", name: "Bamboo", basePrice: 4.50, labor: 4.00, waitTime: "72 Hours" },
];

const MODIFIERS = [
    { id: "radiant", name: "Radiant Floor Heating", price: 12.00, icon: <Thermometer className="w-4 h-4" /> },
    { id: "stairs", name: "Custom Stairs", price: 1500, icon: <ChevronRight className="w-4 h-4" /> },
    { id: "trim", name: "Trim & Transitions", price: 4.50, icon: <ChevronRight className="w-4 h-4" /> },
    { id: "removal", name: "Standard Removal", price: 1.50, icon: <Hammer className="w-4 h-4" /> },
    { id: "leveling", name: "Subfloor Leveling Ops", price: 2.20, icon: <HardHat className="w-4 h-4" /> },
];

export function MainCalculator() {
    const [area, setArea] = useState<number>(500);
    const [material, setMaterial] = useState(MATERIALS[0]);
    const [activeModifiers, setActiveModifiers] = useState<string[]>([]);

    const calculation = useMemo(() => {
        const materialCost = area * material.basePrice;
        const laborCost = area * material.labor;

        let additive = 0;
        if (activeModifiers.includes("radiant")) additive += area * 12.00;
        if (activeModifiers.includes("removal")) additive += area * 1.50;
        if (activeModifiers.includes("trim")) additive += Math.sqrt(area) * 4 * 4.50; // Perimeter-based trim estimate
        if (activeModifiers.includes("leveling")) additive += area * 2.20;
        if (activeModifiers.includes("stairs")) additive += 1500;

        const subtotal = materialCost + laborCost + additive;
        const waste = subtotal * 0.10;

        return {
            material: materialCost,
            labor: laborCost,
            additions: additive,
            waste,
            total: subtotal + waste
        };
    }, [area, material, activeModifiers]);

    return (
        <div id="calculator" className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                <div className="space-y-10">
                    <div>
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Project Configurator</h2>
                        <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest">Adjust parameters for instant quotes</p>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-3">
                            <label className="text-xs font-bold uppercase text-slate-500 tracking-wider flex justify-between">
                                <span>Total Area Coverage</span>
                                <span className="text-primary">{area} SQ FT</span>
                            </label>
                            <input
                                type="range"
                                min="50"
                                max="5000"
                                step="50"
                                value={area}
                                onChange={(e) => setArea(Number(e.target.value))}
                                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <input
                                type="number"
                                value={area}
                                onChange={(e) => setArea(Number(e.target.value))}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xl font-bold focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            />
                        </div>

                        <div className="space-y-3">
                            <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Select Material System</label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                {MATERIALS.map((m) => (
                                    <button
                                        key={m.id}
                                        onClick={() => setMaterial(m)}
                                        className={cn(
                                            "flex flex-col p-4 rounded-2xl border-2 transition-all text-left group relative",
                                            material.id === m.id
                                                ? "border-primary bg-emerald-50 shadow-md"
                                                : "border-slate-100 hover:border-emerald-200 hover:bg-slate-50"
                                        )}
                                    >
                                        <span className={cn(
                                            "font-bold mb-1",
                                            material.id === m.id ? "text-emerald-900" : "text-slate-700"
                                        )}>{m.name}</span>
                                        <span className="text-xs text-slate-400 font-medium">Avg. ${m.basePrice}/sf</span>

                                        {/* Acclimatization Badge */}
                                        {material.id === m.id && (
                                            <div className="absolute -top-2 -right-2 bg-emerald-600 text-white text-[10px] px-2 py-1 rounded-full font-bold shadow-sm">
                                                {m.waitTime} Wait
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Add-on Features</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {MODIFIERS.map((mod) => (
                                    <button
                                        key={mod.id}
                                        onClick={() => setActiveModifiers(prev =>
                                            prev.includes(mod.id) ? prev.filter(i => i !== mod.id) : [...prev, mod.id]
                                        )}
                                        className={cn(
                                            "flex items-center gap-3 px-4 py-3 rounded-xl border transition-all text-left",
                                            activeModifiers.includes(mod.id) ? "bg-primary/5 border-primary/30 text-primary-dark" : "bg-white border-slate-200 text-slate-600"
                                        )}
                                    >
                                        <div className={cn("p-1.5 rounded-lg", activeModifiers.includes(mod.id) ? "bg-primary/20" : "bg-slate-100")}>
                                            {mod.icon}
                                        </div>
                                        <span className="text-[11px] font-bold">{mod.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* Modifier Guard Alerts */}
                        <div className="space-y-3">
                            {activeModifiers.includes("leveling") && (
                                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-3 items-start">
                                    <HardHat className="w-5 h-5 text-amber-600 shrink-0" />
                                    <p className="text-xs text-amber-900 leading-relaxed font-medium">
                                        <strong>DIY Alert:</strong> 80% of floor failures are due to poor subfloor prep. Leveling adds cost but prevents "hollow sounds" and joint breakage.
                                    </p>
                                </div>
                            )}
                            {activeModifiers.includes("trim") && (
                                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex gap-3 items-start">
                                    <Info className="w-5 h-5 text-emerald-600 shrink-0" />
                                    <p className="text-xs text-emerald-900 leading-relaxed font-medium">
                                        <strong>Hidden Logic:</strong> Transition strips are often sold in 7ft or 8ft sticks. Our engine calculates perimeters to ensure you buy enough.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2rem] flex flex-col justify-between shadow-xl">
                    <div>
                        <div className="flex justify-between items-start mb-10">
                            <div>
                                <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">Estimated Total Cost</span>
                                <h3 className="text-6xl font-black tabular-nums">
                                    ${calculation.total.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                </h3>
                            </div>
                            <div className="bg-white/10 p-3 rounded-xl">
                                <Info className="w-6 h-6 text-white/40" />
                            </div>
                        </div>

                        <div className="space-y-5">
                            {[
                                { label: "Base Materials", val: calculation.material },
                                { label: "Professional Labor", val: calculation.labor },
                                { label: "Hidden Extras (Trim/Prep)", val: calculation.additions },
                                { label: "Waste Contingency (10%)", val: calculation.waste },
                            ].map((row, i) => (
                                <div key={row.label} className="flex justify-between items-end border-b border-white/10 pb-3">
                                    <span className="text-xs font-semibold text-white/40 uppercase tracking-widest">{row.label}</span>
                                    <span className="font-bold text-xl tabular-nums">${row.val.toLocaleString()}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="w-full bg-primary text-white py-5 rounded-2xl mt-12 text-sm font-bold uppercase tracking-widest hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-1">
                        Download Custom Quote
                    </button>
                </div>
            </div>
        </div>
    );
}
