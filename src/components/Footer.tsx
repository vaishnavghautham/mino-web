import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
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
              <Link 
                href="/terms" 
                className="text-mino-cream/50 hover:text-mino-cream underline cursor-pointer transition-colors focus:outline-none"
              >
                Terms of Service
              </Link>
              <span className="text-mino-cream/20">•</span>
              <Link 
                href="/privacy" 
                className="text-mino-cream/50 hover:text-mino-cream underline cursor-pointer transition-colors focus:outline-none"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="md:col-span-6 md:text-right text-[11px] text-mino-cream/40 space-y-1">
            <div>Partnerships & Queries: <a href="mailto:support@minomoney.in" className="text-mino-cream/70 hover:text-mino-cream underline transition-colors">support@minomoney.in</a></div>
            <div>© {new Date().getFullYear()} Mino Money. All rights reserved.</div>
            <div className="text-[10px] text-mino-cream/30 pt-2">Mutual fund investments are subject to market risks. Read all scheme related documents carefully.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}