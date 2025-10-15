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
              <span className="font-bold">Last Update:</span> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}<br />
              <span className="font-bold">Version:</span> 1.2
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
                <li><span className="font-bold">Usage data</span>: Technical data such as IP address, browser type, and pages visited - collected via cookies and third-party analytics tools.</li>
              </ul>

              <h3 className="text-[#151357] text-xl font-bold mb-3 mt-6">Google User Data (Optional)</h3>
              <p className="text-lg leading-relaxed mb-4">
                <span className="font-bold">Google sign-in is completely optional.</span> You can use Full-Fill.ai with traditional username/password authentication or other Single Sign-On (SSO) options without connecting a Google account. We only access Google user data if you explicitly choose to sign in with Google.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                If you choose to use Google sign-in or connect your Google account, we may access the following Google user data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li><span className="font-bold">Basic profile information</span>: Your name, email address, and profile picture (only if you sign in with Google)</li>
                <li><span className="font-bold">Google Drive access</span> (optional, requires additional permission): If you grant explicit permission, we may access specific documents you choose to import from Google Drive for processing within the platform</li>
              </ul>
              <p className="text-lg leading-relaxed mt-4">
                <span className="font-bold">Important:</span> If you do not use Google sign-in, we do not access any Google user data. We <span className="font-bold">only</span> access Google user data that you explicitly authorize through Google's OAuth consent screen. We do not access your Google data for any purpose other than providing the Full-Fill.ai service to you. We do not use Google user data for advertising purposes.
              </p>
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
              <p className="text-lg leading-relaxed mb-4">
                <span className="font-bold">Specific security measures include:</span>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li>Encryption of data in transit using TLS/SSL protocols</li>
                <li>Encryption of data at rest using industry-standard encryption algorithms</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication mechanisms to prevent unauthorized access</li>
                <li>Regular backups to prevent data loss</li>
              </ul>
              <p className="text-lg leading-relaxed mt-4">
                <span className="font-bold">Google User Data Security:</span> If you choose to use Google sign-in, any Google user data accessed through our platform is handled with the same security standards described above. We use secure APIs and OAuth 2.0 authentication for Google services. Google user data is never stored longer than necessary to provide our services. Users who do not use Google sign-in have no Google data accessed or stored.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                In case of a data breach, we will investigate promptly and notify affected users as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">6. Data Sharing and Third Parties</h2>
              <p className="text-lg leading-relaxed mb-4">
                We do <span className="font-bold">not</span> sell, rent, or trade your personal data. We do not share your personal data or Google user data with third parties except in the following limited circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li><span className="font-bold">Service Providers</span>: We may share data with trusted third-party service providers who assist in operating our platform (e.g., cloud hosting providers like Google Cloud Platform or AWS, payment processors like Paddle). These providers are bound by strict confidentiality agreements and are only permitted to use your data to provide services to us.</li>
                <li><span className="font-bold">Legal Requirements</span>: We may disclose data if required by law, court order, or governmental regulation.</li>
                <li><span className="font-bold">With Your Consent</span>: We will only share your data with third parties if you give us explicit permission to do so.</li>
              </ul>
              <p className="text-lg leading-relaxed mt-4">
                <span className="font-bold">Google User Data Sharing:</span> For users who choose to sign in with Google, we do <span className="font-bold">not</span> share any Google user data with third parties for advertising, marketing, or any purpose unrelated to providing the Full-Fill.ai service. Google user data is only shared with our infrastructure providers (e.g., Google Cloud Platform) to the extent necessary to store and process your data securely. If you do not use Google sign-in, no Google data is collected or shared.
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
              <h2 className="text-[#151357] text-2xl font-bold mb-4">11. Data Retention and Deletion</h2>
              <p className="text-lg leading-relaxed mb-4">
                We retain your personal data only for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy.
              </p>

              <h3 className="text-[#151357] text-xl font-bold mb-3 mt-6">Retention Periods</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li><span className="font-bold">Account Information</span>: Retained for the duration of your account plus 30 days after account closure (to allow for account recovery).</li>
                <li><span className="font-bold">Uploaded Content</span>: Retained for the duration of your account. Permanently deleted within 30 days of account closure or upon your request.</li>
                <li><span className="font-bold">Usage and Analytics Data</span>: Retained for up to 26 months for analytics purposes, then automatically deleted or anonymized.</li>
                <li><span className="font-bold">Google User Data</span> (only if you use Google sign-in): Retained only as long as necessary to provide the service you requested. If you revoke access or delete your account, Google user data is deleted within 7 days. If you do not use Google sign-in, no Google data is retained.</li>
                <li><span className="font-bold">Backup Data</span>: Retained in encrypted backups for up to 90 days for disaster recovery purposes.</li>
              </ul>

              <h3 className="text-[#151357] text-xl font-bold mb-3 mt-6">Data Deletion Rights</h3>
              <p className="text-lg leading-relaxed mb-4">
                You have the right to request deletion of your personal data at any time. To exercise this right:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li><span className="font-bold">Delete Your Account</span>: You can delete your account directly from the account settings in the Full-Fill.ai application. This will permanently delete all your data within 30 days.</li>
                <li><span className="font-bold">Request Data Deletion</span>: Email us at <a href="mailto:support@full-fill.ai" className="text-[#5E5ADB] hover:text-[#4A46C7] underline">support@full-fill.ai</a> with "Data Deletion Request" in the subject line. We will process your request within 30 days.</li>
                <li><span className="font-bold">Revoke Google Access</span> (if applicable): If you signed in with Google, you can revoke Full-Fill.ai's access to your Google account at any time through your <a href="https://myaccount.google.com/permissions" className="text-[#5E5ADB] hover:text-[#4A46C7] underline" target="_blank" rel="noopener noreferrer">Google Account Permissions page</a>. We will delete any Google user data within 7 days of revocation.</li>
              </ul>
              <p className="text-lg leading-relaxed mt-4">
                Note: Some data may be retained for legal or legitimate business purposes (e.g., to comply with legal obligations, resolve disputes, or enforce agreements) for a limited time even after deletion requests.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">12. Your Rights and Controls</h2>
              <p className="text-lg leading-relaxed mb-4">
                By registering or uploading content, you consent to the data practices described in this policy. You have the following rights regarding your data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li><span className="font-bold">Access</span>: Request a copy of all personal data we hold about you</li>
                <li><span className="font-bold">Correction</span>: Request correction of inaccurate or incomplete data</li>
                <li><span className="font-bold">Deletion</span>: Request deletion of your data (see Section 11 above)</li>
                <li><span className="font-bold">Export</span>: Request a machine-readable export of your data</li>
                <li><span className="font-bold">Withdraw Consent</span>: Withdraw consent for data processing at any time</li>
                <li><span className="font-bold">Object to Processing</span>: Object to certain types of data processing</li>
                <li><span className="font-bold">Cookie Control</span>: Manage cookies through your browser or opt-out of tracking tools</li>
              </ul>
              <p className="text-lg leading-relaxed mt-4">
                To exercise any of these rights, please contact us at <a href="mailto:support@full-fill.ai" className="text-[#5E5ADB] hover:text-[#4A46C7] underline">support@full-fill.ai</a>. We will respond to your request within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">13. Children's Privacy</h2>
              <p className="text-lg leading-relaxed">
                Full-Fill.ai is not intended for use by children under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal data from a child under 16, we will take steps to delete that information as quickly as possible. If you believe we have collected data from a child under 16, please contact us immediately at <a href="mailto:support@full-fill.ai" className="text-[#5E5ADB] hover:text-[#4A46C7] underline">support@full-fill.ai</a>.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">14. Contact Information</h2>
              <p className="text-lg leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <p className="text-lg leading-relaxed">
                <span className="font-bold">Email:</span> <a href="mailto:support@full-fill.ai" className="text-[#5E5ADB] hover:text-[#4A46C7] underline">support@full-fill.ai</a><br />
                <span className="font-bold">Mail:</span> Salora AI LTD, Yeshayahu 20, Tel-Aviv 6249417, Israel<br />              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">15. Changes to This Policy</h2>
              <p className="text-lg leading-relaxed">
                We may update this Privacy Policy periodically. If material changes are made, we will notify you via the App or email. The latest version will always be posted with an updated "Last Update" date. Your continued use of Full-Fill.ai after changes are posted constitutes acceptance of the updated policy.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
