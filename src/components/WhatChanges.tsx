import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MessageSquareText, CalendarClock, ShieldCheck } from 'lucide-react';

export const WhatChanges: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const cards = [
    {
      problem: 'Your recall list slips by months because nobody has time to dial every day',
      change:
        'Each patient gets a friendly reminder directly on WhatsApp before their check-up is due. They reply with their preferred time, your appointment schedule fills up on its own, and your front desk never spends another afternoon chasing missed appointments.',
      icon: MessageSquareText,
      tag: 'The Check-Up Reminder Fix',
    },
  ];

  return (
    <section id="what-changes" className="py-20 sm:py-28 bg-[#F4F2EC] text-[#0F2A22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0F2A22]/70 mb-3 block">
            What changes for you
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F2A22] leading-tight text-balance">
            Stop losing recurring dental visits to forgotten dates
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                transition={{ duration: 0.35 }}
                className="rounded-[24px] bg-white border border-[#0F2A22]/10 p-8 sm:p-12 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6 sm:gap-8">
                  {/* Big icon in a rounded highlight tile */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[20px] bg-[#C8F26B] flex items-center justify-center shrink-0 shadow-xs">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#0F2A22]" />
                  </div>

                  <div className="flex-1">
                    <div className="text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/60 mb-2">
                      {card.tag}
                    </div>
                    {/* Card heading that names the problem, starting with "You" or "Your" */}
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0F2A22] tracking-tight mb-4 leading-snug">
                      {card.problem}
                    </h3>
                    {/* What changes for you */}
                    <p className="text-base sm:text-lg text-[#0F2A22]/80 leading-relaxed max-w-3xl">
                      {card.change}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
