import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { BOOKING_URL } from './TopBar';

// Helper to format Indian Rupee currency format (e.g. 1,50,000)
function formatINR(val: number): string {
  const rounded = Math.round(val);
  return '₹' + rounded.toLocaleString('en-IN');
}

export const CostCalculator: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Sliders starting at round example values under "Your numbers"
  const [patientsPerMonth, setPatientsPerMonth] = useState<number>(200);
  const [missRatePercent, setMissRatePercent] = useState<number>(30);
  const [avgBill, setAvgBill] = useState<number>(1500);

  // Computed values
  const lostPerMonth = Math.round(patientsPerMonth * (missRatePercent / 100) * avgBill);
  const lostPerYear = lostPerMonth * 12;

  // Animated display values
  const [displayMonth, setDisplayMonth] = useState<number>(lostPerMonth);
  const [displayYear, setDisplayYear] = useState<number>(lostPerYear);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayMonth(lostPerMonth);
      setDisplayYear(lostPerYear);
      return;
    }

    const startMonth = displayMonth;
    const startYear = displayYear;
    const diffMonth = lostPerMonth - startMonth;
    const diffYear = lostPerYear - startYear;
    const duration = 250;
    const startTime = performance.now();

    let frameId: number;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      setDisplayMonth(Math.round(startMonth + diffMonth * ease));
      setDisplayYear(Math.round(startYear + diffYear * ease));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, [lostPerMonth, lostPerYear, shouldReduceMotion]);

  return (
    <section id="cost-calculator" className="py-20 sm:py-28 bg-[#F4F2EC] text-[#0F2A22] border-t border-[#0F2A22]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0F2A22]/70 mb-3 block">
            Proof
          </span>
          {/* Headed: "What missed appointments cost you" */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F2A22] leading-tight text-balance">
            What missed appointments cost you
          </h2>
        </div>

        {/* Calculator Container */}
        <div className="rounded-[24px] bg-white border border-[#0F2A22]/10 p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Sliders under "Your numbers" */}
            <div className="lg:col-span-6 space-y-7">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F2A22]/60 block mb-1">
                  Your numbers
                </span>
                <p className="text-sm text-[#0F2A22]/70">
                  Slide each value to match your clinic.
                </p>
              </div>

              {/* Slider 1: Patients a month */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-sm font-medium">
                  <label htmlFor="patients-slider" className="text-[#0F2A22]">
                    Patients a month
                  </label>
                  <span className="font-heading font-bold text-lg text-[#0F2A22] tabular-nums">
                    {patientsPerMonth}
                  </span>
                </div>
                <input
                  id="patients-slider"
                  type="range"
                  min={50}
                  max={800}
                  step={10}
                  value={patientsPerMonth}
                  onChange={(e) => setPatientsPerMonth(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#F4F2EC] rounded-lg appearance-none cursor-pointer accent-[#0F2A22]"
                />
                <div className="flex justify-between text-[11px] text-[#0F2A22]/50">
                  <span>50 patients</span>
                  <span>800 patients</span>
                </div>
              </div>

              {/* Slider 2: Share who miss their check-up */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-sm font-medium">
                  <label htmlFor="miss-rate-slider" className="text-[#0F2A22]">
                    Share who miss their check-up
                  </label>
                  <span className="font-heading font-bold text-lg text-[#0F2A22] tabular-nums">
                    {missRatePercent}%
                  </span>
                </div>
                <input
                  id="miss-rate-slider"
                  type="range"
                  min={5}
                  max={60}
                  step={5}
                  value={missRatePercent}
                  onChange={(e) => setMissRatePercent(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#F4F2EC] rounded-lg appearance-none cursor-pointer accent-[#0F2A22]"
                />
                <div className="flex justify-between text-[11px] text-[#0F2A22]/50">
                  <span>5%</span>
                  <span>60%</span>
                </div>
              </div>

              {/* Slider 3: Average bill */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-sm font-medium">
                  <label htmlFor="avg-bill-slider" className="text-[#0F2A22]">
                    Average bill
                  </label>
                  <span className="font-heading font-bold text-lg text-[#0F2A22] tabular-nums">
                    ₹{avgBill.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  id="avg-bill-slider"
                  type="range"
                  min={500}
                  max={6000}
                  step={100}
                  value={avgBill}
                  onChange={(e) => setAvgBill(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#F4F2EC] rounded-lg appearance-none cursor-pointer accent-[#0F2A22]"
                />
                <div className="flex justify-between text-[11px] text-[#0F2A22]/50">
                  <span>₹500</span>
                  <span>₹6,000</span>
                </div>
              </div>
            </div>

            {/* Right Column: Big Display Numbers */}
            <div className="lg:col-span-6 flex flex-col items-start bg-[#0F2A22] text-[#F4F2EC] p-8 sm:p-10 rounded-[24px] shadow-inner">
              <div className="w-full space-y-6 mb-8">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#F4F2EC]/60 font-semibold block mb-1">
                    Money lost a month
                  </span>
                  <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#C8F26B] tabular-nums tracking-tight">
                    {formatINR(displayMonth)}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#183C31]">
                  <span className="text-xs uppercase tracking-wider text-[#F4F2EC]/60 font-semibold block mb-1">
                    Money lost a year
                  </span>
                  <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tabular-nums tracking-tight">
                    {formatINR(displayYear)}
                  </div>
                </div>
              </div>

              {/* Under the result: "Your estimate. We go through it on the free audit call." */}
              <p className="text-xs sm:text-sm text-[#F4F2EC]/70 mb-6">
                Your estimate. We go through it on the free audit call.
              </p>

              {/* "Book a free audit call" button */}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm sm:text-base font-bold text-[#0F2A22] bg-[#C8F26B] hover:bg-[#d4f77c] active:scale-98 rounded-full transition-all duration-150 shadow-md text-center cursor-pointer"
              >
                Book a free audit call
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
