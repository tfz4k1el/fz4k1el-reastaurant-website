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
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1920&q=80')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/80 via-brand-navy/60 to-brand-red/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Authentic South Indian flavours, smoky North Indian grills & bold Indo-Chinese cuisines
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-2xl text-white/90 mb-10 font-light max-w-2xl mx-auto drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Bringing together the best of India's flavours, across five locations in Sharjah and Dubai
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md sm:max-w-none mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              to="/menu"
              className="w-full sm:w-auto bg-brand-gold text-brand-navy uppercase tracking-widest text-xs font-bold py-4 px-8 transition-all hover:bg-white text-center"
            >
              View Menu
            </Link>
            <a 
              href="https://wa.me/971542779779" // Assuming standard WhatsApp number
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto bg-brand-red text-white uppercase tracking-widest text-xs font-bold py-4 px-8 transition-all hover:bg-brand-navy text-center"
            >
              Order Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <h2 className="text-brand-gold font-sans font-bold tracking-[0.2em] uppercase text-xs mb-4">Our Story</h2>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-navy mb-8">
            Soulful, high-quality Indian food served with passion and warmth.
          </h3>
          <p className="text-gray-500 font-light text-base sm:text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Jaya’s Kitchen brings authentic taste, warm hospitality, and familiar flavours to every dining experience.
          </p>
          <Link to="/about" className="inline-block bg-brand-navy text-white uppercase tracking-widest text-xs font-bold py-4 px-10 transition-all hover:bg-brand-red">
            Know More
          </Link>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-24 md:py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <h2 className="text-brand-gold font-sans font-bold tracking-[0.2em] uppercase text-xs mb-4">Menu</h2>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-navy mb-8">
            Something for Every Craving
          </h3>
          <p className="text-gray-500 font-light text-base sm:text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Whether you are in the mood for a Kerala-style meal, a North Indian curry, a smoky charcoal grill, a tandoor favourite, a quick snack, or a fresh juice, the menu at Jaya's Kitchen is built for every appetite.
          </p>
          <Link to="/menu" className="inline-block bg-brand-gold text-brand-navy uppercase tracking-widest text-xs font-bold py-4 px-10 transition-all hover:bg-brand-navy hover:text-white">
            View Menu
          </Link>
        </div>
      </section>

      {/* Specials Section */}
      <section 
        className="relative py-32 md:py-48 bg-scroll md:bg-fixed bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-brand-navy/90 md:bg-brand-navy/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-brand-gold font-bold tracking-[0.2em] uppercase text-xs mb-4">Unique Signature Dishes</h2>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight drop-shadow-lg">
            Jaya's Kitchen Specials - Authentic & Rare
          </h3>
          <p className="text-gray-300 font-light text-base sm:text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Experience rare Kerala flavors and slow-cooked regional spices. Our signature specials set us apart from standard Indian dining in Sharjah and Dubai.
          </p>
          <Link to="/menu" className="inline-block bg-white text-brand-navy border-2 border-white uppercase tracking-widest text-xs font-bold py-4 px-10 transition-all hover:bg-transparent hover:text-white">
            Signature Dishes Menu
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <h2 className="text-brand-gold font-sans font-bold tracking-[0.2em] uppercase text-xs mb-4">Our Services</h2>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-navy mb-8">
            Dine In, Celebrate, or Order. We've Got You Covered
          </h3>
          <p className="text-gray-500 font-light text-base sm:text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Jaya's Kitchen is more than a dine-in restaurant. Across its branches in Sharjah and Dubai, the brand supports everyday meals, family gatherings, live music evenings, buffet experiences, takeaway needs, home delivery, outdoor catering, and special party orders.
          </p>
          <Link to="/services" className="inline-block bg-brand-navy text-white uppercase tracking-widest text-xs font-bold py-4 px-10 transition-all hover:bg-brand-red">
            Services Offered
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-brand-gold font-sans font-bold tracking-[0.2em] uppercase text-xs mb-4">Testimonials</h2>
          <h3 className="font-serif text-3xl sm:text-4xl text-brand-navy mb-16">What Our Guests Say</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: "The best Indian food I've had in Sharjah. The Porunna Kozhi is a must try!", author: "Mohammed S.", rating: 5 },
              { text: "Amazing variety. We went for the weekend buffet and the live music created such a good vibe.", author: "Priya K.", rating: 5 },
              { text: "If you love authentic South Indian flavors, this is the place. Their home delivery is also always on time.", author: "Faiz A.", rating: 5 }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 shadow-sm border border-gray-100 rounded text-left">
                <div className="flex gap-1 mb-4 text-brand-gold">
                  {[...Array(review.rating)].map((_, idx) => <span key={idx}>★</span>)}
                </div>
                <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                <p className="font-bold text-sm tracking-wide text-brand-navy">- {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <h2 className="text-brand-gold font-sans font-bold tracking-[0.2em] uppercase text-xs mb-4">Locations</h2>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-navy mb-8">
            Find Your Nearest Jaya’s Kitchen
          </h3>
          <p className="text-gray-500 font-light text-base sm:text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
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
