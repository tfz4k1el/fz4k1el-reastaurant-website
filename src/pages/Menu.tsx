import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Menu() {
  const categories = [
    {
      title: "Jaya’s Specials",
      desc: "From Kayal Kizhi and Pambaram Kozhi to Deer Ghee Roast, Camel Ghee Roast, Rabbit Roast, Pothin Kaalu, and Attin Thala Curry, every signature dish tells a story of bold Indian flavours.",
      image: "https://images.unsplash.com/photo-1599487405270-86430afbedf8?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "South Indian Specials",
      desc: "Crispy dosas, fluffy appams, Kerala Parota, and fragrant rice dishes, the comfort food of the South, cooked the way it was meant to be.",
      image: "https://images.unsplash.com/photo-1610147323479-a7fb11faa5dd?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "North Indian Classics",
      desc: "Rich gravies, creamy butter chicken, aromatic biryanis and hearty dal. Bold flavours from the heart of India.",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Indo-Chinese Favourites",
      desc: "Wok-tossed noodles, fried rice and saucy stir-fries. Indo-Chinese flavours with an unmistakable Indian kick.",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Charcoal Grills",
      desc: "Slow-cooked charcoal grills with deep smoky flavour, ideal for seafood, chicken and meat lovers.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Tandoor Specialities",
      desc: "Sizzling kebabs, smoky tikkas, and freshly baked breads straight from the clay oven.",
      image: "https://images.unsplash.com/photo-1599487405270-86430afbedf8?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Fresh Juices",
      desc: "Freshly prepared juices, faloodas, and cooling mocktails.",
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Snacks & Chaats",
      desc: "Street-style chaats, crispy snacks, light bites and evening favourites.",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b52c67ad5?auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <>
      <section className="pt-40 pb-20 bg-brand-navy dark:bg-black text-white text-center px-4">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Explore the Jaya's Kitchen specials</h1>
        <h2 className="text-lg sm:text-xl font-light text-brand-gold max-w-3xl mx-auto italic mb-8">From Soulful South Indian favourites to rich North Indian classics and bold Indo-Chinese flavours</h2>
        <p className="text-gray-300 font-light max-w-4xl mx-auto">
          The Jaya's Kitchen menu is designed for every kind of Indian food craving. From quick breakfasts and weekday lunches to family dinners, group meals, and rare regional specials, each category helps customers find exactly what they want faster.
        </p>
      </section>

      <section className="py-24 bg-gray-50/50 dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-gold font-poppins font-semibold tracking-[0.3em] uppercase text-xs mb-4">Menu Highlights</h2>
            <div className="w-12 h-px bg-brand-navy/30 dark:bg-brand-gold/40 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="group bg-white dark:bg-neutral-900 dark:border dark:border-white/10 overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-brand-gold/10 transition-all duration-700 flex flex-col md:flex-row relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-navy/20 dark:bg-black/40"></div>
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-100 dark:border-white/10">
                  <h3 className="font-serif text-2xl text-brand-navy dark:text-white mb-4">
                    {category.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 font-light text-sm leading-relaxed mb-6">{category.desc}</p>
                  <Link to="/locations" className="inline-flex items-center gap-3 text-xs tracking-widest uppercase text-brand-navy dark:text-brand-gold font-bold group-hover:text-brand-gold dark:group-hover:text-white transition-colors mt-auto">
                    Find Nearest Branch <span className="text-lg leading-none">&rarr;</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
