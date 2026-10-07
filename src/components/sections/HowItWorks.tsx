import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import imgUpload1 from '../../assets/Printgo_how-it-works_upload-1.png';
import imgUpload3 from '../../assets/Printgo_how-it-works_upload-3.png';
import imgChoose from '../../assets/Printgo_how-it-works_choose.png';
import imgCollect from '../../assets/Printgo_how-it-works_collect.png';

// IMPORTANT: All Tailwind classes used in the `image` field must be complete static strings
// (no template interpolation) so the Tailwind content scanner can detect them at build time.
const steps = [
  {
    num: '01',
    title: 'Scan QR Code',
    desc: 'Scan the QR code on the SmartPrinter kiosk using your smartphone camera or any QR scanner. Instant access — no app download required.',
    image: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20',
    glowColor: 'rgba(59,130,246,0.12)',
    imgSrc: imgUpload1,
  },
  {
    num: '02',
    title: 'Upload Document',
    desc: 'Select your PDF, DOCX, or image file directly from your mobile phone or laptop. Transferred with end-to-end encryption.',
    image: 'bg-gradient-to-br from-green-500/20 to-blue-500/20',
    glowColor: 'rgba(34,197,94,0.12)',
    imgSrc: imgUpload3,
  },
  {
    num: '03',
    title: 'Select Printing Options',
    desc: 'Choose your print preferences — Black & White or Colour, single or double-sided (duplex), and page range.',
    image: 'bg-gradient-to-br from-yellow-500/20 to-red-500/20',
    glowColor: 'rgba(234,179,8,0.12)',
    imgSrc: imgChoose,
  },
  {
    num: '04',
    title: 'Make Payment',
    desc: 'Pay instantly via UPI (GPay, PhonePe, Paytm), debit/credit card, or net banking with real-time payment confirmation.',
    image: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
    glowColor: 'rgba(168,85,247,0.12)',
    imgSrc: null,
  },
  {
    num: '05',
    title: 'Collect Printed Document',
    desc: 'Your high-speed printout is generated immediately at the kiosk. Zero waiting, zero staff assistance.',
    image: 'bg-gradient-to-br from-pink-500/20 to-orange-500/20',
    glowColor: 'rgba(236,72,153,0.12)',
    imgSrc: imgCollect,
  },
];

const DURATION = 5000;

const HowItWorks: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const timerRef = useRef<number | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, DURATION);
  };

  useEffect(() => {
    if (!isHovered) startTimer();
    else if (timerRef.current) clearInterval(timerRef.current);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isHovered]);

  const handleStepClick = (index: number) => {
    setActiveIndex(index);
    if (!isHovered) startTimer();
  };

  const transitionProps = shouldReduceMotion
    ? { duration: 0.01 }
    : { duration: 0.4, ease: 'easeOut' };

  return (
    // data-theme="dark-tw" opts this section out of the global h2/h3/p color rules
    // so Tailwind color utilities (text-white, text-gray-400, etc.) work correctly.
    <section
      data-theme="dark-tw"
      className="w-full bg-[#0A0A0A] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-16 items-center">

        {/* ── Left Panel: Text & Step Controls (40%) ── */}
        <div
          className="w-full md:w-[40%] flex flex-col justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Section header */}
          <div className="mb-12">
            <span className="block text-[#00C4B4] font-bold uppercase tracking-widest text-sm mb-4 font-sans">
              The Process
            </span>
            <h2
              className="font-extrabold text-white leading-tight font-sans"
              style={{ fontSize: 'clamp(1.875rem, 3vw, 2.25rem)' }}
            >
              Zero friction printing.
            </h2>
          </div>

          {/* Step list */}
          <div className="relative">
            {steps.map((step, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={step.num}
                  className="mb-8 cursor-pointer"
                  onClick={() => handleStepClick(idx)}
                >
                  {/* Number + progress bar row */}
                  <div className="flex items-center mb-3">
                    <span
                      className="text-sm font-bold tracking-wider mr-4 font-sans transition-colors duration-300"
                      style={{ color: isActive ? '#FF5E00' : '#4b5563' }}
                    >
                      {step.num}
                    </span>
                    <div className="h-[2px] flex-1 bg-gray-800 rounded overflow-hidden relative">
                      <AnimatePresence>
                        {isActive && !isHovered && (
                          <motion.div
                            key={`progress-${idx}-${activeIndex}`}
                            className="absolute top-0 left-0 h-full bg-[#00C4B4] origin-left"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{ scaleX: 1, opacity: 0 }}
                            transition={
                              shouldReduceMotion
                                ? { duration: 0.01 }
                                : { duration: DURATION / 1000, ease: 'linear' }
                            }
                          />
                        )}
                        {isActive && isHovered && (
                          <motion.div
                            key={`paused-${idx}`}
                            className="absolute top-0 left-0 h-full w-full bg-[#00C4B4] opacity-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Step title */}
                  <h3
                    className="font-bold font-sans transition-colors duration-300"
                    style={{
                      fontSize: 'clamp(1.125rem, 1.8vw, 1.375rem)',
                      color: isActive ? '#ffffff' : '#6b7280',
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Step description — animated open/close */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        key={`desc-${idx}`}
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: '0.5rem' }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={transitionProps}
                        className="overflow-hidden"
                      >
                        <p
                          className="leading-relaxed font-sans"
                          style={{ color: '#9ca3af', fontSize: '1rem' }}
                        >
                          {step.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Right Panel: Media (60%) ── */}
        <div className="w-full md:w-[60%] relative h-[400px] md:h-[560px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -10 }}
              transition={transitionProps}
              className={`absolute inset-0 w-full h-full rounded-2xl border border-gray-800 flex items-center justify-center ${(steps[activeIndex] as any).imgSrc ? 'overflow-hidden' : steps[activeIndex].image
                }`}
              style={{ boxShadow: `0 0 60px ${steps[activeIndex].glowColor}` }}
            >
              {(steps[activeIndex] as any).imgSrc ? (
                /* Real screenshot for steps that have one */
                <img
                  src={(steps[activeIndex] as any).imgSrc}
                  alt={steps[activeIndex].title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                /* Mock app UI card for steps without a real image */
                <div className="w-2/3 h-2/3 rounded-xl border border-white/10 p-6 flex flex-col gap-4 relative overflow-hidden"
                  style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(12px)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
                  {/* Window chrome dots */}
                  <div className="w-full h-8 rounded-md mb-4 flex items-center px-4" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <div className="w-3 h-3 rounded-full mr-2" style={{ background: 'rgba(239,68,68,0.5)' }}></div>
                    <div className="w-3 h-3 rounded-full mr-2" style={{ background: 'rgba(234,179,8,0.5)' }}></div>
                    <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(34,197,94,0.5)' }}></div>
                  </div>
                  {/* Skeleton lines */}
                  <div className="w-3/4 h-5 rounded-md" style={{ background: 'rgba(255,255,255,0.1)' }}></div>
                  <div className="w-1/2 h-4 rounded-md mb-6" style={{ background: 'rgba(255,255,255,0.05)' }}></div>
                  {/* Central glow area */}
                  <div className="flex-1 rounded-lg flex items-center justify-center relative overflow-hidden"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="absolute inset-0 rounded-full scale-150 blur-3xl"
                      style={{ background: 'rgba(37,99,235,0.15)', transform: 'translate(-30%, -30%) scale(1.5)' }}>
                    </div>
                    <span className="font-bold font-sans relative z-10"
                      style={{ color: '#2563EB', fontSize: '5rem', opacity: 0.25 }}>
                      0{activeIndex + 1}
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
