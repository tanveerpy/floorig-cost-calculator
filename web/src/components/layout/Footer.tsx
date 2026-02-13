"use client";

import Link from "next/link";
import { Calculator, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="bg-primary p-2 rounded-lg">
                                <Calculator className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-text">FloorCalc <span className="text-primary">2026</span></span>
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                            The industry-standard precision engine for flooring estimates. Built on 2026 market data to empower homeowners and contractors with accurate budgeting tools.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Github, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-primary hover:bg-emerald-50 transition-colors">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Calculators</h4>
                        <ul className="space-y-4">
                            {["Hardwood", "Vinyl", "Laminate", "Tile", "Epoxy", "Concrete"].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase()}/`} className="text-sm text-slate-500 hover:text-primary transition-colors">
                                        {item} Price Guide
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Resources</h4>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-slate-400 hover:text-primary transition-colors">Calculator Hub</Link></li>
                            <li><Link href="/faq/" className="text-slate-400 hover:text-primary transition-colors">Project FAQs</Link></li>
                            <li><Link href="/guides/ultimate-flooring-cost-guide-2026/" className="text-slate-400 hover:text-primary transition-colors">Pricing Guide</Link></li>
                            <li><Link href="/about/" className="text-slate-400 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/contact/" className="text-slate-400 hover:text-primary transition-colors">Contact Expert</Link></li>
                            <li><Link href="/privacy-policy/" className="text-slate-400 hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service/" className="text-slate-400 hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-50 flex flex-col md:row justify-between items-center gap-6">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                        © 2026 Professional FloorCalc Index
                    </p>
                    <div className="flex gap-8">
                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500" /> Standardized API v4.2
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
