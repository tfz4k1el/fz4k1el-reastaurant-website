import React from 'react';
import { motion } from 'motion/react';

export default function Menu() {
  const dishes: { name: string; image: string | null }[] = [
    { name: "Kayal Kizhi", image: "/images/jk specials/Kayal Kizhi.png" },
    { name: "Mohabat Chicken", image: "/images/jk specials/mohabath chicken.png" },
    { name: "Kalyana Virunnu (6 Persons)", image: "/images/jk specials/kalyana virunnu(6person).png" },
    { name: "Pambaram Kozhi", image: "/images/jk specials/pambaram kozhi.png" },
    { name: "Pothin Kaalu", image: "/images/jk specials/pothin kaalu.png" },
    { name: "Charcoal Pollichathu", image: "/images/jk specials/charcoal pollichath.png" },
    { name: "Rowdy Beef", image: "/images/jk specials/rawdy beaf.png" },
    { name: "Attin Thala Curry / Pepper Fry", image: "/images/jk specials/aatin thalacurry papper fry.png" },
    { name: "Wayanadan Variyellu Roast", image: "/images/jk specials/wayanadan variyellu roast.png" },
    { name: "Porunna Kozhi", image: "/images/jk specials/porunna kozhi.png" },
    { name: "Deer Ghee Roast", image: "/images/jk specials/deer ghee roast.png" },
    { name: "Camel Ghee Roast", image: "/images/jk specials/camel ghee roast.png" },
    { name: "Rabbit Roast", image: "/images/jk specials/rabbit roast.png" },
    { name: "Kattu Pothu Varattiyathu", image: "/images/jk specials/katto pohu varattiyathu.png" },
    { name: "Johny Liver Fry", image: "/images/jk specials/johny liver fry.png" },
    { name: "Onion Grilled Chicken", image: "/images/jk specials/onion grilled chicken.png" },
    { name: "Grilled Chicken", image: null },
  ];

  return (
    <>
      <section className="pt-40 pb-20 bg-brand-navy dark:bg-black text-white text-center px-4">
        <h2 className="text-brand-gold font-poppins font-semibold tracking-[0.3em] uppercase text-xs mb-3">The JK Specials</h2>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Explore the Jaya's Kitchen specials</h1>
        <h2 className="text-lg sm:text-xl font-light text-brand-gold max-w-3xl mx-auto italic mb-8">Signature dishes that are not commonly found on regular Indian restaurant menus</h2>
        <p className="text-gray-300 font-light max-w-4xl mx-auto font-poppins">
          From Kayal Kizhi and Pambaram Kozhi to Deer Ghee Roast, Camel Ghee Roast, Rabbit Roast and more — every signature dish tells a story of bold Indian flavours.
        </p>
      </section>

      <section className="py-20 md:py-24 bg-gray-50/50 dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {dishes.map((dish, index) => (
              <motion.div
                key={dish.name}
                className="group relative aspect-[4/5] overflow-hidden bg-white dark:bg-neutral-900 border border-gray-100 dark:border-white/10 hover:border-brand-gold dark:hover:border-brand-gold shadow-sm hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (index % 4) * 0.08 }}
              >
                {dish.image ? (
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/80 to-brand-red dark:from-neutral-800 dark:via-neutral-900 dark:to-black flex items-center justify-center">
                    <span className="font-poppins text-xs tracking-[0.3em] uppercase text-brand-gold/80">Image coming soon</span>
                  </div>
                )}

                {/* Dark gradient overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/95"></div>

                {/* Gold accent bar on hover */}
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-brand-gold transition-all duration-500 group-hover:w-full"></div>

                {/* Name */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <h3 className="font-serif text-lg md:text-xl text-white leading-tight drop-shadow-lg">
                    {dish.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
