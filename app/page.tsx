import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Link from 'next/link';

export default function Home() {
  const services = [
    { title: 'Preventive Care', desc: 'Regular checkups, cleanings, and preventive treatments to keep your smile healthy.' },
    { title: 'Cosmetic Dentistry', desc: 'Transform your smile with whitening, veneers, and cosmetic procedures.' },
    { title: 'Orthodontics', desc: 'Straighten your teeth with modern braces and clear aligner solutions.' },
    { title: 'Restorative Dentistry', desc: 'Repair and restore damaged teeth with crowns, bridges, and implants.' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      
      {/* Transform Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Transform your smile with expert dental care
              </h2>
              <p className="text-light-gray text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementu
              </p>
              <Link 
                href="#contact"
                className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-pink transition-all"
              >
                Contact Us
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-medium-gray to-dark-gray border border-white/5"></div>
              <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-pink/20 to-dark-gray border border-white/5 mt-8"></div>
              <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-red-accent/20 to-dark-gray border border-white/5"></div>
              <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-medium-gray to-dark-gray border border-white/5 mt-8"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Services */}
      <section id="services" className="py-32 bg-dark-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Patient Services</h2>
            <p className="text-light-gray text-lg max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementu
            </p>
            <Link 
              href="#contact"
              className="inline-block mt-8 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-pink transition-all"
            >
              Contact Us
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              href="#contact"
              className="group p-8 rounded-3xl bg-gradient-to-br from-pink/20 to-medium-gray border border-white/5 hover:border-pink/50 transition-all"
            >
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-pink/30 to-transparent mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">View All</h3>
            </Link>

            {services.map((service, idx) => (
              <div 
                key={idx}
                className="group p-8 rounded-3xl bg-medium-gray border border-white/5 hover:border-white/20 transition-all"
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <div className="aspect-video rounded-2xl bg-dark-gray mb-4"></div>
                <p className="text-light-gray mb-6">{service.desc}</p>
                <Link 
                  href="#contact"
                  className="text-white hover:text-pink transition font-semibold inline-flex items-center gap-2"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="about" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold">Why Washington Dental?</h2>
              <p className="text-light-gray text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementu
              </p>
              <Link 
                href="#contact"
                className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-pink transition-all"
              >
                Contact Us
              </Link>
            </div>
            
            <div className="space-y-8">
              <div className="p-8 rounded-3xl bg-medium-gray border border-white/5">
                <span className="inline-block px-4 py-2 bg-pink/20 text-pink text-sm font-semibold rounded-full mb-4">
                  Why Washington Dental
                </span>
                <h3 className="text-3xl font-bold mb-4">Comprehensive care</h3>
                <p className="text-light-gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              
              <div className="p-8 rounded-3xl bg-medium-gray border border-white/5">
                <span className="inline-block px-4 py-2 bg-pink/20 text-pink text-sm font-semibold rounded-full mb-4">
                  Why Washington Dental
                </span>
                <h3 className="text-3xl font-bold mb-4">Customized treatments</h3>
                <p className="text-light-gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              
              <div className="p-8 rounded-3xl bg-medium-gray border border-white/5">
                <span className="inline-block px-4 py-2 bg-pink/20 text-pink text-sm font-semibold rounded-full mb-4">
                  Why Washington Dental
                </span>
                <h3 className="text-3xl font-bold mb-4">Quality technology</h3>
                <p className="text-light-gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-32 bg-dark-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Make an appointment</h2>
            <p className="text-light-gray text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementu
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-3">Service Needed?</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Preventative', 'Cosmetic', 'Orthodontics'].map((service) => (
                  <label key={service} className="flex items-center gap-3 p-4 rounded-xl bg-medium-gray border border-white/5 hover:border-pink/50 cursor-pointer transition">
                    <input type="checkbox" className="w-5 h-5 rounded border-white/20 bg-black text-pink focus:ring-pink" />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-3">Your name</label>
                <input 
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-6 py-4 rounded-xl bg-medium-gray border border-white/5 focus:border-pink focus:outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-3">Your email address</label>
                <input 
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 rounded-xl bg-medium-gray border border-white/5 focus:border-pink focus:outline-none transition"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-white text-black font-semibold rounded-full hover:bg-pink transition-all"
            >
              Send Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="text-2xl font-bold mb-4">
                LUMINATE <span className="text-pink">DENTAL</span>
              </div>
              <p className="text-light-gray text-sm">Healthy Teeth, Happy Life</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-light-gray text-sm">
                <p>hello@washdentdds.com</p>
                <p>office@washdentdds.com</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Pages</h4>
              <div className="space-y-2 text-light-gray text-sm">
                <Link href="/" className="block hover:text-white transition">Home</Link>
                <Link href="#services" className="block hover:text-white transition">Services</Link>
                <Link href="#about" className="block hover:text-white transition">About</Link>
                <Link href="#contact" className="block hover:text-white transition">Contact</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <Link href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-pink/20 transition flex items-center justify-center">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-pink/20 transition flex items-center justify-center">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/5 mt-12 pt-8 text-center text-light-gray text-sm">
            <p>©Washington Dental - Dr. Mauricio Tovar {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
