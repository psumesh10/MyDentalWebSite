import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { CheckCircle2, MessageSquare, Bell, Calendar } from 'lucide-react';

interface BuildRowProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  whatYouGet: string;
  whatChanges: string;
  notificationText: string;
  notificationSub: string;
  imageOnLeft?: boolean;
}

const BuildRow: React.FC<BuildRowProps> = ({
  imageSrc,
  imageAlt,
  title,
  whatYouGet,
  whatChanges,
  notificationText,
  notificationSub,
  imageOnLeft = false,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const rowRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ['start end', 'end start'],
  });

  // Photo drifts a little slower than page scroll
  const imageY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <div
      ref={rowRef}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
        imageOnLeft ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Content Column */}
      <div
        className={`lg:col-span-6 flex flex-col justify-center ${
          imageOnLeft ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        {/* Sample build label */}
        <span className="text-xs font-semibold tracking-wider uppercase text-[#0F2A22]/70 mb-2">
          Sample build
        </span>

        {/* Title */}
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0F2A22] tracking-tight mb-6">
          {title}
        </h3>

        {/* Two short parts headed exactly "What you get" and "What changes for you" */}
        <div className="space-y-6">
          <div className="rounded-[20px] bg-white border border-[#0F2A22]/10 p-6 shadow-xs">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#0F2A22] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8F26B]" />
              What you get
            </h4>
            <p className="text-sm sm:text-base text-[#0F2A22]/80 leading-relaxed">
              {whatYouGet}
            </p>
          </div>

          <div className="rounded-[20px] bg-white border border-[#0F2A22]/10 p-6 shadow-xs">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#0F2A22] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8F26B]" />
              What changes for you
            </h4>
            <p className="text-sm sm:text-base text-[#0F2A22]/80 leading-relaxed">
              {whatChanges}
            </p>
          </div>
        </div>
      </div>

      {/* Image Column with Overlapping Notification Bubble */}
      <div
        className={`lg:col-span-6 relative ${
          imageOnLeft ? 'lg:order-1' : 'lg:order-2'
        }`}
      >
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 0, clipPath: 'inset(10% 0% 10% 0%)' }
          }
          whileInView={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }
          }
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[24px] overflow-hidden border border-[#0F2A22]/10 bg-white shadow-md"
        >
          {/* Drifting photo */}
          <motion.div style={{ y: shouldReduceMotion ? 0 : imageY }} className="scale-[1.03]">
            <img
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={400}
              className="w-full aspect-[3/2] object-cover rounded-[24px]"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </motion.div>

          {/* Coded chat bubble / phone notification overlapping photo corner */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, y: 12, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className={`absolute bottom-4 ${
              imageOnLeft ? 'right-4 sm:right-6' : 'left-4 sm:left-6'
            } max-w-[85%] sm:max-w-xs bg-[#0F2A22] text-[#F4F2EC] p-3.5 sm:p-4 rounded-2xl shadow-xl border border-[#183C31] backdrop-blur-md`}
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#C8F26B] text-[#0F2A22] flex items-center justify-center shrink-0">
                <Bell size={16} />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-[#F4F2EC] leading-snug">
                  {notificationText}
                </div>
                <div className="text-[11px] text-[#C8F26B] mt-0.5">
                  {notificationSub}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export const SampleBuilds: React.FC = () => {
  return (
    <section id="sample-builds" className="py-20 sm:py-28 bg-[#F4F2EC] text-[#0F2A22] border-t border-[#0F2A22]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0F2A22]/70 mb-3 block">
            Sample builds
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F2A22] leading-tight text-balance">
            See the reminder in your daily clinic routine
          </h2>
        </div>

        {/* Rows with alternating image alignment */}
        <div className="space-y-20 sm:space-y-28">
          {/* Row 1: work-1.jpg */}
          <BuildRow
            imageSrc="/work-1.jpg"
            imageAlt="Dental clinic reception desk staff in Chennai with phone"
            title="The Check-Up Reminder Fix"
            whatYouGet="A WhatsApp reminder that goes to each patient before their check-up is due. You answer a few questions once and check it before it goes live, and the member does the rest."
            whatChanges="Your reception desk stops spending hours dialing numbers that patients ignore. Routine reminders go out automatically, so your staff stays focused on patients in your lounge."
            notificationText="WhatsApp Reminder Sent"
            notificationSub="14 check-up notices delivered this morning"
            imageOnLeft={false}
          />

          {/* Row 2: work-2.jpg */}
          <BuildRow
            imageSrc="/work-2.jpg"
            imageAlt="Dentist doctor in Chennai clinic reviewing schedule on phone"
            title="The Check-Up Reminder Fix"
            whatYouGet="Direct slot bookings that connect your patient replies back into your daily chair schedule without phone tag."
            whatChanges="You look at your schedule between procedures and find confirmed appointments waiting for the week ahead. Your dental chairs stay occupied without manual follow-up calls."
            notificationText="Check-Up Confirmed"
            notificationSub="Saturday 11:00 AM reserved by patient"
            imageOnLeft={true}
          />

          {/* Row 3: work-3.jpg */}
          <BuildRow
            imageSrc="/work-3.jpg"
            imageAlt="Happy dental patient leaving Chennai clinic with phone in hand"
            title="The Check-Up Reminder Fix"
            whatYouGet="A polite reminder message on WhatsApp that gives your patient their exact check-up date and two open times to pick from."
            whatChanges="Your patients confirm in seconds from their phone. They keep their teeth in good shape, your recall cycle stays on time, and checkups stop slipping by months."
            notificationText="Patient Replied on WhatsApp"
            notificationSub="Appointment locked in one message"
            imageOnLeft={false}
          />
        </div>

      </div>
    </section>
  );
};
