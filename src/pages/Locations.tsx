import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone } from 'lucide-react';

export default function Locations() {
  const locations = [
    {
      name: "Al Karama",
      city: "Dubai",
      address: "Behind Al Karama Post Office",
      phone: "04 288 7566 / 054 298 8777",
      map: "https://www.google.com/maps/search/?api=1&query=Jaya%27s+Kitchen+Al+Karama+Dubai"
    },
    {
      name: "Abu Shagara",
      city: "Sharjah",
      address: "Aws Bin Thabet Street",
      phone: "06 546 5318 / 054 277 9779",
      map: "https://www.google.com/maps/search/?api=1&query=Jaya%27s+Kitchen+Abu+Shagara+Sharjah"
    },
    {
      name: "Rolla",
      city: "Sharjah",
      address: "Opposite Rolla Park",
      phone: "054 277 9779",
      map: "https://www.google.com/maps/search/?api=1&query=Jaya%27s+Kitchen+Rolla+Sharjah"
    },
    {
      name: "Sharaf DG",
      city: "Bur Dubai",
      address: "Near Sharaf DG Metro Station",
      phone: "04 591 9291 / 050 776 4991",
      map: "https://www.google.com/maps/search/?api=1&query=Jaya%27s+Kitchen+Sharaf+DG+Bur+Dubai"
    },
    {
      name: "Bu Tina",
      city: "Sharjah",
      address: "40th St, Opp. Zulekha Hospital",
      phone: "06 559 8336",
      map: "https://www.google.com/maps/search/?api=1&query=Jaya%27s+Kitchen+Bu+Tina+Sharjah"
    }
  ];

  return (
    <>
      <section className="pt-40 pb-20 bg-brand-navy dark:bg-black text-white text-center px-4 relative overflow-hidden">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Find Your Nearest Jaya's Kitchen</h1>
        <h2 className="text-xl sm:text-2xl font-light text-brand-gold italic">Five branches across Sharjah and Dubai.</h2>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-neutral-900 p-10 border border-gray-100 dark:border-white/10 hover:border-brand-gold/50 dark:hover:border-brand-gold shadow-sm hover:shadow-xl transition-all duration-500 group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-red dark:bg-brand-gold transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>

                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h4 className="font-serif text-2xl text-brand-navy dark:text-white mb-2">{location.name}</h4>
                    <span className="inline-block text-brand-gold text-xs font-bold uppercase tracking-widest">{location.city}</span>
                  </div>
                </div>

                <div className="space-y-5 text-gray-500 dark:text-gray-300 font-light text-sm">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-brand-navy/40 dark:text-brand-gold/70 mt-0.5 shrink-0" size={18} strokeWidth={1.5} />
                    <p>{location.address}</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-brand-navy/40 dark:text-brand-gold/70 mt-0.5 shrink-0" size={18} strokeWidth={1.5} />
                    <p>{location.phone}</p>
                  </div>
                </div>

                <a
                  href={location.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 tracking-widest uppercase text-xs text-brand-navy dark:text-brand-gold font-bold hover:text-brand-gold dark:hover:text-white transition-colors duration-300 flex items-center gap-3"
                >
                  Get Directions <span className="text-lg leading-none">&rarr;</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
