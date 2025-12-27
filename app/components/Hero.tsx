'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-black pt-32 pb-24 min-h-screen flex items-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content - Animated text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none">
                <span className="block text-white">Smile</span>
                <span className="block text-pink">bright</span>
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink to-red-accent flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-light-gray text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementu
                </p>
              </div>
            </div>

            <Link 
              href="#contact"
              className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-pink hover:scale-105 transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Right content - Large text */}
          <div className="space-y-4">
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none text-right">
              <span className="block text-white">Live</span>
              <span className="block text-transparent bg-gradient-to-r from-pink to-red-accent bg-clip-text">better</span>
            </h2>
          </div>
        </div>

        {/* Bottom images grid */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-pink/20 to-medium-gray border border-white/5"></div>
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-red-accent/20 to-medium-gray border border-white/5"></div>
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-pink/20 to-medium-gray border border-white/5"></div>
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-red-accent/20 to-medium-gray border border-white/5"></div>
        </div>
      </div>
    </section>
  );
}
