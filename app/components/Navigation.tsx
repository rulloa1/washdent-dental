'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link 
            href="/" 
            className="text-2xl font-bold text-white hover:opacity-80 transition"
          >
            LUMINATE
            <span className="text-pink ml-2">DENTAL</span>
          </Link>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-pink hover:text-black transition-all"
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Full-screen menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Link 
                  href="/" 
                  className="block text-4xl md:text-6xl font-bold text-white hover:text-pink transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="#services" 
                  className="block text-4xl md:text-6xl font-bold text-white hover:text-pink transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href="#about" 
                  className="block text-4xl md:text-6xl font-bold text-white hover:text-pink transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="#contact" 
                  className="block text-4xl md:text-6xl font-bold text-white hover:text-pink transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
              
              <div className="space-y-6 text-light-gray">
                <div>
                  <h3 className="text-white font-semibold mb-2">General Contact</h3>
                  <p>hello@washdentdds.com</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Appointments</h3>
                  <p>office@washdentdds.com</p>
                </div>
                <div className="pt-6">
                  <h3 className="text-white font-semibold mb-4">Healthy Teeth, Happy Life</h3>
                  <p className="text-sm">©Washington Dental {new Date().getFullYear()} All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
