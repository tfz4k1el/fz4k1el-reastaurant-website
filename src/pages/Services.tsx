import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: "Dine-In - A Welcoming Space for Every Occasion",
      desc: "Ideal for family meals, casual dining, office lunches, and relaxed Indian food experiences.",
      btnText: "Find a Branch",
      btnLink: "/locations",
      isAnchor: false
    },
    {
      title: "Live Music Evenings",
      desc: "A strong experience-led differentiator for guests who want food, atmosphere, and entertainment together.",
      btnText: "Reserve/Enquire on WhatsApp",
      btnLink: "https://wa.me/971542779779",
      isAnchor: true
    },
    {
      title: "Buffet - Ideal for Groups and Family Gatherings",
      desc: "Designed for families, office groups, and celebration meals looking for variety and convenience.",
      btnText: "Book the Buffet",
      btnLink: "https://wa.me/971542779779",
      isAnchor: true
    },
    {
      title: "Party Hall for Birthdays and Special Celebrations",
      desc: "A dedicated venue option for birthdays, family occasions and gatherings and private celebrations.",
      btnText: "Book a Party Hall",
      btnLink: "https://wa.me/971542779779",
      isAnchor: true
    },
    {
      title: "Takeaway Counter - Quick Meals on Your Schedule",
      desc: "Useful for working professionals and regular customers who want fast Indian meals without waiting for dine-in.",
      btnText: "Order Takeaway",
      btnLink: "https://wa.me/971542779779",
      isAnchor: true
    },
    {
      title: "Home Delivery Across Sharjah and Dubai",
      desc: "A clear delivery pathway for customers searching for Indian food near them.",
      btnText: "Order for Delivery",
      btnLink: "https://wa.me/971542779779",
      isAnchor: true
    },
    {
      title: "Outdoor Catering and Special Party Orders",
      desc: "For events, office gatherings, community functions, and customised food requirements.",
      btnText: "Enquire About Catering",
      btnLink: "https://wa.me/971542779779",
      isAnchor: true
    }
  ];

  return (
    <>
      <section className="pt-40 pb-20 bg-brand-navy dark:bg-black text-white text-center px-4">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">Dine In, Celebrate, Order or Cater with Jaya’s Kitchen</h1>
        <p className="text-lg sm:text-xl font-light text-gray-300 max-w-3xl mx-auto">
          Jaya's Kitchen supports more than regular restaurant dining. Whether customers want a quick takeaway, a family buffet, a party hall, live music, home delivery, outdoor catering, or a special party order, we have you covered.
        </p>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-neutral-950 text-center px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white dark:bg-neutral-900 p-10 shadow-sm border border-gray-100 dark:border-white/10 flex flex-col justify-between items-center h-full">
              <div>
                <h3 className="font-serif text-2xl text-brand-navy dark:text-white mb-4">{s.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 font-light mb-8">{s.desc}</p>
              </div>
              {s.isAnchor ? (
                <a href={s.btnLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-gold text-brand-navy uppercase tracking-widest text-xs font-bold py-3 px-6 transition-all hover:bg-brand-navy hover:text-white dark:hover:bg-white dark:hover:text-black mt-auto">
                  {s.btnText}
                </a>
              ) : (
                <Link to={s.btnLink} className="w-full sm:w-auto bg-brand-gold text-brand-navy uppercase tracking-widest text-xs font-bold py-3 px-6 transition-all hover:bg-brand-navy hover:text-white dark:hover:bg-white dark:hover:text-black mt-auto">
                  {s.btnText}
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
