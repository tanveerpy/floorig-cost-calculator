import { Navbar } from "@/components/layout/Navbar";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-20">
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 prose prose-slate">
                <h1>Privacy Policy</h1>
                <p>Last Updated: February 2026</p>

                <h2>1. Information We Collect</h2>
                <p>We collect information only necessary to provide flooring estimates, such as project area and material preferences.</p>

                <h2>2. Cookies & AdSense (DART Cookie)</h2>
                <p>Google, as a third party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on their visit to our site and other sites on the Internet.</p>
                <p>Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.</p>

                <h2>3. Data Usage</h2>
                <p>Your calculated data is used locally for your session and is not stored on our servers unless you explicitly save a quote.</p>

                <h2>4. Contact Us</h2>
                <p>If you have questions about this policy, contact us at privacy@flooringcosts.ai</p>
            </div>
        </main>
    );
}
