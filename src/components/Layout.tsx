import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Facebook, Instagram, Youtube, Sun, Moon } from 'lucide-react';
import { logoBase64, logoWhiteBase64 } from '../logos';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change & scroll to top
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'JK Specials', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Locations', href: '/locations' },
  ];

  const isHome = location.pathname === '/';
  // On non-home pages we probably want a solid header, but let's just make it slightly transparent or solid 
  // if not scrolled, since we don't have a hero background covering the very top in other pages. Let's make all pages have a hero, or we fix the header design.
  // Actually, we'll give each page a nice top padding. So header is always over text? No, header is fixed.
  const isSolidHeader = isScrolled || !isHome;
  const headerClass = isSolidHeader
    ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-white/10 py-4'
    : 'bg-transparent py-6';

  // On a solid header, logo + text follow the theme. On the transparent hero header, they stay white.
  const useLightSurface = isSolidHeader && theme === 'light';
  const logoSrc = useLightSurface ? logoBase64 : logoWhiteBase64;
  const linkTextClass = useLightSurface ? 'text-brand-navy' : 'text-white drop-shadow-sm';
  const menuIconClass = useLightSurface ? 'text-brand-navy' : 'text-white';

  return (
    <div className="min-h-screen font-sans text-gray-800 dark:text-gray-200 selection:bg-brand-gold selection:text-white flex flex-col">
      <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${headerClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={logoSrc} 
                alt="Jaya's Kitchen Logo" 
                className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-medium tracking-wide text-sm outline-none transition-colors hover:text-brand-gold focus:text-brand-gold ${linkTextClass}`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className={`p-2 rounded-full transition-colors hover:text-brand-gold ${linkTextClass}`}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </nav>

            <div className="md:hidden flex items-center gap-1">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className={`p-2 rounded-full ${menuIconClass}`}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                className={`p-2 rounded-md ${menuIconClass}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden bg-white dark:bg-black shadow-xl absolute top-full left-0 w-full overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block text-brand-navy dark:text-white font-medium text-lg border-b border-gray-100 dark:border-white/10 pb-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="relative text-white pt-24 pb-12 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/images/footer-bg.jpeg')` }}>
        <div className="absolute inset-0 bg-brand-navy/85 dark:bg-black/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 md:gap-16 items-start text-center md:text-left mb-16">
            <div className="flex flex-col items-center md:items-start">
              <img 
                src={logoWhiteBase64} 
                alt="Jaya's Kitchen Logo" 
                className="h-16 w-auto object-contain mb-6"
              />
              <p className="text-gray-400 font-light text-sm max-w-xs leading-relaxed mt-2">
                Authentic South Indian, smoky North Indian grills and bold Indo-Chinese flavours, served from the soul across five locations in Sharjah and Dubai.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start text-sm text-gray-300 font-light">
              <h4 className="font-sans font-bold tracking-[0.2em] uppercase text-white text-xs mb-8">Quick Links</h4>
              {navLinks.map(link => (
                <Link key={link.name} to={link.href} className="hover:text-brand-gold transition-colors py-2">{link.name}</Link>
              ))}
            </div>

            <div className="flex flex-col items-center md:items-start text-sm text-gray-300 font-light">
              <h4 className="font-sans font-bold tracking-[0.2em] uppercase text-white text-xs mb-8">Connect</h4>
              <p className="mb-6 max-w-xs">Join our community online for latest updates and offers.</p>
              <div className="flex gap-4">
                <a href="https://facebook.com/jayaskitchenuae" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors"><Facebook size={18} strokeWidth={1} /></a>
                <a href="https://instagram.com/jayaskitchenuae" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors"><Instagram size={18} strokeWidth={1} /></a>
                <a href="https://www.youtube.com/channel/UCbYugNyZk_kQwVbVQHA2DhA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors"><Youtube size={18} strokeWidth={1} /></a>
                <a href="https://www.tiktok.com/@jayaskitchenuae" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.73a4.85 4.85 0 0 1-1.01-.04z"/></svg>
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
