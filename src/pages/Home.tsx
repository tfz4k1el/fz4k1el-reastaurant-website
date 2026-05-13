import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
          style={{ backgroundImage: `url('/images/hero-bg.jpeg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/80 via-brand-navy/60 to-brand-red/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.h1
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-xl max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Authentic South Indian flavours, smoky North Indian grills & bold Indo-Chinese cuisines
          </motion.h1>
          <motion.p 
            className="text-sm sm:text-base md:text-lg text-white/90 mb-10 font-light max-w-3xl mx-auto drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Bringing together the best of India's flavours, across five locations in Sharjah and Dubai
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-14 md:py-20 bg-white dark:bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <h2 className="text-brand-gold font-poppins font-semibold tracking-[0.3em] uppercase text-xs mb-3">Our Story</h2>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-navy dark:text-white mb-6 after:content-[''] after:block after:w-16 after:h-[3px] after:bg-brand-gold after:mt-5 after:mx-auto">
            Soulful, high-quality Indian food served with passion and warmth.
          </h3>
          <p className="text-gray-500 dark:text-gray-400 font-poppins font-light text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Jaya’s Kitchen brings authentic taste, warm hospitality, and familiar flavours to every dining experience.
          </p>
          <Link to="/about" className="inline-block bg-brand-navy dark:bg-brand-gold dark:text-black text-white uppercase tracking-widest text-xs font-bold py-4 px-10 transition-all hover:bg-brand-red dark:hover:bg-white">
            Know More
          </Link>
        </div>
      </section>

      {/* Specials Section */}
      <section 
        className="relative py-20 md:py-28 bg-scroll md:bg-fixed bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-brand-navy/90 md:bg-brand-navy/80 dark:bg-black/90 dark:md:bg-black/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40 dark:bg-black/50"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-brand-gold font-poppins font-semibold tracking-[0.3em] uppercase text-xs mb-3">Unique Signature Dishes</h2>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight drop-shadow-lg after:content-[''] after:block after:w-16 after:h-[3px] after:bg-brand-gold after:mt-5 after:mx-auto">
            Jaya's Kitchen Specials - Authentic & Rare
          </h3>
          <p className="text-gray-300 font-poppins font-light text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Experience rare Kerala flavors and slow-cooked regional spices. Our signature specials set us apart from standard Indian dining in Sharjah and Dubai.
          </p>
          <Link to="/menu" className="inline-block bg-white text-brand-navy border-2 border-white uppercase tracking-widest text-xs font-bold py-4 px-10 transition-all hover:bg-transparent hover:text-white">
            Signature Dishes Menu
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-14 md:py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <h2 className="text-brand-gold font-poppins font-semibold tracking-[0.3em] uppercase text-xs mb-3">Our Services</h2>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-navy dark:text-white mb-6 after:content-[''] after:block after:w-16 after:h-[3px] after:bg-brand-gold after:mt-5 after:mx-auto">
            Dine In, Celebrate, or Order. We've Got You Covered
          </h3>
          <p className="text-gray-500 dark:text-gray-400 font-poppins font-light text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Jaya's Kitchen is more than a dine-in restaurant. Across its branches in Sharjah and Dubai, the brand supports everyday meals, family gatherings, live music evenings, buffet experiences, takeaway needs, home delivery, outdoor catering, and special party orders.
          </p>
          <Link to="/services" className="inline-block bg-brand-navy dark:bg-brand-gold dark:text-black text-white uppercase tracking-widest text-xs font-bold py-4 px-10 transition-all hover:bg-brand-red dark:hover:bg-white">
            Services Offered
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 md:py-20 bg-gray-50 dark:bg-neutral-950 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-brand-gold font-poppins font-semibold tracking-[0.3em] uppercase text-xs mb-3">Testimonials</h2>
          <h3 className="font-serif text-3xl sm:text-4xl text-brand-navy dark:text-white mb-10 after:content-[''] after:block after:w-16 after:h-[3px] after:bg-brand-gold after:mt-5 after:mx-auto">What Our Guests Say</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: "The best Indian food I've had in Sharjah. The Porunna Kozhi is a must try!", author: "Mohammed S.", rating: 5 },
              { text: "Amazing variety. We went for the weekend buffet and the live music created such a good vibe.", author: "Priya K.", rating: 5 },
              { text: "If you love authentic South Indian flavors, this is the place. Their home delivery is also always on time.", author: "Faiz A.", rating: 5 }
            ].map((review, i) => (
              <div key={i} className="bg-white dark:bg-neutral-900 p-8 shadow-sm border border-gray-100 dark:border-white/10 rounded text-left">
                <div className="flex gap-1 mb-4 text-brand-gold">
                  {[...Array(review.rating)].map((_, idx) => <span key={idx}>★</span>)}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-6">"{review.text}"</p>
                <p className="font-bold text-sm tracking-wide text-brand-navy dark:text-brand-gold">- {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-14 md:py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <h2 className="text-brand-gold font-poppins font-semibold tracking-[0.3em] uppercase text-xs mb-3">Locations</h2>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-navy dark:text-white mb-6 after:content-[''] after:block after:w-16 after:h-[3px] after:bg-brand-gold after:mt-5 after:mx-auto">
            Find Your Nearest Jaya’s Kitchen
          </h3>
          <p className="text-gray-500 dark:text-gray-400 font-poppins font-light text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            With five branches across Sharjah and Dubai, Jaya's Kitchen makes it easy to dine in, collect takeaway, order delivery, or plan a family meal near you.
          </p>
          <Link to="/locations" className="inline-block bg-brand-gold text-brand-navy uppercase tracking-widest text-xs font-bold py-4 px-10 transition-all hover:bg-brand-navy hover:text-white">
            Get Directions
          </Link>
        </div>
      </section>
    </>
  );
}
