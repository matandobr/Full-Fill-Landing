import React from 'react';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 md:py-24 px-5 md:px-[120px]">
        <div className="max-w-[900px] mx-auto">
          {/* Header */}
          <div className="mb-8 text-right">
            <p className="text-[#222834] text-base leading-relaxed">
              <span className="font-bold">Effective Date:</span> June 7, 2025<br />
              <span className="font-bold">Last Update:</span> July 17, 2025<br />
              <span className="font-bold">Version:</span> 1.1
            </p>
          </div>

          <h1 className="text-[#151357] text-4xl md:text-5xl font-bold mb-12">
            Full-Fill.ai Privacy Policy
          </h1>

          {/* Content */}
          <div className="text-[#222834] space-y-8">
            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-lg leading-relaxed mb-4">
                <span className="font-bold">Full-Fill.ai</span> is a SaaS platform developed and operated by <span className="font-bold">Salora AI LTD</span>, a limited liability company incorporated in Israel, with its registered address at <span className="font-bold">Yeshayahu 20, Tel-Aviv 6249417, Israel</span> ("<span className="font-bold">we</span>", "<span className="font-bold">our</span>", or "<span className="font-bold">us</span>"). This Privacy Policy describes how we collect, use, and protect your personal information when you access our service at <a href="https://app.full-fill.ai" className="text-[#5E5ADB] hover:text-[#4A46C7] underline">app.full-fill.ai</a> or related sites.
              </p>
              <p className="text-lg leading-relaxed">
                Full-Fill.ai is an AI-powered platform designed to help sales and presales professionals respond to RFPs and technical questionnaires more efficiently.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">2. Information We Collect</h2>
              <p className="text-lg leading-relaxed mb-4">
                When you register or use Full-Fill.ai, we collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li><span className="font-bold">Account information</span>: First name, last name, email address, organization name, and password.</li>
                <li><span className="font-bold">Uploaded content</span>: Documents, datasheets, manuals, questionnaires, or any other content you provide.</li>
                <li><span className="font-bold">Usage data</span>: Technical data such as IP address, browser type, and pages visited—collected via cookies and third-party analytics tools.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">3. User Consent and Data Processing</h2>
              <p className="text-lg leading-relaxed">
                By using Full-Fill.ai, you consent to the collection, storage, and processing of your information for the purpose of delivering, maintaining, and improving the platform. We do <span className="font-bold">not</span> sell, rent, or repurpose your data for unrelated uses. All data is processed in accordance with this policy and relevant laws.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">4. Use of Your Data</h2>
              <p className="text-lg leading-relaxed mb-4">
                We use your data solely for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li>To create and manage your account</li>
                <li>To provide the Full-Fill.ai service, including processing your uploaded content</li>
                <li>To improve platform performance and reliability</li>
                <li>To send essential communications (e.g. system updates, service notices)</li>
              </ul>
              <p className="text-lg leading-relaxed mt-4">
                We may use <span className="font-bold">aggregated or anonymized</span> usage data for internal analytics, but this cannot identify you personally.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">5. Data Storage and Security</h2>
              <p className="text-lg leading-relaxed mb-4">
                Your data is stored securely on cloud infrastructure (e.g., Google Cloud Platform, AWS) and protected with modern encryption methods (both in transit and at rest). We follow industry-standard security practices to safeguard your information.
              </p>
              <p className="text-lg leading-relaxed">
                In case of a data breach, we will investigate promptly and notify affected users as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">6. No Third-Party Sharing</h2>
              <p className="text-lg leading-relaxed mb-4">
                We do <span className="font-bold">not</span> share your personal data with third parties unless:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li>You give us explicit permission</li>
                <li>We are legally obligated to do so</li>
                <li>It's necessary for our service providers (such as hosting vendors) to help us operate the platform</li>
              </ul>
              <p className="text-lg leading-relaxed mt-4">
                All service providers are bound by confidentiality obligations and act only under our instruction.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">7. Third-Party Tools</h2>
              <p className="text-lg leading-relaxed mb-4">
                We use limited third-party tools to improve our services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li><span className="font-bold">Google Analytics</span> (on our marketing site) collects anonymous web traffic data.</li>
                <li><span className="font-bold">Microsoft Clarity</span> (in the app) tracks user behavior via heatmaps and session replays.</li>
              </ul>
              <p className="text-lg leading-relaxed mt-4">
                These tools use cookies and may process usage data. The information is anonymized and used only to improve the user experience. For more details, see the Google Privacy Policy and <a href="https://privacy.microsoft.com/" className="text-[#5E5ADB] hover:text-[#4A46C7] underline" target="_blank" rel="noopener noreferrer">Microsoft Privacy Statement</a>.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">8. Cookies and Tracking</h2>
              <p className="text-lg leading-relaxed mb-4">
                We use cookies to support functionality and analytics. These include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li><span className="font-bold">Essential cookies</span> for login sessions and user preferences</li>
                <li><span className="font-bold">Analytics cookies</span> for measuring usage patterns</li>
              </ul>
              <p className="text-lg leading-relaxed mt-4">
                You can manage cookie preferences via your browser settings. More details are available in our Cookie Policy.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">9. GDPR and International Users</h2>
              <p className="text-lg leading-relaxed mb-4">
                If you're located in the EU, EEA, or UK, we process your personal data according to the principles of the <span className="font-bold">General Data Protection Regulation (GDPR)</span>. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li>Processing based on your consent or legitimate interest</li>
                <li>Respecting your rights to access, correct, delete, or export your data</li>
              </ul>
              <p className="text-lg leading-relaxed mt-4">
                Where analytics data is transferred outside the EU (e.g., to Google in the U.S.), we rely on <span className="font-bold">Standard Contractual Clauses</span> or other legal safeguards.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Although we are based in Israel, we aim to align with global privacy standards.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">10. Data Transfers and Jurisdiction</h2>
              <p className="text-lg leading-relaxed mb-4">
                We store and process data on secure infrastructure in the <span className="font-bold">European Union</span> and the <span className="font-bold">United States</span>, using reputable providers. By using Full-Fill.ai, you consent to the transfer of your data to these jurisdictions under applicable safeguards.
              </p>
              <p className="text-lg leading-relaxed">
                Salora AI LTD is headquartered in <span className="font-bold">Tel-Aviv, Israel</span>, and Israeli law governs our data handling practices, alongside other applicable regulations.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">11. Your Consent and Controls</h2>
              <p className="text-lg leading-relaxed mb-4">
                By registering or uploading content, you consent to the data practices described in this policy. You may:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li>Delete your content or close your account at any time</li>
                <li>Control cookies through your browser or opt-out of tracking tools</li>
                <li>Request corrections, data exports, or deletion of your personal information</li>
              </ul>
              <p className="text-lg leading-relaxed mt-4">
                If you have a concern about how your data is being used, please contact us at <a href="mailto:support@full-fill.ai" className="text-[#5E5ADB] hover:text-[#4A46C7] underline">support@full-fill.ai</a>.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">12. Changes to This Policy</h2>
              <p className="text-lg leading-relaxed">
                We may update this Privacy Policy periodically. If material changes are made, we will notify you via the App or email. The latest version will always be posted with an updated "Last Update" date.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
