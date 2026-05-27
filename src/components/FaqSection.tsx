'use client';

import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FaqItem[] = [
    {
      question: "What is Mino and how does it work?",
      answer: "Mino parks your idle money in liquid mutual funds and lets you earn up to 7% a year. You can withdraw to your bank in minutes, any day. It is operated by Bullsurge Private Limited, an AMFI-registered Mutual Fund Distributor (ARN-185445)."
    },
    {
      question: "Is Mino better than keeping money in a savings account?",
      answer: "Most savings accounts in India pay 2.5 to 3.5% a year. Liquid funds on Mino have historically returned around 6 to 7%. You can withdraw to your bank in minutes, any day of the week. For money sitting idle, the math is hard to ignore."
    },
    {
      question: "Can I use Mino as an emergency fund?",
      answer: "Yes. Because withdrawals reach your bank in minutes, Mino works well as a place to keep your emergency fund. Your money earns more than it would in a savings account and stays just as accessible."
    },
    {
      question: "What is the minimum amount to start on Mino?",
      answer: "You can start with as little as Rs 500. There is no minimum holding period and no penalty for withdrawing early."
    }
  ];

  return (
    <section id="faqs" className="bg-mino-cream py-24 border-t border-mino-line">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <span className="mino-eyebrow justify-center mb-2">Transparency</span>
          <h2 className="font-serif text-3xl md:text-4xl text-mino-ink font-bold">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border border-mino-line/60 rounded-2xl bg-white overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-serif text-base md:text-lg font-bold text-mino-ink pr-4 group-hover:text-mino-forest transition-colors">
                    {item.question}
                  </h3>
                  <span className={`transform transition-transform duration-300 text-mino-muted flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </span>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] border-t border-mino-line/30' : 'max-h-0'}`}
                >
                  <p className="p-6 text-sm text-mino-ink/70 leading-relaxed bg-mino-cream/10">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}