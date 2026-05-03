import { motion } from 'motion/react';
import React, { useState, useEffect } from 'react';
import { 
  Utensils, 
  Truck, 
  PartyPopper, 
  ChefHat, 
  MapPin, 
  Phone, 
  Facebook, 
  Instagram, 
  Twitter,
  Menu,
  X
} from 'lucide-react';
import logoImage from './logo.png';
import logoWhiteImage from './logo_white.png';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Locations & Contact', href: '#locations' },
  ];

  return (
    <div className="min-h-screen font-sans text-gray-800 selection:bg-brand-gold selection:text-white">
      {/* Navigation */}
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <img 
                src={isScrolled ? logoImage : logoWhiteImage} 
                alt="Jaya's Kitchen Logo" 
                className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  // Fallback if logo.png is not uploaded yet
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              {/* Fallback logo just in case logo.png isn't available */}
              <div className="hidden items-center gap-3" style={{ display: 'none' }}>
                <div className="w-10 h-10 rounded-sm bg-brand-red flex items-center justify-center text-white font-serif font-bold text-xl transition-transform border border-brand-gold/30">
                  JK
                </div>
                <span className={`font-serif text-2xl font-bold tracking-wide ${isScrolled ? 'text-brand-navy' : 'text-white drop-shadow-md'}`}>
                  Jaya's Kitchen
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`font-medium tracking-wide text-sm outline-none transition-colors hover:text-brand-gold focus:text-brand-gold ${
                    isScrolled ? 'text-brand-navy' : 'text-white drop-shadow-sm'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className={`md:hidden p-2 rounded-md ${isScrolled ? 'text-brand-navy' : 'text-white'}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <motion.div 
          className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={toggleMenu}
                className="block text-brand-navy font-medium text-lg border-b border-gray-100 pb-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
        {/* Background */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1920&q=80')` }}
        >
          {/* Overlay with brand colors */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/80 via-brand-navy/60 to-brand-red/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Authentic South Indian Cuisine in the UAE
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-2xl text-white/90 mb-10 font-light max-w-2xl mx-auto drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Celebrating tradition, flavor, and hospitality at every visit.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-xs sm:max-w-none mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#menu" 
              className="w-full sm:w-auto bg-brand-gold text-brand-navy uppercase tracking-widest text-xs font-bold py-4 px-10 transition-all hover:bg-white text-center"
            >
              View Menu
            </a>
            <a 
              href="#locations" 
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white uppercase tracking-widest text-xs font-bold py-4 px-10 transition-all hover:bg-white hover:text-brand-navy text-center"
            >
              Our Locations
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Decorative border */}
              <div className="absolute -inset-4 border border-brand-gold/40 z-0 hidden md:block"></div>
              <div className="aspect-[3/4] object-cover relative z-10 shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80" 
                  alt="Bustling restaurant interior" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-brand-gold font-sans font-bold tracking-[0.2em] uppercase text-xs mb-4">Our Story</h2>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-navy mb-8 leading-tight">
                Welcome to <br className="hidden sm:block" />
                <span className="italic">Jaya's Kitchen</span>
              </h3>
              <p className="text-gray-500 font-light text-base sm:text-lg leading-relaxed mb-12">
                Jaya's Group is a proudly established name in the UAE's dining landscape. With a strong foundation built on quality and consistency, we have grown into a trusted destination for customers seeking genuine taste. We take pride in blending authentic culinary traditions with modern service standards to bring you the warmth of South Indian hospitality.
              </p>

              {/* Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6">
                {[
                  { icon: Utensils, label: "Dine-in" },
                  { icon: Truck, label: "Home Delivery" },
                  { icon: PartyPopper, label: "Party Hall" },
                  { icon: ChefHat, label: "Outdoor Catering" }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-default">
                    <div className="w-12 h-12 border border-brand-navy/10 text-brand-navy flex items-center justify-center transition-colors duration-500 group-hover:border-brand-gold group-hover:text-brand-gold rounded-sm">
                      <feature.icon size={22} strokeWidth={1} />
                    </div>
                    <span className="font-sans font-medium text-brand-navy text-sm uppercase tracking-wide">{feature.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Section */}
      <section id="menu" className="py-24 md:py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-brand-gold font-sans font-bold tracking-[0.2em] uppercase text-xs mb-4">Menu Highlights</h2>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-navy mb-8">
              Culinary <span className="italic text-brand-red">Delights</span>
            </h3>
            <div className="w-12 h-px bg-brand-navy/30 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "South Indian Specials",
                image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80",
                desc: "Crispy dosas, fluffy idlis, and traditional thalis."
              },
              {
                title: "North Indian Classics",
                image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
                desc: "Rich gravies, aromatic biryanis, and fresh butter naan."
              },
              {
                title: "Charcoal & Tandoor",
                image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
                desc: "Sizzling kebabs and tikka straight from the clay oven."
              },
              {
                title: "Authentic Chinese",
                image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
                desc: "Indo-Chinese favorites tossed in fiery woks."
              },
              {
                title: "Fresh Juices & Snacks",
                image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80",
                desc: "Refreshing mocktails, faloodas, and spicy chaat."
              }
            ].map((category, index) => (
              <motion.div 
                key={index}
                className="group bg-white overflow-hidden hover:shadow-xl transition-all duration-700 hover:-translate-y-1 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent"></div>
                  <h4 className="absolute bottom-6 left-6 font-serif text-2xl text-white">
                    {category.title}
                  </h4>
                </div>
                <div className="p-8 border-x border-b border-gray-100">
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-6 line-clamp-2">{category.desc}</p>
                  <a href="#locations" className="inline-flex items-center gap-3 text-xs tracking-widest uppercase text-brand-navy font-medium group-hover:text-brand-gold transition-colors">
                    Taste It <span className="text-lg leading-none">&rarr;</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Divider Section */}
      <section 
        className="relative py-32 md:py-48 bg-fixed bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h2 
            className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            "A symphony of spices in every bite."
          </motion.h2>
          <motion.p 
            className="text-brand-gold text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] uppercase drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Taste the Authentic Indian Heritage
          </motion.p>
        </div>
      </section>

      {/* Contact & Locations Section */}
      <section id="locations" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -z-10 skew-x-12 transform origin-top-right"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-brand-gold font-sans font-bold tracking-[0.2em] uppercase text-xs mb-4">Find Us</h2>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-navy mb-8">
              Visit <span className="italic text-brand-red">Jaya's Kitchen</span>
            </h3>
            <p className="text-gray-500 font-light text-base sm:text-lg">We have 5 convenient locations across Dubai and Sharjah.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Al Karama",
                city: "Dubai",
                address: "Behind Al Karama Post Office",
                phone: "04 288 7566 / 054 298 8777"
              },
              {
                name: "Abu Shagara",
                city: "Sharjah",
                address: "Aws Bin Thabet Street",
                phone: "06 546 5318 / 054 277 9779"
              },
              {
                name: "Rolla",
                city: "Sharjah",
                address: "Opposite Rolla Park",
                phone: "054 277 9779"
              },
              {
                name: "Sharaf DG",
                city: "Bur Dubai",
                address: "Near Sharaf DG Metro Station",
                phone: "04 591 9291 / 050 776 4991"
              },
              {
                name: "Bu Tina",
                city: "Sharjah",
                address: "40th St, Opp. Zulekha Hospital",
                phone: "06 559 8336"
              }
            ].map((location, index) => (
              <motion.div 
                key={index}
                className="bg-white p-10 border border-gray-100 hover:border-brand-gold/50 shadow-sm hover:shadow-xl transition-all duration-500 group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-red transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
                
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h4 className="font-serif text-2xl text-brand-navy mb-2">{location.name}</h4>
                    <span className="inline-block text-brand-gold text-xs font-bold uppercase tracking-widest">{location.city}</span>
                  </div>
                </div>
                
                <div className="space-y-5 text-gray-500 font-light text-sm">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-brand-navy/40 mt-0.5 shrink-0" size={18} strokeWidth={1.5} />
                    <p>{location.address}</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-brand-navy/40 mt-0.5 shrink-0" size={18} strokeWidth={1.5} />
                    <p>{location.phone}</p>
                  </div>
                </div>
                
                <button className="mt-10 tracking-widest uppercase text-xs text-brand-navy font-bold hover:text-brand-gold transition-colors duration-300 flex items-center gap-3">
                  Get Directions <span className="text-lg leading-none">&rarr;</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-navy text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 md:gap-16 items-start text-center md:text-left mb-16">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start">
              <img 
                src={logoWhiteImage} 
                alt="Jaya's Kitchen Logo" 
                className="h-16 w-auto object-contain mb-6"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              {/* Fallback logo */}
              <div className="hidden flex-col items-center md:items-start w-full" style={{ display: 'none' }}>
                <div className="w-12 h-12 border border-brand-gold/30 rounded-sm flex items-center justify-center font-serif font-bold text-2xl mb-6 text-brand-gold">
                  JK
                </div>
                <h2 className="font-serif text-3xl mb-4">Jaya's Kitchen</h2>
              </div>
              <p className="text-gray-400 font-light text-sm max-w-xs leading-relaxed mt-2">
                Blending authentic South Indian culinary traditions with modern service standards in the UAE.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start text-sm text-gray-300 font-light">
              <h4 className="font-sans font-bold tracking-[0.2em] uppercase text-white text-xs mb-8">Quick Links</h4>
              <a href="#home" className="hover:text-brand-gold transition-colors py-2">Home</a>
              <a href="#about" className="hover:text-brand-gold transition-colors py-2">Our Story</a>
              <a href="#menu" className="hover:text-brand-gold transition-colors py-2">Menu Highlights</a>
              <a href="#locations" className="hover:text-brand-gold transition-colors py-2">Locations & Contact</a>
            </div>

            {/* Socials & Connect */}
            <div className="flex flex-col items-center md:items-start text-sm text-gray-300 font-light">
              <h4 className="font-sans font-bold tracking-[0.2em] uppercase text-white text-xs mb-8">Connect</h4>
              <p className="mb-6 max-w-xs">Join our community online for latest updates and offers.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors">
                  <Facebook size={18} strokeWidth={1} />
                </a>
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors">
                  <Instagram size={18} strokeWidth={1} />
                </a>
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors">
                  <Twitter size={18} strokeWidth={1} />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-xs text-brand-gold/50 tracking-widest uppercase font-bold flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Jaya's Kitchen. All rights reserved.</p>
            <p>Designed for excellence in the UAE.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

