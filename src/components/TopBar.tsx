import React from 'react';
import { Logo } from './Logo';

export const BOOKING_URL = 'https://cal.com/sumesh-p-r0xpfv/30min';

export const TopBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0F2A22]/95 border-b border-[#183C31] text-[#F4F2EC] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#"
          className="flex items-center text-[#F4F2EC] hover:text-[#C8F26B] transition-colors whitespace-nowrap shrink-0"
          aria-label="DentSync home"
        >
          <Logo size="md" />
        </a>

        {/* Zone 2: Single-line text navigation links */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#F4F2EC]/75"
          aria-label="Main Navigation"
        >
          <a
            href="#what-changes"
            className="hover:text-[#F4F2EC] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            What changes
          </a>
          <a
            href="#sample-builds"
            className="hover:text-[#F4F2EC] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Sample builds
          </a>
          <a
            href="#cost-calculator"
            className="hover:text-[#F4F2EC] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Lost check-ups
          </a>
          <a
            href="#how-it-works"
            className="hover:text-[#F4F2EC] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            How it works
          </a>
          <a
            href="#questions"
            className="hover:text-[#F4F2EC] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Questions
          </a>
        </nav>

        {/* Zone 3: Primary action pill */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-[#0F2A22] bg-[#C8F26B] hover:bg-[#d6f68c] active:scale-95 rounded-full transition-all duration-150 shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            Free audit call
          </a>
        </div>
      </div>
    </header>
  );
};
