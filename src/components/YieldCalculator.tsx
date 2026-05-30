'use client';

import React, { useState } from 'react';

export default function YieldCalculator() {
  // Initial state set to 2,00,000 to match your design exactly
  const [balance, setBalance] = useState<number>(200000);

  const minBalance = 10000;
  const maxBalance = 2500000;

  const savingsReturn = Math.round(balance * 0.025);
  const minoReturn = Math.round(balance * 0.07);
  const moneyLost = minoReturn - savingsReturn;
  const lostPerHour = (moneyLost / (365 * 24)).toFixed(2);

  // Helper function to handle Indian currency localization format
  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section id="yield" className="bg-mino-cream py-24 border-t border-mino-line">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Block Column */}
          <div className="space-y-6">
            <span className="mino-eyebrow">Your numbers</span>
            <h2 className="font-serif text-4xl md:text-5xl text-mino-ink leading-[1.05] tracking-tight">
              See what your idle cash is costing you.
            </h2>
            <p className="text-lg text-mino-ink/65 max-w-md leading-relaxed">
              Drag the slider to your current savings balance. Watch the difference compound - by the year, by the hour.
            </p>
          </div>

          {/* Interactive Card Container */}
          <div className="bg-white rounded-[2rem] border border-mino-line p-8 md:p-10 shadow-[0_30px_60px_-30px_rgba(20,40,30,0.12)]">
            <div className="flex items-baseline justify-between mb-3">
              <span className="text-xs uppercase tracking-widest text-mino-muted font-medium">Idle balance</span>
              <span className="font-serif text-3xl font-bold text-mino-ink tabular-nums">₹{formatCurrency(balance)}</span>
            </div>

            {/* Native Slider Input Element */}
            <div className="relative my-6 flex items-center">
              <input
                type="range"
                min={minBalance}
                max={maxBalance}
                step={10000}
                value={balance}
                onChange={(e) => setBalance(Number(e.target.value))}
                className="w-full h-2 bg-mino-line rounded-full appearance-none cursor-pointer accent-mino-forest"
                style={{
                  background: `linear-gradient(to right, #1B3A30 0%, #1B3A30 ${((balance - minBalance) / (maxBalance - minBalance)) * 100}%, #E5E2D9 ${((balance - minBalance) / (maxBalance - minBalance)) * 100}%, #E5E2D9 100%)`
                }}
              />
            </div>

            <div className="flex justify-between text-[11px] uppercase tracking-widest text-mino-muted font-medium mb-8">
              <span>₹10K</span>
              <span>₹25L</span>
            </div>

            {/* Real-time Calculation Matrix */}
            <div className="grid grid-cols-2 gap-px bg-mino-line rounded-2xl overflow-hidden border border-mino-line">
              <div className="bg-mino-cream p-5">
                <div className="text-[11px] uppercase tracking-widest text-mino-muted mb-2 font-medium">Savings a/c · 2.5%</div>
                <div className="font-serif text-2xl text-mino-ink/70 font-semibold tabular-nums">₹{formatCurrency(savingsReturn)}</div>
                <div className="text-xs text-mino-muted mt-1">per year</div>
              </div>
              <div className="bg-mino-forest p-5">
                <div className="text-[11px] uppercase tracking-widest text-mino-cream/60 mb-2 font-medium">Mino · ~7%</div>
                <div className="font-serif text-2xl text-mino-cream font-bold tabular-nums">₹{formatCurrency(minoReturn)}</div>
                <div className="text-xs text-mino-cream/70 mt-1">per year</div>
              </div>
            </div>

            {/* Dynamic Growth Loss Notification Container */}
            <div className="mt-6 rounded-2xl p-5 border bg-mino-cream-deep border-mino-line">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-medium text-mino-ink/70">You&apos;re losing</span>
                <span className="font-serif text-3xl font-bold tabular-nums text-mino-ink">₹{formatCurrency(moneyLost)} / yr</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-mino-muted">
                <span>Cost of waiting</span>
                <span className="tabular-nums font-medium">≈ ₹{lostPerHour} every hour</span>
              </div>
            </div>

            <a href="#cta" className="mino-pill w-full mt-6 text-center text-sm tracking-wider">
              Park this amount ↗
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}