import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';
import { Calendar, Check, Send, CheckCheck, Sparkles, ArrowRight } from 'lucide-react';
import { BOOKING_URL } from './TopBar';

interface ChatMessage {
  id: string;
  sender: 'clinic' | 'patient';
  text: string;
  time: string;
}

const CONVERSATION: ChatMessage[] = [
  {
    id: 'm1',
    sender: 'clinic',
    text: 'Hello Priya, your 6-month cleaning with Dr. Arvind is due next week. Would you like to reserve Thursday at 4 PM or Saturday at 11 AM?',
    time: '10:14 AM',
  },
  {
    id: 'm2',
    sender: 'patient',
    text: 'Saturday at 11 AM works best for me.',
    time: '10:16 AM',
  },
  {
    id: 'm3',
    sender: 'clinic',
    text: 'Your check-up is confirmed for Saturday at 11:00 AM at DentSync Clinic. We look forward to seeing you!',
    time: '10:16 AM',
  },
  {
    id: 'm4',
    sender: 'patient',
    text: 'Thank you!',
    time: '10:17 AM',
  },
];

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<'reminder'>('reminder');
  const [visibleMessagesCount, setVisibleMessagesCount] = useState<number>(shouldReduceMotion ? CONVERSATION.length : 1);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [userInteracted, setUserInteracted] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Chat message animation playback
  useEffect(() => {
    if (shouldReduceMotion) {
      setVisibleMessagesCount(CONVERSATION.length);
      setIsTyping(false);
      return;
    }

    let currentStep = 1;
    setVisibleMessagesCount(1);
    setIsTyping(false);

    const playStep = () => {
      if (currentStep < CONVERSATION.length) {
        setIsTyping(true);
        timerRef.current = setTimeout(() => {
          setIsTyping(false);
          currentStep += 1;
          setVisibleMessagesCount(currentStep);
          timerRef.current = setTimeout(playStep, 2600);
        }, 1200);
      } else {
        // Pause then loop if user hasn't clicked
        timerRef.current = setTimeout(() => {
          currentStep = 1;
          setVisibleMessagesCount(1);
          timerRef.current = setTimeout(playStep, 2000);
        }, 6000);
      }
    };

    timerRef.current = setTimeout(playStep, 2200);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [shouldReduceMotion, userInteracted]);

  const handleTabClick = (tab: 'reminder') => {
    setActiveTab(tab);
    setUserInteracted(true);
    setVisibleMessagesCount(CONVERSATION.length);
    setIsTyping(false);
  };

  // Headline words for staggered reveal
  const headlineWords = "Your patients forget their check-ups and your dental chairs sit empty.".split(" ");

  return (
    <section className="relative overflow-hidden bg-[#0F2A22] text-[#F4F2EC] pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Drifting highlight glow behind hero */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#C8F26B]/15 blur-3xl pointer-events-none"
          animate={{
            x: [0, 60, 20, 0],
            y: [0, 40, 80, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-[#C8F26B]/10 blur-3xl pointer-events-none"
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill: For Who I help in City */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#183C31] border border-[#245344] text-[#C8F26B] text-xs sm:text-sm font-medium tracking-wide mb-6"
            >
              <span>For Dental clinics in Chennai</span>
            </motion.div>

            {/* Big headline naming the problem, said to the reader */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4F2EC] leading-[1.12] mb-6 max-w-2xl text-balance">
              {shouldReduceMotion ? (
                "Your patients forget their check-ups and your dental chairs sit empty."
              ) : (
                headlineWords.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.08 + i * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block mr-[0.28em]"
                  >
                    {word}
                  </motion.span>
                ))
              )}
            </h1>

            {/* One plain sentence under it */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-[#F4F2EC]/80 leading-relaxed mb-8 max-w-xl"
            >
              We set up a WhatsApp reminder that goes to each patient before their check-up is due, so nobody has to remember to dial and checkups stop slipping by months.
            </motion.p>

            {/* CTA button */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-4"
            >
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#0F2A22] bg-[#C8F26B] hover:bg-[#d5f87b] active:scale-98 rounded-full transition-all duration-200 shadow-lg shadow-[#000000]/25 cursor-pointer text-center"
              >
                Book a free audit call
              </a>
            </motion.div>

            {/* One small line under the buttons */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xs sm:text-sm text-[#F4F2EC]/60"
            >
              Free 1:1 call. You leave with a plan to grow your clinic with AI.
            </motion.p>
          </div>

          {/* Right Column: Phone showing WhatsApp chat */}
          <div className="lg:col-span-5 w-full flex flex-col items-center">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full max-w-[360px] sm:max-w-[380px]"
            >
              {/* Phone Container */}
              <div className="relative rounded-[36px] bg-[#071511] p-3 shadow-2xl border-4 border-[#183C31]/80 ring-1 ring-white/10">
                {/* Phone Speaker Notch */}
                <div className="w-24 h-4 bg-[#0F2A22] rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-10 h-1.5 bg-[#183C31] rounded-full" />
                </div>

                {/* Tabs bar: one tab per thing I set up */}
                <div className="px-2 mb-2">
                  <div className="flex items-center gap-1 p-1 bg-[#183C31]/70 rounded-xl">
                    <button
                      type="button"
                      onClick={() => handleTabClick('reminder')}
                      className={`w-full py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${
                        activeTab === 'reminder'
                          ? 'bg-[#C8F26B] text-[#0F2A22] shadow-sm'
                          : 'text-[#F4F2EC]/70 hover:text-[#F4F2EC]'
                      }`}
                    >
                      The Check-Up Reminder Fix
                    </button>
                  </div>
                </div>

                {/* WhatsApp Chat Interface */}
                <div className="rounded-[24px] bg-[#0C1D18] border border-[#183C31] overflow-hidden flex flex-col h-[420px]">
                  {/* WhatsApp Chat Header */}
                  <div className="bg-[#183C31] px-3.5 py-2.5 flex items-center justify-between text-[#F4F2EC]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-[#C8F26B] flex items-center justify-center text-[#0F2A22] font-bold text-xs">
                        DS
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-semibold leading-tight text-[#F4F2EC]">DentSync Clinic</div>
                        <div className="text-[10px] text-[#C8F26B]">Verified WhatsApp Business</div>
                      </div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#C8F26B]" title="Active" />
                  </div>

                  {/* Chat Messages Body */}
                  <div className="flex-1 p-3.5 overflow-y-auto space-y-3 flex flex-col justify-end text-xs">
                    {/* Timestamp badge */}
                    <div className="text-center my-1">
                      <span className="text-[10px] uppercase tracking-wider text-[#F4F2EC]/40 bg-[#0F2A22] px-2.5 py-0.5 rounded-full">
                        Today
                      </span>
                    </div>

                    {CONVERSATION.slice(0, visibleMessagesCount).map((msg) => {
                      const isClinic = msg.sender === 'clinic';
                      return (
                        <motion.div
                          key={msg.id}
                          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.25 }}
                          className={`flex flex-col ${isClinic ? 'items-start' : 'items-end'}`}
                        >
                          <div
                            className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-sm text-xs leading-relaxed ${
                              isClinic
                                ? 'bg-[#183C31] text-[#F4F2EC] rounded-tl-xs border border-[#245344]'
                                : 'bg-[#C8F26B] text-[#0F2A22] font-medium rounded-tr-xs'
                            }`}
                          >
                            <p>{msg.text}</p>
                            <div
                              className={`flex items-center justify-end gap-1 mt-1 text-[9px] ${
                                isClinic ? 'text-[#F4F2EC]/50' : 'text-[#0F2A22]/70'
                              }`}
                            >
                              <span>{msg.time}</span>
                              <CheckCheck size={11} className={isClinic ? 'text-[#C8F26B]' : 'text-[#0F2A22]'} />
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}

                    {/* Typing bubble */}
                    {isTyping && !shouldReduceMotion && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-1 self-start bg-[#183C31] px-3 py-2 rounded-2xl rounded-tl-xs border border-[#245344]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8F26B] animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8F26B] animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8F26B] animate-bounce" style={{ animationDelay: '300ms' }} />
                      </motion.div>
                    )}
                  </div>

                  {/* Dummy input bar */}
                  <div className="bg-[#183C31]/90 p-2 border-t border-[#245344] flex items-center gap-2">
                    <div className="flex-1 bg-[#0F2A22] text-[#F4F2EC]/40 text-[11px] px-3 py-1.5 rounded-full text-left truncate">
                      Patient replies here...
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#C8F26B] flex items-center justify-center text-[#0F2A22] shrink-0">
                      <Send size={12} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Small caption under it */}
              <p className="text-center text-xs text-[#F4F2EC]/60 mt-3 font-medium">
                Example chat
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
