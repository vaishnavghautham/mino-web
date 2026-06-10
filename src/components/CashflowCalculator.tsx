'use client';

import React, { useState, useEffect } from 'react';

export default function CashflowCalculator() {
  const [salary, setSalary] = useState<number>(100000);
  const [rent, setRent] = useState<number>(25000);
  const [essentials, setEssentials] = useState<number>(20000);
  const [lifestyle, setLifestyle] = useState<number>(15000);

  // Derived state
  const totalExpenses = rent + essentials + lifestyle;
  const monthlySavings = Math.max(0, salary - totalExpenses);
  const annualSavingsCorpus = monthlySavings * 12;

  // Yield calculations on the annual corpus
  const bankYield = annualSavingsCorpus * 0.025;
  const minoYield = annualSavingsCorpus * 0.07;
  const extraEarned = minoYield - bankYield;

  // Format currency
  const formatINR = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="bg-mino-cream pt-8 pb-24 md:pt-12 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: DIY Inputs & Sliders */}
          <div className="lg:col-span-6 space-y-10 animate-reveal">
            
            {/* Header & Privacy Trust Badge */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-mino-line bg-mino-cream-deep text-[10px] uppercase tracking-widest text-mino-muted font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-mino-forest"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                100% Private • Runs on your device
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-mino-ink leading-tight tracking-tight">
                Map your money.<br/>
                <span className="text-mino-forest">Maximize your leftovers.</span>
              </h2>
              <p className="text-sm md:text-base text-mino-ink/70 leading-relaxed max-w-md">
                We don't track, store, or judge your spending. Tweak the sliders to see how much idle cash you are leaving on the table every year.
              </p>
            </div>

            {/* Inputs Container */}
            <div className="space-y-8 font-mono">
              
              {/* Monthly Income */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-xs uppercase tracking-widest text-mino-muted font-medium">Monthly Income</label>
                  <div className="text-2xl font-serif text-mino-ink">{formatINR(salary)}</div>
                </div>
                <div className="flex gap-2">
                  {[50000, 100000, 200000, 500000].map((val) => (
                    <button
                      key={val}
                      onClick={() => setSalary(val)}
                      className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                        salary === val 
                        ? 'bg-mino-forest text-mino-cream' 
                        : 'border border-mino-line text-mino-muted hover:border-mino-muted'
                      }`}
                    >
                      {val >= 100000 ? `₹${val / 100000}L` : `₹${val / 1000}k`}
                    </button>
                  ))}
                </div>
                <input
                  type="range"
                  min="20000"
                  max="1000000"
                  step="5000"
                  value={salary}
                  onChange={(e) => setSalary(Number(e.target.value))}
                  className="w-full h-2 bg-mino-line rounded-lg appearance-none cursor-pointer accent-mino-forest"
                />
              </div>

              {/* Expenses Breakdown */}
              <div className="space-y-6 pt-4 border-t border-mino-line">
                <div className="text-xs uppercase tracking-widest text-mino-muted font-medium">Your Expenses</div>
                
                {/* Rent Slider */}
                <ExpenseSlider label="Rent & Utilities" value={rent} max={salary} onChange={setRent} formatINR={formatINR} />
                
                {/* Essentials Slider */}
                <ExpenseSlider label="Food & Essentials" value={essentials} max={salary} onChange={setEssentials} formatINR={formatINR} />
                
                {/* Lifestyle Slider */}
                <ExpenseSlider label="Lifestyle & Wants" value={lifestyle} max={salary} onChange={setLifestyle} formatINR={formatINR} />
              </div>

            </div>
          </div>

          {/* Right Column: The Mino Magic Card (Mimicking your screenshot layout) */}
          <div className="lg:col-span-6 relative animate-reveal delay-200">
            <div className="absolute -inset-4 bg-mino-cream-deep rounded-[3rem] -z-10 blur-xl opacity-50"></div>
            
            <div className="bg-white rounded-[2rem] border border-mino-line p-8 md:p-10 shadow-[0_20px_40px_-24px_rgba(20,40,30,0.08)] transition-all duration-300">
              
              {/* Monthly Breakdown */}
              <div className="flex justify-between items-center mb-8 border-b border-mino-line pb-8">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-mino-muted font-medium mb-1">Monthly Idle Cash</div>
                  <div className="font-serif text-3xl text-mino-ink">{formatINR(monthlySavings)}</div>
                  {monthlySavings === 0 && <div className="text-xs text-red-500 mt-1">You are spending your entire income!</div>}
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-widest text-mino-muted font-medium mb-1">Annual Corpus</div>
                  <div className="font-serif text-3xl text-mino-forest">{formatINR(annualSavingsCorpus)}</div>
                </div>
              </div>

              {/* Yield Comparison Box (Modeled after existing Yield Calculator) */}
              <div className="grid grid-cols-2 rounded-2xl overflow-hidden border border-mino-line font-mono mb-6">
                
                {/* Traditional Bank */}
                <div className="bg-mino-cream-deep p-6">
                  <div className="text-[10px] uppercase tracking-widest text-mino-muted font-medium mb-4">Savings A/C · 2.5%</div>
                  <div className="text-2xl text-mino-ink mb-1">{formatINR(bankYield)}</div>
                  <div className="text-xs text-mino-muted">yield per year</div>
                </div>

                {/* Mino */}
                <div className="bg-mino-forest p-6 text-mino-cream">
                  <div className="text-[10px] uppercase tracking-widest text-mino-cream/60 font-medium mb-4">Mino · ~7%</div>
                  <div className="text-2xl mb-1">{formatINR(minoYield)}</div>
                  <div className="text-xs text-mino-cream/60">yield per year</div>
                </div>

              </div>

              {/* Loss Notice */}
              <div className="bg-mino-cream p-5 rounded-xl border border-mino-line flex justify-between items-center">
                <div>
                  <div className="text-sm font-medium text-mino-ink">You're leaving money behind</div>
                  <div className="text-[10px] text-mino-muted mt-0.5">Letting it sit idle costs you</div>
                </div>
                <div className="text-right">
                  <div className="font-serif text-xl text-mino-ink">{formatINR(extraEarned)} / yr</div>
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full bg-mino-forest text-mino-cream py-4 rounded-full text-sm font-medium hover:bg-mino-forest/90 transition-all flex items-center justify-center gap-2">
                  Park {formatINR(monthlySavings)} a month
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Helper Sub-component for clean slider rendering
function ExpenseSlider({ 
  label, 
  value, 
  max, 
  onChange, 
  formatINR 
}: { 
  label: string, 
  value: number, 
  max: number, 
  onChange: (val: number) => void,
  formatINR: (val: number) => string 
}) {
  return (
    <div>
      <div className="flex justify-between items-end mb-2">
        <label className="text-sm text-mino-ink">{label}</label>
        <div className="text-sm text-mino-ink font-medium">{formatINR(value)}</div>
      </div>
      <input
        type="range"
        min="0"
        max={max}
        step="1000"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 bg-mino-line rounded-lg appearance-none cursor-pointer accent-mino-muted"
      />
    </div>
  );
}