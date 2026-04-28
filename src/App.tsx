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
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
                JK
              </div>
              <span className={`font-serif text-2xl font-bold tracking-tight ${isScrolled ? 'text-brand-navy' : 'text-white drop-shadow-md'}`}>
                Jaya's Kitchen
              </span>
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
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1920&q=80" 
            alt="Delicious South Indian Food Spread" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Overlay with brand colors */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/80 via-brand-navy/60 to-brand-red/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Authentic South Indian Cuisine in the UAE
          </motion.h1>
          <motion.p 
            className="text-lg md:text-2xl text-white/90 mb-10 font-light max-w-2xl mx-auto drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Celebrating tradition, flavor, and hospitality at every visit.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#menu" 
              className="bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
            >
              View Our Menu
            </a>
            <a 
              href="#locations" 
              className="bg-brand-red hover:bg-brand-red-dark text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-brand-red text-center"
            >
              Find a Branch
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] object-cover rounded-3xl overflow-hidden shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80" 
                  alt="Bustling restaurant interior" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border-4 border-white/20 rounded-3xl m-4 pointer-events-none"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-brand-gold rounded-full -z-10 blur-3xl opacity-30"></div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-2">Our Story</h2>
              <h3 className="font-serif text-4xl md:text-5xl text-brand-navy font-bold mb-6 leading-tight">
                Welcome to <br />
                <span className="text-brand-red">Jaya's Kitchen</span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Jaya's Group is a proudly established name in the UAE's dining landscape. With a strong foundation built on quality and consistency, we have grown into a trusted destination for customers seeking genuine taste. We take pride in blending authentic culinary traditions with modern service standards to bring you the warmth of South Indian hospitality.
              </p>

              {/* Badges */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Utensils, label: "Dine-in" },
                  { icon: Truck, label: "Home Delivery" },
                  { icon: PartyPopper, label: "Party Hall" },
                  { icon: ChefHat, label: "Outdoor Catering" }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-brand-navy/5 text-brand-red flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                      <feature.icon size={24} />
                    </div>
                    <span className="font-medium text-brand-navy">{feature.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Section */}
      <section id="menu" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-red font-bold tracking-wider uppercase text-sm mb-2">Menu Highlights</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-brand-navy font-bold mb-4">
              Explore Our Culinary Delights
            </h3>
            <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
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
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h4 className="absolute bottom-4 left-6 font-serif text-2xl font-bold text-white tracking-wide">
                    {category.title}
                  </h4>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 line-clamp-2">{category.desc}</p>
                  <a href="#locations" className="inline-flex items-center gap-2 mt-4 text-brand-red font-medium group-hover:text-brand-navy transition-colors">
                    Taste It <span className="text-xl leading-none">&rarr;</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Locations Section */}
      <section id="locations" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-navy/5 -z-10 skew-x-12 transform origin-top-right"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-red font-bold tracking-wider uppercase text-sm mb-2">Find Us</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-brand-navy font-bold mb-4">
              Visit Jaya's Kitchen
            </h3>
            <p className="text-gray-500 text-lg">We have 5 convenient locations across Dubai and Sharjah.</p>
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
                className="bg-white p-8 rounded-2xl shadow-sm border border-brand-navy/10 hover:border-brand-gold hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="font-serif text-2xl font-bold text-brand-navy mb-1 group-hover:text-brand-red transition-colors">{location.name}</h4>
                    <span className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold text-xs font-bold rounded-full uppercase tracking-wider">{location.city}</span>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-brand-red mt-1 shrink-0" size={20} />
                    <p>{location.address}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="text-brand-red mt-1 shrink-0" size={20} />
                    <p>{location.phone}</p>
                  </div>
                </div>
                
                <button className="mt-8 w-full py-3 rounded-xl border border-brand-navy/20 text-brand-navy font-semibold hover:bg-brand-navy hover:text-white transition-colors duration-300 flex justify-center items-center gap-2">
                  <MapPin size={18} /> Get Directions
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-navy text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 items-center text-center md:text-left mb-12 border-b border-white/10 pb-12">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start opacity-90">
              <div className="w-16 h-16 rounded-full bg-brand-red flex items-center justify-center font-serif font-bold text-3xl mb-4 text-white">
                JK
              </div>
              <h2 className="font-serif text-3xl font-bold mb-2">Jaya's Kitchen</h2>
              <p className="text-gray-400 font-light max-w-xs text-sm">
                Blending authentic South Indian culinary traditions with modern service standards in the UAE.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start text-sm text-gray-300">
              <h4 className="font-serif text-white text-xl mb-4">Quick Links</h4>
              <a href="#home" className="hover:text-brand-gold transition-colors py-1">Home</a>
              <a href="#about" className="hover:text-brand-gold transition-colors py-1">Our Story</a>
              <a href="#menu" className="hover:text-brand-gold transition-colors py-1">Menu Highlights</a>
              <a href="#locations" className="hover:text-brand-gold transition-colors py-1">Locations & Contact</a>
            </div>

            {/* Socials & Connect */}
            <div className="flex flex-col items-center md:items-start text-sm text-gray-300">
              <h4 className="font-serif text-white text-xl mb-4">Follow Us</h4>
              <p className="max-w-xs mb-4">Join our community online for latest updates and offers.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500 font-light flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Jaya's Kitchen. All rights reserved.</p>
            <p>Designed for excellence based in the UAE.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

