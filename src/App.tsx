import React from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { WhatChanges } from './components/WhatChanges';
import { SampleBuilds } from './components/SampleBuilds';
import { CostCalculator } from './components/CostCalculator';
import { HowItWorks } from './components/HowItWorks';
import { Founder } from './components/Founder';
import { FreeAuditCall } from './components/FreeAuditCall';
import { Questions } from './components/Questions';
import { Closing } from './components/Closing';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4F2EC] text-[#0F2A22] flex flex-col antialiased selection:bg-[#C8F26B] selection:text-[#0F2A22] overflow-x-hidden">
      {/* 1. Top bar */}
      <TopBar />

      <main className="flex-1">
        {/* 2. Hero on the dark colour */}
        <Hero />

        {/* 3. Marquee right under the hero */}
        <Marquee />

        {/* 4. What changes for you */}
        <WhatChanges />

        {/* 5. Sample builds */}
        <SampleBuilds />

        {/* 6. Proof: What missed appointments cost you calculator */}
        <CostCalculator />

        {/* 7. How it works */}
        <HowItWorks />

        {/* 8. Founder */}
        <Founder />

        {/* 9. Free audit call on dark colour */}
        <FreeAuditCall />

        {/* 10. Questions */}
        <Questions />

        {/* 11. Closing and Footer */}
        <Closing />
      </main>

      {/* 12. Phone sticky bottom action */}
      <MobileStickyBar />
    </div>
  );
}
