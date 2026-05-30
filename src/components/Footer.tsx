// components/Footer.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Footer() {
  const [modalContent, setModalContent] = useState<'terms' | 'privacy' | null>(null);

  const openModal = (type: 'terms' | 'privacy') => {
    setModalContent(type);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalContent(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
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

      {/* Legal Text Modal Dialog Box */}
      {modalContent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
          onClick={closeModal}
        >
          <div 
            className="bg-mino-cream text-mino-ink rounded-[1.5rem] w-full max-w-2xl border border-mino-line shadow-2xl flex flex-col max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-mino-line">
              <h3 className="font-serif text-xl font-bold text-mino-forest">
                {modalContent === 'terms' ? 'Terms of Service' : 'Privacy Policy'}
              </h3>
              <button onClick={closeModal} className="text-mino-muted hover:text-mino-ink p-1 rounded-full hover:bg-mino-cream-deep transition-colors focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>
            </div>
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
            <div className="px-6 py-3 border-t border-mino-line flex justify-end bg-mino-cream-deep rounded-b-[1.5rem]">
              <button onClick={closeModal} className="bg-mino-forest text-mino-cream font-medium px-5 py-2 rounded-full text-xs hover:bg-mino-forest/90 transition-all focus:outline-none">
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}