import React from 'react';
import { BOOKING_URL } from './TopBar';

export const MobileStickyBar: React.FC = () => {
  return (
    <aside
      aria-label="Mobile booking action"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0F2A22]/95 backdrop-blur-md border-t border-[#183C31] p-3 px-4 shadow-2xl safe-area-pb"
    >
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-11 inline-flex items-center justify-center px-6 text-sm font-bold text-[#0F2A22] bg-[#C8F26B] hover:bg-[#d6f68c] active:scale-98 rounded-full shadow-md transition-all duration-150 cursor-pointer"
      >
        Book a free audit call
      </a>
    </aside>
  );
};
