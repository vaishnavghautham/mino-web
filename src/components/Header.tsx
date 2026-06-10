'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-mino-cream/85 backdrop-blur-md sticky top-0 z-50 border-b border-mino-line/60">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <a href="/#" className="flex items-center">
            <Image 
              src="/mino-logo.svg" 
              alt="Mino Logo" 
              width={70} 
              height={64} 
              className="w-19 h-16 object-contain"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-mino-ink/70 font-medium">
            <a href="/#yield" className="hover:text-mino-ink transition-colors">Yield</a>
            <a href="/tools/smart-budget" className="hover:text-mino-ink transition-colors">Smart Budget</a>
            <a href="/#features" className="hover:text-mino-ink transition-colors">Features</a>
            {/* <a href="/#partners" className="hover:text-mino-ink transition-colors">Partners</a> */}
            <a href="/blog" className="hover:text-mino-ink transition-colors">Blog</a>
            <a href="/#faqs" className="hover:text-mino-ink transition-colors">FAQs</a>
          </nav>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-mino-ink focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span className={`w-full h-0.5 bg-mino-ink rounded transition-all duration-300 origin-left ${isOpen ? 'rotate-45 translate-x-px' : ''}`} />
              <span className={`w-full h-0.5 bg-mino-ink rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-mino-ink rounded transition-all duration-300 origin-left ${isOpen ? '-rotate-45 translate-x-px -translate-y-0.5' : ''}`} />
            </div>
          </button>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`md:hidden absolute top-16 inset-x-0 bg-mino-cream border-b border-mino-line shadow-lg transition-all duration-300 ease-in-out transform origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
      <nav className="flex flex-col p-6 space-y-4 text-sm uppercase tracking-wider font-medium text-mino-ink/80">
        <a href="/#yield" onClick={toggleMenu} className="hover:text-mino-ink py-2 transition-colors">Yield</a>
        <a href="/tools/smart-budget" onClick={toggleMenu} className="hover:text-mino-ink py-2 transition-colors">Smart Budget</a>
        <a href="/#features" onClick={toggleMenu} className="hover:text-mino-ink py-2 transition-colors">Features</a>
        {/* <a href="/#partners" onClick={toggleMenu} className="hover:text-mino-ink py-2 transition-colors">Partners</a> */}
        <a href="/blog" onClick={toggleMenu} className="hover:text-mino-ink py-2 transition-colors">Blog</a>
        <a href="/#faqs" onClick={toggleMenu} className="hover:text-mino-ink py-2 transition-colors">FAQs</a>
      </nav>
      </div>
    </header>
  );
}