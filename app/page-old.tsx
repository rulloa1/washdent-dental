import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Link from 'next/link';

export default function Home() {
  const services = [
    { title: 'Preventive Care', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit suspe varius tetur dolor.' },
    { title: 'Cosmetic Dentistry', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit suspe varius tetur dolor.' },
    { title: 'Orthodontics', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit suspe varius tetur dolor.' },
    { title: 'Restorative Dentistry', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit suspe varius tetur dolor.' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      
      {/* Treatments Section */}
      <section id="treatments" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-16">
            <div className="w-16 h-16 rounded-full bg-linen flex items-center justify-center">
              <span className="font-display text-2xl text-midnight-blue">1</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-midnight-blue">Treatments</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {treatments.map((treatment, idx) => (
              <div key={idx} className="space-y-6">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-linen to-tan p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/80 flex items-center justify-center">
                      <svg className="w-10 h-10 text-cornflower-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-display text-2xl text-midnight-blue mb-3">{treatment.category}</h3>
                  <p className="text-brown-primary mb-6">
                    We specialize in helping patients with {treatment.category.toLowerCase()} and making their smiles look great.
                  </p>
                  
                  <div className="space-y-3">
                    {treatment.items.map((item, itemIdx) => (
                      <Link
                        key={itemIdx}
                        href="#"
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-linen transition group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-tan flex-shrink-0"></div>
                        <span className="text-brown-primary group-hover:text-cornflower-blue transition">
                          {item}
                        </span>
                      </Link>
                    ))}
                  </div>
                  
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 mt-6 text-cornflower-blue font-medium hover:gap-3 transition-all"
                  >
                    {treatment.category}
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-linen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-16">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
              <span className="font-display text-2xl text-midnight-blue">2</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-midnight-blue">About us</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cornflower-blue/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-cornflower-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-midnight-blue mb-2">Passion</h3>
              <p className="text-brown-primary">We are passionate about helping people smile and live healthily</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brown-light/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-brown-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-midnight-blue mb-2">Team</h3>
              <p className="text-brown-primary">First-class dental treatment options to meet your needs</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cornflower-blue/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-cornflower-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-midnight-blue mb-2">Experience</h3>
              <p className="text-brown-primary">High-quality and affordable dental care services</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-cornflower-blue/10 rounded-full">
                <span className="text-cornflower-blue font-medium">Know-how</span>
              </div>
              <h3 className="font-display text-4xl text-midnight-blue">
                We have Over 20 years of experience
              </h3>
              <div className="space-y-4 text-brown-primary">
                <p>
                  We specialize in helping patients with dental health and making their smiles look great.
                </p>
                <p>
                  Dental treatments are a vital part of your health. Choosing the best dental care for your unique needs is difficult. Our excellent team will help you in every way.
                </p>
              </div>
              <Link
                href="#team"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cornflower-blue text-white rounded-full font-medium hover:bg-cornflower-blue/90 transition"
              >
                The team
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-tan to-linen-light"></div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-cornflower-blue/20 to-linen"></div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-brown-light/20 to-tan"></div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-linen to-ivory"></div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-2xl p-8">
              <div className="font-display text-5xl text-cornflower-blue mb-2">20+</div>
              <div className="text-lg text-midnight-blue mb-1">expert members</div>
              <div className="text-sm text-brown-light">Team</div>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="font-display text-5xl text-cornflower-blue mb-2">3+</div>
              <div className="text-lg text-midnight-blue mb-1">high-quality clinics</div>
              <div className="text-sm text-brown-light">Locations</div>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="font-display text-5xl text-cornflower-blue mb-2">10K+</div>
              <div className="text-lg text-midnight-blue mb-1">successful treatments</div>
              <div className="text-sm text-brown-light">Patients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-16">
            <div className="w-16 h-16 rounded-full bg-linen flex items-center justify-center">
              <span className="font-display text-2xl text-midnight-blue">3</span>
            </div>
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-midnight-blue">Our team</h2>
              <p className="text-brown-primary mt-2">We are excellent in dental care and treatments for all patients.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-tan to-linen-light mb-4 overflow-hidden relative">
                <div className="absolute inset-0 flex items-end justify-center pb-8">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/80 flex items-center justify-center">
                      <svg className="w-12 h-12 text-brown-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="font-display text-xl text-midnight-blue">Dr. Mauricio Tovar</h3>
              <p className="text-brown-light">Lead Dentist</p>
            </div>
            
            <div className="group">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-cornflower-blue/20 to-linen mb-4"></div>
              <h3 className="font-display text-xl text-midnight-blue">Sarah Johnson</h3>
              <p className="text-brown-light">Dental Hygienist</p>
            </div>
            
            <div className="group">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-brown-light/20 to-tan mb-4"></div>
              <h3 className="font-display text-xl text-midnight-blue">Michael Chen</h3>
              <p className="text-brown-light">Dental Assistant</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-cornflower-blue font-medium hover:gap-3 transition-all"
            >
              View full team
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-midnight-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-cornflower-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-brown-light rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <span className="text-tan font-medium">Book online</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl">
                To book an appointment straight away you can use our online booking form
              </h2>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cornflower-blue text-white rounded-full font-medium hover:bg-cornflower-blue/90 transition-all hover:gap-3"
              >
                Booking form
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-cornflower-blue/20 to-brown-light/20 backdrop-blur-sm"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="font-display text-2xl mb-4">Washington Dental</div>
              <p className="text-tan text-sm">Dr. Mauricio Tovar</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-tan">
                <Link href="/" className="block hover:text-white transition">Home</Link>
                <Link href="#treatments" className="block hover:text-white transition">Treatments</Link>
                <Link href="#about" className="block hover:text-white transition">About</Link>
                <Link href="#team" className="block hover:text-white transition">Team</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-tan text-sm">
                <p>123 Dental Street</p>
                <p>Your City, ST 12345</p>
                <p>contact@washdentdds.com</p>
                <p>(123) 456-7890</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <Link href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-tan text-sm">
            <p>&copy; {new Date().getFullYear()} Washington Dental - Dr. Mauricio Tovar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
