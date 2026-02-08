"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Calculator } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-surface/90 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-primary p-2 rounded-lg transition-transform group-hover:scale-110">
                        <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-text">FloorCalc <span className="text-primary">2026</span></span>
                </Link>

                <div className="hidden lg:flex items-center gap-8">
                    {["Hardwood", "Vinyl", "Laminate", "Tile", "Epoxy"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}/`}
                            className="text-sm font-semibold text-text-muted hover:text-primary transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                    <div className="w-px h-4 bg-slate-200" />
                    <Link
                        href="/guides/ultimate-flooring-cost-guide-2026/"
                        className="text-sm font-bold text-primary hover:text-primary-dark transition-colors"
                    >
                        2026 Cost Guide
                    </Link>
                </div>

                <button className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary-dark shadow-sm transition-all hover:shadow-md">
                    Get Free Estimate
                </button>
            </div>
        </nav>
    );
}
