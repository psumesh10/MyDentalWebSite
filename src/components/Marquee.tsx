import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export const Marquee: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  const row1Items = [
    'The Check-Up Reminder Fix',
    'The Check-Up Reminder Fix',
    'The Check-Up Reminder Fix',
    'The Check-Up Reminder Fix',
    'The Check-Up Reminder Fix',
    'The Check-Up Reminder Fix',
  ];

  const row2Items = [
    'FOR DENTAL CLINICS',
    'CHENNAI',
    'RUNS ON YOUR WHATSAPP',
    'FOR DENTAL CLINICS',
    'CHENNAI',
    'RUNS ON YOUR WHATSAPP',
    'FOR DENTAL CLINICS',
    'CHENNAI',
    'RUNS ON YOUR WHATSAPP',
  ];

  return (
    <section
      className="w-full bg-[#071511] border-y border-[#183C31] py-6 sm:py-8 overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Features banner"
    >
      <div className="relative w-full flex flex-col gap-3.5 sm:gap-5 overflow-hidden">
        
        {/* Row 1: Leftward moving, big bold white heading font */}
        <div className="w-full overflow-hidden flex">
          <motion.div
            className="flex items-center gap-6 shrink-0 whitespace-nowrap"
            animate={
              shouldReduceMotion
                ? { x: 0 }
                : {
                    x: ['0%', '-50%'],
                  }
            }
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: isHovered ? 45 : 22,
                ease: 'linear',
              },
            }}
          >
            {/* Duplicated list for seamless infinite loop */}
            {[...row1Items, ...row1Items].map((item, index) => (
              <React.Fragment key={`r1-${index}`}>
                <span className="font-heading font-bold text-2xl sm:text-4xl text-white tracking-tight">
                  {item}
                </span>
                <span
                  className="w-2.5 h-2.5 rounded-full bg-[#C8F26B] shrink-0"
                  aria-hidden="true"
                />
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Rightward moving, uppercase wide tracking, half size, off-white 60% */}
        <div className="w-full overflow-hidden flex">
          <motion.div
            className="flex items-center gap-6 shrink-0 whitespace-nowrap"
            animate={
              shouldReduceMotion
                ? { x: 0 }
                : {
                    x: ['-50%', '0%'],
                  }
            }
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: isHovered ? 50 : 25,
                ease: 'linear',
              },
            }}
          >
            {[...row2Items, ...row2Items].map((item, index) => (
              <React.Fragment key={`r2-${index}`}>
                <span className="font-sans font-medium text-xs sm:text-sm tracking-[0.22em] text-[#F4F2EC]/60 uppercase">
                  {item}
                </span>
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#C8F26B] shrink-0"
                  aria-hidden="true"
                />
              </React.Fragment>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
