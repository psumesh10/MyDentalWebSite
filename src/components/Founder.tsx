import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { LogoMark } from './Logo';
import { BOOKING_URL } from './TopBar';

export const Founder: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 sm:py-28 bg-[#F4F2EC] text-[#0F2A22] border-t border-[#0F2A22]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-[24px] bg-white border border-[#0F2A22]/10 p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Logo mark, large, in a 4:5 rounded tile of the highlight colour */}
            <div className="md:col-span-5 lg:col-span-4 flex justify-center">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-[260px] aspect-[4/5] rounded-[24px] bg-[#C8F26B] border border-[#0F2A22]/10 flex flex-col items-center justify-center p-8 shadow-sm"
              >
                <LogoMark size={96} className="text-[#0F2A22] drop-shadow-xs" />
                <span className="font-heading font-bold text-lg text-[#0F2A22] mt-4 tracking-tight">
                  DentSync
                </span>
              </motion.div>
            </div>

            {/* Founder details */}
            <div className="md:col-span-7 lg:col-span-8 flex flex-col items-start">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#0F2A22]/60 mb-2 block">
                Founder
              </span>
              
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F2A22] tracking-tight mb-1">
                Sumesh P
              </h2>
              
              <div className="text-base font-medium text-[#0F2A22]/70 mb-6">
                Founder, DentSync
              </div>

              {/* About me (one plain line about who we help) */}
              <p className="text-base sm:text-lg text-[#0F2A22]/85 leading-relaxed max-w-2xl mb-8">
                We help dental clinics in Chennai automate patient check-up reminders so your chairs stay full without manual phone calls.
              </p>

              {/* "Book a free call with Sumesh" button */}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-[#0F2A22] bg-[#C8F26B] hover:bg-[#d4f77c] active:scale-98 rounded-full transition-all duration-150 shadow-sm cursor-pointer"
              >
                Book a free call with Sumesh
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
