import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';

export const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 md:py-24 px-5 md:px-[120px]">
        <div className="max-w-[900px] mx-auto">
          {/* Header */}
          <div className="mb-8 text-right">
            <p className="text-[#222834] text-base leading-relaxed">
              Effective Date: June 12, 2025<br />
              Last Update: July 17, 2025<br />
              Version: 1.1
            </p>
          </div>

          <h1 className="text-[#151357] text-4xl md:text-5xl font-bold mb-12">
            Refund Policy
          </h1>

          {/* Content */}
          <div className="text-[#222834] space-y-8">
            <p className="text-lg leading-relaxed">
              At Full-Fill.ai, a product of Salora AI LTD, we want you to feel confident when trying our service. If you are not satisfied with your purchase, you may be eligible for a refund within <span className="font-bold">14 days</span> of the original transaction date.
            </p>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">To be eligible for a refund:</h2>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li>Your request must be submitted within 14 calendar days of the original purchase.</li>
                <li>You must not have made extensive use of the platform's export or generation features during the trial period.</li>
                <li>Your request should include a brief explanation of why the service did not meet your expectations. We may follow up with feedback questions to help us improve.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">Processing and Timing</h2>
              <p className="text-lg leading-relaxed">
                Refunds are issued via our payment provider, Paddle, and may take several business days to appear in your account depending on your bank or card issuer. You will receive a confirmation once your refund is processed.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">Abuse of Policy</h2>
              <p className="text-lg leading-relaxed">
                We reserve the right to deny refund requests in cases of suspected misuse or abuse of this policy. This includes repeated refund requests or behavior that violates our Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-[#151357] text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg leading-relaxed mb-4">
                To request a refund, please email us at <a href="mailto:info@full-fill.ai" className="text-[#5E5ADB] hover:text-[#4A46C7] underline">info@full-fill.ai</a> with your order number and the email address used at purchase.
              </p>
              <p className="text-lg leading-relaxed">
                For more information on how Paddle processes buyer transactions, please refer to Paddle's Buyer Terms.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
