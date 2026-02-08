import { Navbar } from "@/components/layout/Navbar";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-20">
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 prose prose-slate">
                <h1>Terms of Service</h1>
                <p>By using FloorCalc 2026, you agree to the following terms:</p>

                <h2>1. Estimates Only</h2>
                <p>All results provided by our calculator are estimates based on 2026 market indices. Actual contractor quotes may vary based on site-specific conditions.</p>

                <h2>2. No Professional Advice</h2>
                <p>Our tools are for budgeting and educational purposes. Always consult with a licensed contractor before starting structural work.</p>

                <h2>3. Intellectual Property</h2>
                <p>The "Tectonic Data Engine" and all content on this site are the property of FloorCalc 2026.</p>
            </div>
        </main>
    );
}
