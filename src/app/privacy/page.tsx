import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-mino-cream text-mino-ink antialiased flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-6 py-24 md:py-32 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl text-mino-forest font-bold mb-8">
          Privacy Policy
        </h1>
        
        <div className="space-y-8 text-base text-mino-ink/80 leading-relaxed font-mono">
          <p className="font-medium text-mino-ink">
            Your privacy is critically important to us.
          </p>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-mino-ink">1. Information We Collect</h2>
            <p>
              We collect personal information necessary for KYC (Know Your Customer) compliance, transaction processing, and providing our core services. This may include your name, contact details, PAN, and bank account information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-mino-ink">2. How We Use Your Data</h2>
            <p>
              Your data is used strictly for facilitating your investments, improving our app experience, and complying with regulatory requirements mandated by SEBI and AMFI.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-mino-ink">3. Data Security & Sharing</h2>
            <p>
              Your data is encrypted at rest and in transit. We do not sell your personal data. It is shared only with trusted, regulated partners (such as RTAs, AMCs, and banking partners) strictly as required to deliver our service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-mino-ink">4. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal data at any time (subject to regulatory retention requirements).
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-mino-line/20">
            <h2 className="text-lg font-bold text-mino-ink">Contact Us</h2>
            <p>
              To exercise your data rights or if you have privacy concerns, please write to:{' '}
              <a href="mailto:support@minomoney.in" className="text-mino-forest hover:underline">
                support@minomoney.in
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
