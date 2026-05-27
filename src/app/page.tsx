import React from 'react';
import Image from 'next/image';
import YieldCalculator from '@/components/YieldCalculator';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div id="root">
      <div className="min-h-screen bg-mino-cream text-mino-ink antialiased">
        
        <Header />

        <main>
          
          {/* Hero Section */}
          <section className="bg-mino-cream pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                
                {/* Hero Left Content Block - Instant crisp reveal on page load */}
                <div className="lg:col-span-7 space-y-6 animate-reveal">
                  <span className="mino-eyebrow">
                    <span className="w-1.5 h-1.5 rounded-full bg-mino-forest"></span>
                    Liquid Fund App for India
                  </span>
                  <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-mino-ink leading-[1.05] tracking-tight">
                  Earn up to 7% on your idle savings. Invest and withdraw instantly.<br />
                    <em className="not-italic text-mino-forest font-semibold">Invest and withdraw instantly.</em>
                  </h1>
                  <p className="text-lg md:text-xl text-mino-ink/70 max-w-xl leading-relaxed">
                  Up to 3x more than your savings account. Park your money in liquid funds with zero lock-in and no hidden charges.
                  </p>
                  
                  {/* App Download Badges */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <a 
                      href="https://apps.apple.com/in/app/zypay/id6452753963" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mino-pill flex items-center gap-3 !py-3.5 !px-6 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-apple"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>
                      <div className="text-left">
                        <div className="text-[10px] uppercase opacity-60 leading-none">Download on the</div>
                        <div className="text-sm font-semibold leading-tight">App Store</div>
                      </div>
                    </a>
                    
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.neosurge.neosurge" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mino-pill-outline flex items-center gap-3 !py-3.5 !px-6 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                      <div className="text-left">
                        <div className="text-[10px] uppercase opacity-60 circle leading-none">Get it on</div>
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

                {/* Hero Right Mockup - Follows with a staggered cinematic entry */}
                <div className="lg:col-span-5 flex justify-center relative animate-reveal delay-200">
                  <div className="absolute -inset-4 bg-mino-cream-deep rounded-[3rem] -z-10 blur-xl opacity-50"></div>
                  <div className="w-[320px] md:w-[360px] drop-shadow-[0_25px_50px_rgba(27,58,48,0.14)] hover:scale-[1.015] hover:drop-shadow-[0_30px_60px_rgba(27,58,48,0.18)] transition-all duration-700 ease-out">
                    <Image 
                      src="/hero-main.png" 
                      alt="Core App Dashboard Interface"
                      width={450}
                      height={900}
                      priority
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

              </div>
            </div>
          </section>

          <YieldCalculator />

          {/* Product Feature Deep-Dive Section */}
          <section id="features" className="bg-mino-cream-deep py-24 border-t border-mino-line">
            <div className="container mx-auto px-6 space-y-24">
              
              {/* Feature 1: Pockets */}
              <div className="grid lg:grid-cols-12 gap-12 items-center transition-all duration-700 hover:opacity-100">
                <div className="lg:col-span-6 space-y-4 lg:order-2">
                  <span className="mino-eyebrow">Goal-Based Savings</span>
                  <h2 className="font-serif text-4xl md:text-5xl text-mino-ink leading-tight tracking-tight">
                    Create pockets for every goal, all in one place.
                  </h2>
                  <p className="text-base text-mino-ink/70 leading-relaxed">
                    Turn your milestones into achievements, faster. Pockets are flexible containers that let you seamlessly divide and organize your wealth for short-term and long-term milestones without managing multiple bank accounts.
                  </p>
                </div>
                <div className="lg:col-span-6 flex justify-center lg:order-1">
                  <div className="w-[280px] md:w-[320px] drop-shadow-xl hover:scale-[1.02] transition-all duration-500 ease-out">
                    <Image 
                      src="/screen-pockets.png" 
                      alt="Mino goal-based savings pockets for liquid fund investments"
                      width={400}
                      height={800}
                    />
                  </div>
                </div>
              </div>

              {/* Feature 2: Instant Redemption */}
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <span className="mino-eyebrow">Liquidity on Demand</span>
                  <h2 className="font-serif text-4xl md:text-5xl text-mino-ink leading-tight tracking-tight">
                    Withdraw your money instantly, no waiting.
                  </h2>
                  <p className="text-base text-mino-ink/70 leading-relaxed">
                    Real-time liquidity routed directly to your linked primary bank account. Whether it is a weekend, a public holiday, or a late-night emergency; your earnings remain accessible within minutes. No lock-ins, no exceptions.
                  </p>
                </div>
                <div className="lg:col-span-6 flex justify-center">
                  <div className="w-[280px] md:w-[320px] drop-shadow-xl hover:scale-[1.02] transition-all duration-500 ease-out">
                    <Image 
                      src="/screen-withdraw.png" 
                      alt="Instant withdrawal from liquid fund to bank account on Mino"
                      width={400}
                      height={800}
                    />
                  </div>
                </div>
              </div>

              {/* Feature 3: Transparent Earnings Tracking */}
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-4 lg:order-2">
                  <span className="mino-eyebrow">Granular Tracking</span>
                  <h2 className="font-serif text-4xl md:text-5xl text-mino-ink leading-tight tracking-tight">
                    Track all your earnings, effortlessly.
                  </h2>
                  <p className="text-base text-mino-ink/70 leading-relaxed">
                    A clear, transparent breakdown of how much you have earned over time. Watch your interest stack up every single morning with analytical views comparing your yield metrics directly against old bank alternatives.
                  </p>
                </div>
                <div className="lg:col-span-6 flex justify-center lg:order-1">
                  <div className="w-[280px] md:w-[320px] drop-shadow-xl hover:scale-[1.02] transition-all duration-500 ease-out">
                    <Image 
                      src="/screen-earnings.png" 
                      alt="Comprehensive portfolio growth chart and dynamic statements"
                      width={400}
                      height={800}
                    />
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
              
              <div className="grid grid-cols-2 gap-6 max-w-md mx-auto pt-4">
                <div className="bg-white rounded-2xl p-6 border border-mino-line flex items-center justify-center h-24 shadow-[0_4px_12px_rgba(0,0,0,0.01)] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <Image 
                    src="/axis-logo.png" 
                    alt="Axis Asset Management Company Logo" 
                    width={130} 
                    height={45} 
                    className="h-11 w-auto object-contain"
                  />
                </div>
                <div className="bg-white rounded-2xl p-6 border border-mino-line flex items-center justify-center h-24 shadow-[0_4px_12px_rgba(0,0,0,0.01)] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <Image 
                    src="/hdfc-logo.png" 
                    alt="HDFC Asset Management Company Logo" 
                    width={130} 
                    height={45} 
                    className="h-11 w-auto object-contain"
                  />
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
                <div className="w-12 h-12 rounded-full bg-mino-forest text-mino-cream font-serif text-lg font-bold inline-flex items-center justify-center shadow-inner">
                  M
                </div>
                <div>
                  <div className="font-serif font-bold text-base text-mino-ink">The Mino team</div>
                  <div className="text-[10px] uppercase tracking-widest text-mino-muted font-medium mt-0.5">Pune, India</div>
                </div>
              </div>
            </div>
          </section>

          {/* Sticky Download Conversion Footprint */}
          <section id="cta" className="bg-mino-forest text-mino-cream py-24 text-center relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-3xl relative z-10 space-y-6">
              <h2 className="font-serif text-4xl md:text-6xl tracking-tight">
                Your money shouldn&apos;t sit idle.
              </h2>
              <p className="text-mino-cream/70 text-sm md:text-base max-w-md mx-auto leading-relaxed">
                Scan the mobile marketplace flags to link your primary account configuration. Setup completion takes under two minutes.
              </p>
              
              <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
                <a 
                  href="https://apps.apple.com/in/app/zypay/id6452753963" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-mino-cream text-mino-ink hover:bg-mino-cream/90 font-medium px-8 py-3.5 rounded-full inline-flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 text-sm"
                >
                  Download for iOS
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.neosurge.neosurge" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="border border-mino-cream/30 hover:bg-white/10 font-medium px-8 py-3.5 rounded-full inline-flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 text-sm"
                >
                  Download for Android
                </a>
              </div>
            </div>
          </section>

          {/* Detailed SEO FAQ Block */}
          <section id="faqs" className="bg-mino-cream py-24 border-t border-mino-line">
            <div className="container mx-auto px-6 max-w-3xl">
              <div className="text-center mb-16">
                <span className="mino-eyebrow justify-center mb-2">Transparency</span>
                <h2 className="font-serif text-3xl md:text-4xl text-mino-ink font-bold">Frequently Asked Questions</h2>
              </div>
              
              <div className="space-y-8 divide-y divide-mino-line/60">
                
                <div className="pt-0">
                  <h3 className="font-serif text-lg font-bold text-mino-ink mb-2">What is Mino and how does it work?</h3>
                  <p className="text-sm text-mino-ink/70 leading-relaxed">
                    Mino helps you park idle money in eligible liquid mutual funds and access it quickly when needed. It bridges the gap between high-yield financial assets and checking account flexibility.
                  </p>
                </div>

                <div className="pt-6">
                  <h3 className="font-serif text-lg font-bold text-mino-ink mb-2">
                    Is Mino better than keeping money in a savings account?
                  </h3>
                  <p className="text-sm text-mino-ink/70 leading-relaxed">
                    Most savings accounts in India pay 2.5 to 3.5% a year. Liquid funds on Mino have historically returned around 6 to 7%. You can withdraw to your bank in minutes, any day of the week. For money sitting idle, the math is hard to ignore.
                  </p>
                </div>

                <div className="pt-6">
                  <h3 className="font-serif text-lg font-bold text-mino-ink mb-2">
                    Can I use Mino as an emergency fund?
                  </h3>
                  <p className="text-sm text-mino-ink/70 leading-relaxed">
                    Yes. Because withdrawals reach your bank in minutes, Mino works well as a place to keep your emergency fund. Your money earns more than it would in a savings account and stays just as accessible.
                  </p>
                </div>

                <div className="pt-6">
                  <h3 className="font-serif text-lg font-bold text-mino-ink mb-2">
                    What is the minimum amount to start on Mino?
                  </h3>
                  <p className="text-sm text-mino-ink/70 leading-relaxed">
                    You can start with as little as Rs 500. There is no minimum holding period and no penalty for withdrawing early.
                  </p>
                </div>

              </div>
            </div>
          </section>

        </main>

        {/* Compliant Footer Area */}
        <footer className="bg-mino-ink text-mino-cream border-t border-mino-line/10">
          <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 space-y-3">
                <div className="inline-flex items-center justify-center bg-white px-0.5 py-0.5 rounded-lg">
                  <Image
                    src="/mino-logo.png"
                    alt="Mino Logo"
                    width={38}
                    height={35}
                    className="w-12 h-9 object-contain"
                  />
                </div>
                <p className="text-[11px] text-mino-cream/40 max-w-sm leading-relaxed">
                  Mino Money is a digital platform operated by Bullsurge Private Limited, an AMFI-registered Mutual Fund Distributor holding ARN-185445.
                </p>
              </div>
              <div className="md:col-span-6 md:text-right text-[11px] text-mino-cream/40 space-y-1">
                <div>
                  Partnerships & Queries:{' '}
                  <a href="mailto:support@minomoney.in" className="text-mino-cream/70 hover:text-mino-cream underline transition-colors">
                    support@minomoney.in
                  </a>
                </div>
                <div>© 2026 Mino Money. All rights reserved.</div>
                <div className="text-[10px] text-mino-cream/30 pt-2">
                  Mutual fund investments are subject to market risks. Read all scheme related documents carefully.
                </div>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}