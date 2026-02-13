import { Navbar } from "@/components/layout/Navbar";
import { Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-20">
            <Navbar />
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-5xl font-extrabold text-slate-900 mb-8">Contact Our Experts</h1>
                <p className="text-xl text-slate-600 mb-12">
                    Have questions about a complex project or our data indexing? Reach out to our technical team.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <Mail className="w-8 h-8 text-primary mb-4" />
                        <h3 className="font-bold text-slate-900 mb-2">Email Support</h3>
                        <p className="text-sm text-slate-500">support@flooringcosts.ai</p>
                    </div>
                    <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <MapPin className="w-8 h-8 text-primary mb-4" />
                        <h3 className="font-bold text-slate-900 mb-2">Data HQ</h3>
                        <p className="text-sm text-slate-500">Austin, Texas, USA</p>
                    </div>
                    <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <Clock className="w-8 h-8 text-primary mb-4" />
                        <h3 className="font-bold text-slate-900 mb-2">Response Time</h3>
                        <p className="text-sm text-slate-500">Under 24 Hours</p>
                    </div>
                </div>

                <div className="mt-16 p-12 bg-slate-900 rounded-[2rem] text-white">
                    <h2 className="text-3xl font-extrabold mb-4">Partner Inquiries</h2>
                    <p className="text-slate-400">For retail partnerships or API access to our price indexing, please contact our business development team at partnerships@flooringcosts.ai</p>
                </div>
            </div>
        </main>
    );
}
