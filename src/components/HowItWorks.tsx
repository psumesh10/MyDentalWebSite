import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { CalendarCheck, FileText, Smartphone } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 75%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const steps = [
    {
      num: '01',
      title: 'Book your free audit call',
      text: 'Pick a 30-minute slot that fits your day. We look at your current patient recall routine and see where appointments slip through.',
      icon: CalendarCheck,
    },
    {
      num: '02',
      title: 'Get your plan',
      text: 'You answer a few simple questions once. We map out your custom reminder timing, write the message templates, and calculate your numbers.',
      icon: FileText,
    },
    {
      num: '03',
      title: 'We set it up on your WhatsApp',
      text: 'You review the reminder messages and approve them before anything goes live. We activate the system, and your check-up visits run on autopilot.',
      icon: Smartphone,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#F4F2EC] text-[#0F2A22] border-t border-[#0F2A22]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0F2A22]/70 mb-3 block">
            How it works
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F2A22] leading-tight text-balance">
            Three simple steps to automate your clinic check-ups
          </h2>
        </div>

        {/* Steps Container */}
        <div ref={containerRef} className="relative">
          
          {/* Desktop horizontal joining highlight line */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-1 bg-[#0F2A22]/15">
            <motion.div
              style={{ width: shouldReduceMotion ? '100%' : lineHeight }}
              className="h-full bg-[#0F2A22]"
            />
          </div>

          {/* Mobile vertical joining highlight line */}
          <div className="lg:hidden absolute top-10 bottom-10 left-8 w-1 bg-[#0F2A22]/15">
            <motion.div
              style={{ height: shouldReduceMotion ? '100%' : lineHeight }}
              className="w-full bg-[#0F2A22]"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative flex flex-row lg:flex-col items-start gap-6 lg:gap-6 rounded-[24px] bg-white border border-[#0F2A22]/10 p-6 sm:p-8 shadow-xs"
                >
                  {/* Step Icon Badge */}
                  <div className="w-16 h-16 rounded-[20px] bg-[#C8F26B] flex items-center justify-center shrink-0 z-10 shadow-xs">
                    <Icon className="w-7 h-7 text-[#0F2A22]" />
                  </div>

                  <div className="flex-1">
                    <div className="text-xs font-bold font-heading text-[#0F2A22]/50 tracking-wider mb-1">
                      STEP {step.num}
                    </div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0F2A22] tracking-tight mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#0F2A22]/80 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
