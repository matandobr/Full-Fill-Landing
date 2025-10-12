import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';

export const CookiePolicy = () => {
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
            Full-Fill.ai Cookie Policy
          </h1>

          {/* Content */}
          <div className="text-[#222834] space-y-8">
            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">1. What is a Cookie?</h2>
              <p className="text-lg leading-relaxed">
                A cookie is a small text file stored on your device (computer or mobile) when you visit a website. Cookies help websites recognize your device and remember information about your visit (such as your login status or preferences). Most browsers accept cookies by default, but you can usually disable or manage them through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">2. Who We Are</h2>
              <p className="text-lg leading-relaxed">
                Full-Fill.ai is a product developed and operated by <span className="font-bold">Salora AI LTD</span>, a company registered in Israel with its principal business address at <span className="font-bold">Yeshayahu 20, Tel-Aviv 6249417, Israel</span>. This Cookie Policy outlines how we use cookies and similar technologies across our websites and applications.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">3. How We Use Cookies</h2>
              <p className="text-lg leading-relaxed mb-4">
                Full-Fill.ai uses cookies and related technologies for the following purposes:
              </p>

              <h3 className="text-[#151357] text-xl font-bold mb-3 mt-6">a. Essential Cookies</h3>
              <p className="text-lg leading-relaxed">
                These cookies are necessary for the core functionality of our website and app. For example, they help keep you logged in and maintain session state. Without these cookies, certain features of the platform will not work properly.
              </p>

              <h3 className="text-[#151357] text-xl font-bold mb-3 mt-6">b. Analytics Cookies</h3>
              <p className="text-lg leading-relaxed mb-4">
                We use analytics cookies to better understand how visitors interact with our platform, so we can improve usability, performance, and content. These cookies help us measure things like session duration, feature usage, and navigation behavior.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li><span className="font-bold">Google Analytics</span>: On our public marketing site (e.g., <a href="https://full-fill.ai" className="text-[#5E5ADB] hover:text-[#4A46C7] underline">full-fill.ai</a>), we use Google Analytics to collect anonymous usage data such as page views and time on site.</li>
                <li><span className="font-bold">Microsoft Clarity</span>: Inside the Full-Fill.ai application (e.g., <a href="https://app.full-fill.ai" className="text-[#5E5ADB] hover:text-[#4A46C7] underline">app.full-fill.ai</a>), we use Microsoft Clarity to track session interactions through heatmaps and anonymized session recordings.</li>
              </ul>
              <p className="text-lg leading-relaxed mt-4">
                These analytics tools <span className="font-bold">do not collect personal information</span> and are used solely to enhance product development and user experience.
              </p>

              <h3 className="text-[#151357] text-xl font-bold mb-3 mt-6">c. Third-Party Cookies</h3>
              <p className="text-lg leading-relaxed mb-4">
                We may permit third-party services (like Google and Microsoft) to set cookies for analytics or performance monitoring. While we do not control these cookies directly, we aim to only work with providers who respect user privacy.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Below are more details on how these tools work and how to opt out:
              </p>

              <h4 className="text-[#151357] text-lg font-bold mb-2 mt-4">Google Analytics Cookies</h4>
              <p className="text-lg leading-relaxed mb-2">
                Google Analytics sets cookies on your device to measure and report user behavior on our marketing site. Information is transmitted to Google servers for analysis.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-lg leading-relaxed">
                <li>Learn more: Google's Privacy Policy</li>
                <li>Opt-out: Google Analytics Opt-Out Add-on</li>
              </ul>

              <h4 className="text-[#151357] text-lg font-bold mb-2 mt-4">Microsoft Clarity Cookies</h4>
              <p className="text-lg leading-relaxed mb-2">
                Within the Full-Fill.ai application, Microsoft Clarity sets cookies like <code className="bg-gray-100 px-2 py-1 rounded text-sm">_clck</code> and <code className="bg-gray-100 px-2 py-1 rounded text-sm">_clsk</code> to monitor anonymous behavior through session replays and click heatmaps.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-lg leading-relaxed">
                <li>Learn more: <a href="https://privacy.microsoft.com/" className="text-[#5E5ADB] hover:text-[#4A46C7] underline" target="_blank" rel="noopener noreferrer">Microsoft Privacy Statement</a></li>
                <li>Opt-out: <a href="https://account.microsoft.com/privacy/ad-settings" className="text-[#5E5ADB] hover:text-[#4A46C7] underline" target="_blank" rel="noopener noreferrer">Microsoft Ad Choices</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">4. Managing and Opting Out of Cookies</h2>
              <p className="text-lg leading-relaxed mb-4">
                You have control over how cookies are used on your device:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li><span className="font-bold">Browser Settings</span>: You can disable or delete cookies via your browser (e.g., in Chrome or Firefox, go to Settings &gt; Privacy &amp; Security). Note that disabling cookies may impair functionality.</li>
                <li><span className="font-bold">Google Analytics</span>: Install the Google Opt-Out Browser Add-on.</li>
                <li><span className="font-bold">Microsoft Clarity</span>: Visit <a href="https://account.microsoft.com/privacy/ad-settings" className="text-[#5E5ADB] hover:text-[#4A46C7] underline" target="_blank" rel="noopener noreferrer">Microsoft's opt-out page</a> and select preferences.</li>
                <li><span className="font-bold">Consent Banner</span>: We use a cookie consent banner to ask for permission before placing non-essential cookies. You can adjust your choices anytime by re-opening the banner or clearing cookies from our domain.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">5. Changes to This Policy</h2>
              <p className="text-lg leading-relaxed">
                We may update this Cookie Policy from time to time. Updates will be posted on this page with an updated "Last Update" date. Your continued use of our services after changes are posted implies acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">6. Contact</h2>
              <p className="text-lg leading-relaxed mb-2">
                If you have questions about this policy or how your data is used, please contact us at:
              </p>
              <p className="text-lg leading-relaxed">
                <span className="font-bold">Email:</span> info@full-fill.ai<br />
                <span className="font-bold">Mail:</span> Salora AI LTD, Yeshayahu 20, Tel-Aviv 6249417, Israel
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
