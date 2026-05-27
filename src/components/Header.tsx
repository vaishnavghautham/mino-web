'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-mino-cream/80 backdrop-blur-xl sticky top-0 z-50 border-b border-mino-line/40 transition-all duration-500">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20"> {/* Slightly taller height for editorial breathing room */}
          
          {/* Logo with clean micro-interaction */}
          <a href="#" className="flex items-center group transition-transform duration-500 ease-out active:scale-95">
            <Image 
              src="/mino-logo.svg" 
              alt="Mino Logo" 
              width={70} 
              height={64} 
              className="w-16 h-14 object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              priority
            />
          </a>

          {/* Grand & Sleek Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.22em] text-mino-ink/60 font-semibold selection:bg-transparent">
            <a href="#yield" className="mino-nav-link hover:text-mino-ink transition-colors duration-300">
              Yield
            </a>
            <a href="#features" className="mino-nav-link hover:text-mino-ink transition-colors duration-300">
              Features
            </a>
            <a href="#partners" className="mino-nav-link hover:text-mino-ink transition-colors duration-300">
              Partners
            </a>
            <a href="#faqs" className="mino-nav-link hover:text-mino-ink transition-colors duration-300">
              FAQs
            </a>
          </nav>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-mino-ink focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span className={`w-full h-[1.5px] bg-mino-ink rounded transition-all duration-300 origin-left ${isOpen ? 'rotate-45 translate-x-px' : ''}`} />
              <span className={`w-full h-[1.5px] bg-mino-ink rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-[1.5px] bg-mino-ink rounded transition-all duration-300 origin-left ${isOpen ? '-rotate-45 translate-x-px -translate-y-0.5' : ''}`} />
            </div>
          </button>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`md:hidden absolute top-20 inset-x-0 bg-mino-cream/95 backdrop-blur-xl border-b border-mino-line shadow-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
        <nav className="flex flex-col p-8 space-y-5 text-xs uppercase tracking-[0.18em] font-bold text-mino-ink/70">
          <a href="#yield" onClick={toggleMenu} className="hover:text-mino-forest py-2 transition-colors duration-300 border-b border-mino-line/30">Yield</a>
          <a href="#features" onClick={toggleMenu} className="hover:text-mino-forest py-2 transition-colors duration-300 border-b border-mino-line/30">Features</a>
          <a href="#partners" onClick={toggleMenu} className="hover:text-mino-forest py-2 transition-colors duration-300 border-b border-mino-line/30">Partners</a>
          <a href="#faqs" onClick={toggleMenu} className="hover:text-mino-forest py-2 transition-colors duration-300">FAQs</a>
        </nav>
      </div>
    </header>
  );
}