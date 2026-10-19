import React from 'react';
import { Logo } from './Logo';
import { BOOKING_URL } from './TopBar';

export const Closing: React.FC = () => {
  return (
    <div>
      {/* Closing Banner: place.jpg under a dark colour layer */}
      <section className="relative py-24 sm:py-32 lg:py-40 bg-[#0F2A22] text-[#F4F2EC] overflow-hidden">
        {/* Background photo under dark colour layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/place.jpg"
            alt="Calm view inside a dental clinic waiting lounge in Chennai"
            width={1200}
            height={800}
            className="w-full h-full object-cover object-center filter brightness-50"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          {/* Measured dark scrim for WCAG AA readability */}
          <div className="absolute inset-0 bg-[#0F2A22]/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071511] via-[#0F2A22]/70 to-[#0F2A22]/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#183C31]/90 border border-[#245344] text-[#C8F26B] text-xs sm:text-sm font-semibold tracking-wide mb-6">
            Chennai Dental Clinics
          </span>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 leading-[1.15] text-balance">
            Stop letting your patient check-ups slip by
          </h2>

          <p className="text-base sm:text-xl text-[#F4F2EC]/85 max-w-2xl mb-10 leading-relaxed">
            Automate your recall reminders on WhatsApp so your chairs stay full and your front desk never has to dial past patients.
          </p>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-9 py-4 text-base font-bold text-[#0F2A22] bg-[#C8F26B] hover:bg-[#d5f87b] active:scale-98 rounded-full transition-all duration-150 shadow-2xl cursor-pointer"
          >
            Book a free audit call
          </a>
        </div>
      </section>

      {/* Footer: logo, City, WhatsApp if given */}
      <footer className="bg-[#071511] border-t border-[#183C31] text-[#F4F2EC] py-12 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Logo and City */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
              <a href="#" aria-label="DentSync home">
                <Logo size="md" />
              </a>
              <span className="hidden sm:inline text-[#F4F2EC]/30">|</span>
              <span className="text-sm font-medium text-[#F4F2EC]/70">
                Chennai
              </span>
            </div>

            {/* Quick Section Links */}
            <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#F4F2EC]/70 font-medium">
              <a href="#what-changes" className="hover:text-[#C8F26B] transition-colors">
                What changes
              </a>
              <a href="#sample-builds" className="hover:text-[#C8F26B] transition-colors">
                Sample builds
              </a>
              <a href="#cost-calculator" className="hover:text-[#C8F26B] transition-colors">
                Lost check-ups
              </a>
              <a href="#how-it-works" className="hover:text-[#C8F26B] transition-colors">
                How it works
              </a>
              <a href="#questions" className="hover:text-[#C8F26B] transition-colors">
                Questions
              </a>
            </nav>

            {/* Copyright */}
            <div className="text-xs text-[#F4F2EC]/50 text-center md:text-right">
              © 2026 DentSync. All rights reserved.
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
};
