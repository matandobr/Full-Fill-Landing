import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';

export const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 md:py-24 px-5 md:px-[120px]">
        <div className="max-w-[900px] mx-auto">
          {/* Header */}
          <div className="mb-8 text-right">
            <p className="text-[#222834] text-base leading-relaxed">
              <span className="font-bold">Effective Date:</span> June 7, 2025<br />
              <span className="font-bold">Last Update:</span> July 20, 2025<br />
              <span className="font-bold">Version:</span> 1.5
            </p>
          </div>

          <h1 className="text-[#151357] text-4xl md:text-5xl font-bold mb-12">
            Full-Fill.ai Terms of Service
          </h1>

          {/* Content */}
          <div className="text-[#222834] space-y-8">
            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-lg leading-relaxed mb-4">
                These Terms of Service ("<span className="font-bold">Terms</span>") govern your use of Full-Fill.ai's services. By accessing or using Full-Fill.ai (the "<span className="font-bold">App</span>") at <a href="https://app.full-fill.ai" className="text-[#5E5ADB] hover:text-[#4A46C7] underline">app.full-fill.ai</a> or related sites, you agree to these Terms.
              </p>
              <p className="text-lg leading-relaxed">
                Full-Fill.ai is a product of <span className="font-bold">Salora AI LTD</span>, a limited liability company registered in Israel (Company Number: 517190187) with its principal place of business at <span className="font-bold">Yeshayahu 20, Tel-Aviv 6249417, Israel</span> ("<span className="font-bold">Company</span>," "we," or "us").
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">2. Accounts</h2>
              <p className="text-lg leading-relaxed">
                To use the App, you must create an account and provide accurate information (e.g., first name, last name, email, organization, and password). You are responsible for securing your account and for all activities under it. Notify us immediately of unauthorized use. We may suspend or terminate accounts that are inactive, abandoned, or violate these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">3. Services and Plans</h2>
              <p className="text-lg leading-relaxed mb-4">
                Full-Fill.ai provides an AI-powered questionnaire automation service designed for technical and sales engineering teams. We offer a free trial and paid subscriptions (Pro and Enterprise tiers) with additional features and usage limits.
              </p>
              <p className="text-lg leading-relaxed">
                Paid plans require payment at signup, as specified. All fees are non-refundable except as described in our <span className="font-bold">Refund Policy</span> or required by law. A 14-day refund window is offered for initial purchases.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">4. Free Trial</h2>
              <p className="text-lg leading-relaxed">
                If you sign up for a free trial, you'll have access to the App for the period stated on our website. The trial is provided "as is" with no warranties or service-level obligations. After the trial, continued access will require a paid subscription.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">5. User Content and License</h2>
              <p className="text-lg leading-relaxed mb-4">
                You retain full ownership of content you upload (e.g., documents, text, images). By uploading or submitting content, you grant us a limited, non-exclusive license to process that content solely to provide our services to you. We will not use or share your content for unrelated purposes, in line with our Privacy Policy.
              </p>
              <p className="text-lg leading-relaxed">
                You confirm that your content does not violate intellectual property rights or applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">6. User Conduct</h2>
              <p className="text-lg leading-relaxed">
                You agree to use Full-Fill.ai only for lawful purposes. You must not upload or transmit illegal, infringing, or harmful content. We may remove content or suspend access if we determine a violation of these Terms or risk to the platform's integrity.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">7. Support</h2>
              <p className="text-lg leading-relaxed">
                As an early-stage product, support is provided on a best-effort basis. We may offer documentation, email support, or community channels, but we make no guarantee of response time or resolution.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">8. Warranties and Disclaimers</h2>
              <p className="text-lg leading-relaxed">
                The App is provided "<span className="font-bold">AS IS</span>". We do not guarantee that the service will be error-free, uninterrupted, or meet your specific needs. To the fullest extent permitted by law, we disclaim all implied warranties, including merchantability and fitness for a particular purpose.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">9. Limitation of Liability</h2>
              <p className="text-lg leading-relaxed mb-4">
                To the maximum extent permitted by law, Salora AI LTD and its affiliates will not be liable for any indirect, incidental, special, or consequential damages (e.g., loss of profits, data, or goodwill) related to your use of the App.
              </p>
              <p className="text-lg leading-relaxed">
                Our total liability for any claim will not exceed the amount paid by you in the 12 months prior to the event giving rise to the claim, or $100 if you paid nothing.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">10. Governing Law</h2>
              <p className="text-lg leading-relaxed">
                These Terms are governed by the laws of <span className="font-bold">Israel</span>. Any dispute will be resolved in the competent courts of <span className="font-bold">Tel-Aviv, Israel</span>, and you agree to their exclusive jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">11. Changes to Terms</h2>
              <p className="text-lg leading-relaxed">
                We may update these Terms from time to time. We'll notify you via the App or email when significant changes are made. Your continued use of the App constitutes acceptance of the updated Terms. See the "Last Update" date at the top to track changes.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">12. Communications</h2>
              <p className="text-lg leading-relaxed">
                By signing up, you agree to receive service-related communications (e.g., updates, account notices). These are not marketing emails and are essential for operating the service.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
