import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <section className="pt-40 pb-20 bg-brand-navy text-white text-center px-4">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">About Jaya's Kitchen</h1>
        <h2 className="text-xl sm:text-2xl font-light text-brand-gold italic">Proudly established in the UAE. Rooted in Indian tradition.</h2>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-gray-600 font-light leading-relaxed">
            <p className="mb-8">
              Jaya's Kitchen is part of Jaya's Group, a homegrown Indian restaurant brand built on authentic cooking, consistent quality, and warm hospitality. What started as a passion for real Indian flavours has grown into five branches across Sharjah and Dubai, serving guests who come for comfort, variety, and familiar taste.
            </p>
            <p className="mb-16">
              Every branch is designed to feel welcoming for families, working professionals, food enthusiasts, and groups looking for a reliable Indian restaurant experience in the UAE.
            </p>

            <h2 className="text-3xl font-serif text-brand-navy mb-6">Our Story</h2>
            <p className="mb-16">
              The story of Jaya's Kitchen is built around one simple idea: good Indian food should feel familiar, flavourful, and dependable. From South Indian favourites to North Indian classics, Indo-Chinese dishes, charcoal grills, tandoor specialities, juices, and snacks, the menu brings together the tastes customers search for most in the UAE.
            </p>

            <h2 className="text-3xl font-serif text-brand-navy mb-6">Vision</h2>
            <p className="mb-16">
              Our vision is to position the brand as one of the leading Indian restaurant chains in the UAE, recognised for excellence, authenticity, and trust.
            </p>

            <h2 className="text-3xl font-serif text-brand-navy mb-6">Trained with Care, Served with Consistency</h2>
            <p className="mb-16">
              Behind every branch is a focus on training, hygiene, food safety, hospitality, and consistent service standards. Structured staff training helps ensure that customers experience the same care and quality across each Jaya's Kitchen location.
            </p>

            <h2 className="text-3xl font-serif text-brand-navy mb-6">What Makes Jaya’s Kitchen Different</h2>
            <ul className="list-disc pl-6 mb-16 space-y-3">
              <li>Five branches across Sharjah and Dubai</li>
              <li>A wide Indian menu covering South Indian, North Indian, Indo-Chinese, Charcoal, Tandoor, Juices, Snacks, and Jaya’s Specials</li>
              <li>Signature dishes that are not commonly found on regular Indian restaurant menus</li>
              <li>Live music, buffet, party hall, takeaway, home delivery, catering, and special party orders</li>
              <li>A family-friendly dining experience built on authenticity and trust</li>
            </ul>

            <div className="text-center pt-10 border-t border-gray-200">
              <h2 className="text-3xl font-serif text-brand-navy mb-8">Ready to experience Jaya's Kitchen?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/menu" className="w-full sm:w-auto bg-brand-navy text-white uppercase tracking-widest text-xs font-bold py-4 px-8 transition-all hover:bg-brand-red text-center">
                  Explore Our Menu
                </Link>
                <Link to="/locations" className="w-full sm:w-auto bg-transparent border-2 border-brand-navy text-brand-navy uppercase tracking-widest text-xs font-bold py-4 px-8 transition-all hover:bg-brand-navy hover:text-white text-center">
                  Find a Branch Near You
                </Link>
                <a href="https://wa.me/971542779779" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-gold text-brand-navy uppercase tracking-widest text-xs font-bold py-4 px-8 transition-all hover:bg-brand-navy hover:text-white text-center">
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
