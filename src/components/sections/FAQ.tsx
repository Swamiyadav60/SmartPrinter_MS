import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './FAQ.css';

const faqs = [
  {
    q: 'What is PrintGo?',
    a: 'PrintGo is a self-service printing technology company. We build and operate a network of automated printing kiosks that allow anyone to print documents without staff assistance — available 24/7.',
  },
  {
    q: 'How does the printing process work?',
    a: 'Scan the QR code on the kiosk → visit app.printgo.co.in → select your kiosk → upload your document → choose print settings → pay online → collect your printout. The entire process typically takes just a few minutes.',
  },
  {
    q: 'Is my document safe and private?',
    a: 'Absolutely. Your document is encrypted during storage and transfer. No staff can access your file at any point. After printing — or if printing fails or your session expires — your document is automatically and permanently deleted.',
  },
  {
    q: 'What types of printing are supported?',
    a: 'Depending on the kiosk model, we support black & white printing, colour printing, single-sided and double-sided printing. Available options will be shown when you select your kiosk.',
  },
  {
    q: 'How do I pay for printing?',
    a: 'Payment is made online via UPI, debit/credit cards, or other supported methods through our secure payment gateway. Cash is not required.',
  },
  {
    q: 'Where are PrintGo kiosks located?',
    a: 'We currently have 6 active kiosks deployed at B.Tech colleges in Hyderabad. We are actively expanding to more locations across India — colleges, offices, hostels, hospitals, malls, and more.',
  },
  {
    q: 'Can I become a franchise partner or purchase a kiosk?',
    a: 'Yes. PrintGo offers a franchise model for entrepreneurs, existing printing businesses, colleges, and institutions. Contact us to learn more about the opportunity and discuss commercial terms.',
  },
  {
    q: 'How do I get a kiosk for my location?',
    a: 'Fill in our "Get a Quote" form with your details and requirements. Our team will reach out to discuss the right kiosk configuration for your location and guide you through the next steps.',
  },
];

const FAQ: React.FC = () => {
  const ref = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq" ref={ref} aria-labelledby="faq-headline">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">FAQ</span>
          <h2 id="faq-headline">Common questions answered.</h2>
          <p>Everything you need to know about PrintGo.</p>
        </div>

        <div className="faq__list reveal reveal-delay-1" role="list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`}
              role="listitem"
            >
              <button
                className="faq__question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span>{item.q}</span>
                <span className="faq__chevron" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
              <div
                className="faq__answer"
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                hidden={openIndex !== i}
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
