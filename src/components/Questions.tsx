import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const Questions: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Who is this for?',
      answer:
        'Dental clinics in Chennai who want their recall appointments to run automatically, so your chairs stay full without your staff spending hours on manual phone calls.',
    },
    {
      question: 'What does it cost?',
      answer:
        'It depends on your business. You get a plan and a clear price for your clinic on the free audit call.',
    },
    {
      question: 'What do you set up?',
      answer:
        'The Check-Up Reminder Fix: a WhatsApp reminder that goes to each patient before their check-up is due, so nobody has to remember to dial and checkups stop slipping by months. You answer a few questions once and check it before it goes live, and the member does the rest.',
    },
    {
      question: 'How do you start?',
      answer:
        'Book a free audit call using the button on this page. We review your clinic recall process, walk through your numbers, and show you how the WhatsApp reminder runs.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="questions" className="py-20 sm:py-28 bg-[#F4F2EC] text-[#0F2A22] border-t border-[#0F2A22]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0F2A22]/70 mb-3 block">
            Questions
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F2A22] leading-tight text-balance">
            Frequently asked questions
          </h2>
        </div>

        {/* 4 Questions that open and close */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-[20px] bg-white border border-[#0F2A22]/10 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 font-heading text-lg sm:text-xl font-bold text-[#0F2A22] hover:text-[#0F2A22] focus:outline-hidden cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#0F2A22] text-[#C8F26B]' : 'bg-[#F4F2EC] text-[#0F2A22]'
                    }`}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={shouldReduceMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-[#0F2A22]/80 leading-relaxed border-t border-[#0F2A22]/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
