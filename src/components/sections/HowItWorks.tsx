import React from 'react';
import imgUpload1 from '../../assets/Printgo_how-it-works_upload-1.png';
import imgUpload3 from '../../assets/Printgo_how-it-works_upload-3.png';
import imgChoose from '../../assets/Printgo_how-it-works_choose.png';
import imgCollect from '../../assets/Printgo_how-it-works_collect.png';

interface StepItem {
  num: string;
  title: string;
  desc: string;
  imgSrc: string;
  icon: React.ReactNode;
}

const steps: StepItem[] = [
  {
    num: '01',
    title: 'Scan the QR Code',
    desc: 'Scan the QR code displayed on the SmartPrinter kiosk to get started.',
    imgSrc: imgUpload1,
    icon: (
      <svg className="w-5 h-5 text-[#1a9b6c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <line x1="14" y1="14" x2="14" y2="14.01" />
        <line x1="17" y1="14" x2="21" y2="14" />
        <line x1="14" y1="17" x2="14" y2="21" />
        <line x1="17" y1="21" x2="21" y2="21" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Upload Document',
    desc: 'Upload the document you want to print from your device.',
    imgSrc: imgUpload3,
    icon: (
      <svg className="w-5 h-5 text-[#1a9b6c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Select Printing Options',
    desc: 'Choose the required printing preferences, such as copies, paper size, and colour or black-and-white printing, where supported.',
    imgSrc: imgChoose,
    icon: (
      <svg className="w-5 h-5 text-[#1a9b6c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <line x1="4" y1="21" x2="4" y2="14" />
        <line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" />
        <line x1="20" y1="12" x2="20" y2="3" />
        <line x1="1" y1="14" x2="7" y2="14" />
        <line x1="9" y1="8" x2="15" y2="8" />
        <line x1="17" y1="16" x2="23" y2="16" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Collect Printed Document',
    desc: 'Collect your printed document from the SmartPrinter kiosk.',
    imgSrc: imgCollect,
    icon: (
      <svg className="w-5 h-5 text-[#1a9b6c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section
      id="how-it-works"
      data-theme="dark-tw"
      className="w-full bg-[#111110] border-t border-b border-[#232321] py-16 sm:py-24 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <span className="inline-block text-[#1a9b6c] font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 font-['Space_Grotesk',sans-serif]">
            The Process
          </span>
          <h2
            className="font-extrabold text-white leading-tight font-['Space_Grotesk',sans-serif] tracking-tight"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}
          >
            Zero friction printing.
          </h2>
          <p className="mt-4 text-[#888780] text-base sm:text-lg font-['Inter',sans-serif] leading-relaxed">
            From scan to printout in minutes — instant access, 100% private, no app download required.
          </p>
        </div>

        {/* 4-Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group relative bg-[#181816] border border-[#232321] hover:border-[#1a9b6c]/50 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
            >
              <div>
                {/* Header row: Step badge and icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest font-['Space_Grotesk',sans-serif] text-[#1a9b6c] bg-[#1a9b6c]/10 border border-[#1a9b6c]/25 px-2.5 py-1 rounded-full">
                    Step {step.num}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#232321] flex items-center justify-center group-hover:bg-[#1a9b6c]/20 transition-colors duration-200">
                    {step.icon}
                  </div>
                </div>

                {/* Screenshot visual preview */}
                <div className="w-full h-44 sm:h-48 rounded-xl overflow-hidden bg-[#111110] border border-[#2a2a27] mb-5 relative">
                  <img
                    src={step.imgSrc}
                    alt={step.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181816]/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Step Title */}
                <h3
                  className="font-bold text-white font-['Space_Grotesk',sans-serif] tracking-tight mb-2 group-hover:text-[#4ade80] transition-colors duration-200"
                  style={{ fontSize: 'clamp(1.125rem, 1.4vw, 1.25rem)' }}
                >
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-[#888780] text-sm leading-relaxed font-['Inter',sans-serif]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Highlights Bar */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-3 rounded-full bg-[#181816] border border-[#232321] text-xs sm:text-sm text-[#888780] font-['Inter',sans-serif]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1a9b6c]" aria-hidden="true" />
              No Mobile App Required
            </span>
            <span className="hidden sm:inline text-[#333330]">•</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1a9b6c]" aria-hidden="true" />
              End-to-End Encrypted
            </span>
            <span className="hidden sm:inline text-[#333330]">•</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1a9b6c]" aria-hidden="true" />
              Immediate Auto-Deletion
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
