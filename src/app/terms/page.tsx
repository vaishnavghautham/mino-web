import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-mino-cream text-mino-ink antialiased flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-6 py-24 md:py-32 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl text-mino-forest font-bold mb-8">
          Terms of Service
        </h1>
        
        <div className="space-y-8 text-base text-mino-ink/80 leading-relaxed font-mono">
          <p className="font-medium text-mino-ink">
            By using Mino Money, you agree to our terms of service.
          </p>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-mino-ink">1. Service Overview</h2>
            <p>
              Mino is a smart savings platform operated by Mino Money. Funds are parked in SEBI-regulated liquid mutual fund schemes via licensed distributors. We provide technology to facilitate investments but do not hold your funds directly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-mino-ink">2. Investment Risks</h2>
            <p>
              Mutual fund investments are subject to market risks. Past performance is not indicative of future returns. Please read all scheme-related documents carefully before investing. Mino Money does not guarantee any specific rate of return.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-mino-ink">3. Withdrawals</h2>
            <p>
              Instant withdrawals are subject to limits and technical availability defined by the respective Asset Management Companies (AMCs) and banking partners. While most transactions process in minutes, occasional delays may occur due to banking network downtime.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-mino-ink">4. Account Security</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials. You must notify us immediately of any unauthorized use of your account.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-mino-line/20">
            <h2 className="text-lg font-bold text-mino-ink">Contact Us</h2>
            <p>
              For any legal or terms-related queries, please contact:{' '}
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
