'use client'; // Required for managing interactive Dialog state

import React, { useState } from 'react';
import Image from 'next/image';
import YieldCalculator from '@/components/YieldCalculator';
import Header from '@/components/Header';
import FaqSection from '@/components/FaqSection';

export default function Home() {
  // Modal Visibility States
  const [modalContent, setModalContent] = useState<'terms' | 'privacy' | null>(null);

  const openModal = (type: 'terms' | 'privacy') => {
    setModalContent(type);
    document.body.style.overflow = 'hidden'; // Lock background scrolling
  };

  const closeModal = () => {
    setModalContent(null);
    document.body.style.overflow = 'unset'; // Restore background scrolling
  };

  return (
    <div id="root">
      <div className="min-h-screen bg-mino-cream text-mino-ink antialiased">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="bg-mino-cream pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                
                <div className="lg:col-span-7 space-y-6 animate-reveal">
                  <span className="mino-eyebrow">
                    <span className="w-1.5 h-1.5 rounded-full bg-mino-forest"></span>
                    Liquid Fund App for India
                  </span>
                  <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-mino-ink leading-[1.2] tracking-tight">
                    Earn up to 7% on your idle savings.<br />
                    <em className="not-italic text-mino-forest font-semibold">
                      Invest and withdraw instantly.
                    </em>
                  </h1>
                  <p className="text-lg md:text-xl text-mino-ink/70 max-w-xl leading-relaxed">
                    Up to 3x more than your savings account. Park your money in liquid funds with zero lock-in and no hidden charges.
                  </p>
                  
                  {/* App Download Badges */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <a href="https://apps.apple.com/in/app/zypay/id6452753963" target="_blank" rel="noopener noreferrer" className="mino-pill flex items-center gap-3 !py-3.5 !px-6 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-apple"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>
                      <div className="text-left">
                        <div className="text-[10px] uppercase opacity-60 leading-none">Download on the</div>
                        <div className="text-sm font-semibold leading-tight">App Store</div>
                      </div>
                    </a>
                    
                    <a href="https://play.google.com/store/apps/details?id=com.neosurge.neosurge" target="_blank" rel="noopener noreferrer" className="mino-pill-outline flex items-center gap-3 !py-3.5 !px-6 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                      <div className="text-left">
                        <div className="text-[10px] uppercase opacity-60 leading-none">Get it on</div>
                        <div className="text-sm font-semibold leading-tight">Google Play</div>
                      </div>
                    </a>
                  </div>

                  <div className="pt-6 flex flex-wrap items-center gap-x-8 gap-y-4 text-xs text-mino-muted">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-mino-forest"><path d="M20 6 9 17l-5-5"/></svg>
                      <span>Your money is 100% safe</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-mino-forest"><path d="M20 6 9 17l-5-5"/></svg>
                      <span>Partnered with SEBI-regulated AMCs</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center relative animate-reveal delay-200">
                  <div className="absolute -inset-4 bg-mino-cream-deep rounded-[3rem] -z-10 blur-xl opacity-50"></div>
                  <div className="w-[320px] md:w-[360px] mx-auto drop-shadow-[0_25px_50px_rgba(27,58,48,0.14)] hover:scale-[1.015] transition-all duration-700 ease-out">
                    <Image src="/hero-main.svg" alt="Core App Dashboard Interface" width={450} height={900} priority className="w-full h-auto object-contain" />
                  </div>
                </div>

              </div>
            </div>
          </section>

          <YieldCalculator />

          {/* Product Feature Deep-Dive Section */}
          <section id="features" className="bg-mino-cream-deep py-24 border-t border-mino-line">
            <div className="container mx-auto px-6 space-y-32">
              
              {/* Feature 1: Pockets */}
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6 lg:order-2">
                  <span className="mino-eyebrow">Goal-Based Savings</span>
                  <h2 className="font-serif text-4xl md:text-5xl text-mino-ink leading-tight tracking-tight">
                    Create pockets for every goal, all in one place.
                  </h2>
                  <p className="text-base text-mino-ink/70 leading-relaxed">
                    Turn your milestones into achievements, faster. Pockets are flexible containers that let you seamlessly divide and organize your wealth for short-term and long-term milestones without managing multiple bank accounts.
                  </p>
                </div>
                <div className="lg:col-span-6 flex flex-col items-center justify-center lg:order-1 space-y-6">
                  <div className="w-[280px] md:w-[320px] mx-auto drop-shadow-xl hover:scale-[1.02] transition-all duration-500 ease-out">
                    <Image src="/screen-pockets.svg" alt="Mino goal-based savings pockets for liquid fund investments" width={400} height={800} />
                  </div>
                </div>
              </div>

              {/* Feature 2: Instant Redemption */}
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <span className="mino-eyebrow">Liquidity on Demand</span>
                  <h2 className="font-serif text-4xl md:text-5xl text-mino-ink leading-tight tracking-tight">
                    Withdraw your money instantly, no waiting.
                  </h2>
                  <p className="text-base text-mino-ink/70 leading-relaxed">
                    Real-time liquidity routed directly to your linked primary bank account. Whether it is a weekend, a public holiday, or a late-night emergency; your earnings remain accessible within minutes. No lock-ins, no exceptions.
                  </p>
                </div>
                <div className="lg:col-span-6 flex flex-col items-center justify-center space-y-6">
                  <div className="w-[280px] md:w-[320px] mx-auto drop-shadow-xl hover:scale-[1.02] transition-all duration-500 ease-out">
                    <Image src="/screen-withdraw.svg" alt="Instant withdrawal from liquid fund to bank account on Mino" width={400} height={800} />
                  </div>
                </div>
              </div>

              {/* Feature 3: Transparent Earnings Tracking */}
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6 lg:order-2">
                  <span className="mino-eyebrow">Granular Tracking</span>
                  <h2 className="font-serif text-4xl md:text-5xl text-mino-ink leading-tight tracking-tight">
                    Track all your earnings, effortlessly.
                  </h2>
                  <p className="text-base text-mino-ink/70 leading-relaxed">
                    A clear, transparent breakdown of how much you have earned over time. Watch your interest stack up every single morning with analytical views comparing your yield metrics directly against old bank alternatives.
                  </p>
                </div>
                <div className="lg:col-span-6 flex flex-col items-center justify-center lg:order-1 space-y-6">
                  <div className="w-[280px] md:w-[320px] mx-auto drop-shadow-xl hover:scale-[1.02] transition-all duration-500 ease-out">
                    <Image src="/screen-earnings.svg" alt="Comprehensive portfolio growth chart and dynamic statements" width={400} height={800} />
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Institutional Integrity & AMC Logos Block */}
          <section id="partners" className="bg-mino-cream py-20 border-t border-mino-line text-center">
            <div className="container mx-auto px-6 max-w-4xl space-y-8">
              <div className="space-y-3">
                <span className="mino-eyebrow justify-center">Regulated Asset Rails</span>
                <h2 className="font-serif text-3xl md:text-4xl text-mino-ink">Built on trusted infrastructure.</h2>
                <p className="text-mino-ink/70 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                  Your investment capital is handled securely by India&apos;s leading financial institutions, routed entirely via SEBI-compliant Mutual Fund partners.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-xl mx-auto pt-4">
                <div className="bg-white rounded-2xl p-6 border border-mino-line flex items-center justify-center h-28 shadow-sm transition-all duration-300 hover:-translate-y-0.5">
                  <Image src="/axis-logo.png" alt="Axis Asset Management Company Logo" width={180} height={60} className="h-16 w-auto object-contain" />
                </div>
                <div className="bg-white rounded-2xl p-6 border border-mino-line flex items-center justify-center h-28 shadow-sm transition-all duration-300 hover:-translate-y-0.5">
                  <Image src="/hdfc-logo.png" alt="HDFC Asset Management Company Logo" width={180} height={60} className="h-16 w-auto object-contain" />
                </div>
                <div className="bg-white rounded-2xl p-6 border border-mino-line flex items-center justify-center h-28 shadow-sm transition-all duration-300 hover:-translate-y-0.5">
                  <Image src="/amfi-logo.jpg" alt="Association of Mutual Funds in India Logo" width={180} height={60} className="h-16 w-auto object-contain" />
                </div>
                <div className="bg-white rounded-2xl p-6 border border-mino-line flex items-center justify-center h-28 shadow-sm transition-all duration-300 hover:-translate-y-0.5">
                  <Image src="/cybrilla-logo.png" alt="Cybrilla Mutual Funds Investing Logo" width={180} height={60} className="h-16 w-auto object-contain" />
                </div>
              </div>
            </div>
          </section>

          {/* A Note from the Founders */}
          <section className="bg-mino-cream-deep py-24 border-t border-mino-line">
            <div className="container mx-auto px-6 max-w-3xl space-y-8">
              <span className="mino-eyebrow">A note from the founders</span>
              <blockquote className="font-serif text-2xl md:text-3xl text-mino-ink leading-[1.35] tracking-tight">
                &ldquo;We built Mino because we could not justify keeping our own salaries in a savings account anymore. The math did not make sense and we suspected we were not alone. Mino is the product we wanted for ourselves: quiet, safe, and finally honest about what your money is doing.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4 pt-2">
                <div className="w-12 h-12 rounded-full bg-mino-forest text-mino-cream font-serif text-lg font-bold inline-flex items-center justify-center shadow-inner">M</div>
                <div>
                  <div className="font-serif font-bold text-base text-mino-ink">The Mino team</div>
                  <div className="text-[10px] uppercase tracking-widest text-mino-muted font-medium mt-0.5">Pune, India</div>
                </div>
              </div>
            </div>
          </section>

          {/* Download Conversion Banner */}
          <section id="cta" className="bg-mino-forest text-mino-cream py-24 text-center relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-3xl relative z-10 space-y-6">
              <h2 className="font-serif text-4xl md:text-6xl tracking-tight">Your money shouldn&apos;t sit idle.</h2>
              <p className="text-mino-cream/70 text-sm md:text-base max-w-md mx-auto leading-relaxed">
                Setup completion takes under two minutes. Link your configuration rules to clear the idle cash deficit today.
              </p>
              
              <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
                <a href="https://apps.apple.com/in/app/zypay/id6452753963" target="_blank" rel="noopener noreferrer" className="bg-mino-cream text-mino-ink hover:bg-mino-cream/90 font-medium px-8 py-3.5 rounded-full inline-flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 text-sm">
                  Download for iOS
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.neosurge.neosurge" target="_blank" rel="noopener noreferrer" className="border border-mino-cream/30 hover:bg-white/10 font-medium px-8 py-3.5 rounded-full inline-flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 text-sm">
                  Download for Android
                </a>
              </div>
            </div>
          </section>

          {/* Interactive Collapsable Accordion Block */}
          <FaqSection />
        </main>

        <footer className="bg-mino-ink text-mino-cream border-t border-mino-line/10">
          <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 space-y-3">
                <div className="inline-flex items-center justify-center bg-white px-0.5 py-0.5 rounded-lg">
                  <Image src="/mino-logo.svg" alt="Mino Logo" width={38} height={35} className="w-12 h-9 object-contain" />
                </div>
                <p className="text-[11px] text-mino-cream/40 max-w-sm leading-relaxed">
                  Mino Money is a digital platform operated by Bullsurge Private Limited, an AMFI-registered Mutual Fund Distributor holding ARN-185445.
                </p>
                {/* Terms and Privacy Buttons */}
                <div className="flex items-center gap-4 pt-1 text-[11px]">
                  <button 
                    onClick={() => openModal('terms')} 
                    className="text-mino-cream/50 hover:text-mino-cream underline cursor-pointer transition-colors focus:outline-none"
                  >
                    Terms of Service
                  </button>
                  <span className="text-mino-cream/20">•</span>
                  <button 
                    onClick={() => openModal('privacy')} 
                    className="text-mino-cream/50 hover:text-mino-cream underline cursor-pointer transition-colors focus:outline-none"
                  >
                    Privacy Policy
                  </button>
                </div>
              </div>
              <div className="md:col-span-6 md:text-right text-[11px] text-mino-cream/40 space-y-1">
                <div>Partnerships & Queries: <a href="mailto:support@minomoney.in" className="text-mino-cream/70 hover:text-mino-cream underline transition-colors">support@minomoney.in</a></div>
                <div>© 2026 Mino Money. All rights reserved.</div>
                <div className="text-[10px] text-mino-cream/30 pt-2">Mutual fund investments are subject to market risks. Read all scheme related documents carefully.</div>
              </div>
            </div>
          </div>
        </footer>

        {/* Legal Text Modal Dialog Box overlay */}
        {modalContent && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
            onClick={closeModal}
          >
            <div 
              className="bg-mino-cream text-mino-ink rounded-[1.5rem] w-full max-w-2xl border border-mino-line shadow-2xl flex flex-col max-h-[85vh] transform transition-all"
              onClick={(e) => e.stopPropagation()} // Stop closing window when clicking inside content box
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-mino-line">
                <h3 className="font-serif text-xl font-bold text-mino-forest">
                  {modalContent === 'terms' ? 'Terms of Service' : 'Privacy Policy'}
                </h3>
                <button 
                  onClick={closeModal}
                  className="text-mino-muted hover:text-mino-ink p-1 rounded-full hover:bg-mino-cream-deep transition-colors focus:outline-none"
                  aria-label="Close dialog"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                </button>
              </div>

              {/* Modal Content container (Scrollable) */}
              <div className="p-6 overflow-y-auto text-sm leading-relaxed text-mino-ink/80 space-y-4 font-mono">
                {modalContent === 'terms' ? (
                  <>
                    <p className="font-medium text-mino-ink">By using Mino Money, you agree to our terms of service.</p>
                    <p>Mino is a product of Mino Money. Funds are parked in SEBI-regulated liquid mutual fund schemes via licensed distributors.</p>
                    <p>Past performance is not indicative of future returns. Please read scheme-related documents carefully before investing.</p>
                  </>
                ) : (
                  <>
                    <p>We collect personal information for KYC, transaction processing, and providing services. Your data is encrypted at rest and in transit, and shared only with regulated partners as required to deliver the service.</p>
                    <p>You may request access, correction, or deletion of your data at any time by writing to <a href="mailto:support@minomoney.in" className="text-mino-forest font-medium underline">support@minomoney.in</a>.</p>
                  </>
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-3 border-t border-mino-line flex justify-end bg-mino-cream-deep rounded-b-[1.5rem]">
                <button 
                  onClick={closeModal}
                  className="bg-mino-forest text-mino-cream font-medium px-5 py-2 rounded-full text-xs hover:bg-mino-forest/90 transition-all focus:outline-none"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}