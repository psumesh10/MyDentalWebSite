import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Check, Target, Zap, Tag } from 'lucide-react';
import { BOOKING_URL } from './TopBar';

export const FreeAuditCall: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const takeaways = [
    {
      num: '1',
      title: 'Where you lose patients today',
      description: 'We find the gaps in your check-up cycle where past patients drop off.',
      icon: Target,
    },
    {
      num: '2',
      title: 'What to automate first',
      description: 'You see how the WhatsApp reminder handles routine confirmations on autopilot.',
      icon: Zap,
    },
    {
      num: '3',
      title: 'A clear price for your business',
      description: 'You get a single fixed setup cost tailored to your clinic size and patient volume.',
      icon: Tag,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0F2A22] text-[#F4F2EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* One large panel headed "Get your AI growth plan in a free 1:1 call" */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="rounded-[28px] bg-[#071511] border border-[#183C31] p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle ambient light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C8F26B]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#C8F26B] mb-3 block">
              Free 1:1 consultation
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
              Get your AI growth plan in a free 1:1 call
            </h2>
            <p className="text-base sm:text-lg text-[#F4F2EC]/80 mt-4 leading-relaxed">
              We spend thirty minutes reviewing your recall routine and hand you a straightforward roadmap to keep your chairs booked.
            </p>
          </div>

          {/* The three things you leave with */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {takeaways.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[20px] bg-[#183C31]/70 border border-[#245344] p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-[14px] bg-[#C8F26B] text-[#0F2A22] flex items-center justify-center font-heading font-bold text-lg mb-5 shadow-xs">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#F4F2EC] tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#F4F2EC]/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* "Book a free audit call" button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#0F2A22] bg-[#C8F26B] hover:bg-[#d5f87b] active:scale-98 rounded-full transition-all duration-150 shadow-lg cursor-pointer text-center"
            >
              Book a free audit call
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
