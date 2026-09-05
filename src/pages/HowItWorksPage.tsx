import React, { useEffect } from 'react';
import HowItWorks from '../components/sections/HowItWorks';
import FinalCTA from '../components/sections/FinalCTA';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './PageStyles.css';

const HowItWorksPage: React.FC = () => {
  const heroRef = useScrollReveal();
  const detailRef = useScrollReveal();

  useEffect(() => {
    document.title = 'How It Works — PrintGo';
  }, []);

  return (
    <>
      <section className="page-hero" ref={heroRef} aria-labelledby="hiw-page-headline">
        <div className="container page-hero__content">
          <span className="section-label section-label--white reveal">How It Works</span>
          <h1 id="hiw-page-headline" className="page-hero__title page-hero__title--white reveal reveal-delay-1">
            From scan to printout<br />in minutes.
          </h1>
          <p className="page-hero__sub page-hero__sub--muted reveal reveal-delay-2">
            PrintGo is designed to be the fastest, simplest way to print. No accounts, no queues, no waiting for staff.
          </p>
        </div>
      </section>

      <HowItWorks />

      {/* Extended detail section */}
      <section className="hiw-detail" ref={detailRef} aria-labelledby="hiw-detail-headline">
        <div className="container">
          <div className="hiw-detail__inner reveal">
            <h2 id="hiw-detail-headline">What happens behind the scenes?</h2>
            <div className="hiw-detail__grid">
              <div className="hiw-detail__card">
                <h3>Kiosk selection</h3>
                <p>When you scan the QR code, you are automatically linked to that specific kiosk. Your session is tied to it — no confusion about which machine to collect from.</p>
              </div>
              <div className="hiw-detail__card">
                <h3>Document upload</h3>
                <p>Upload directly from your phone storage, or share from cloud services. Your document is transferred securely and encrypted immediately upon upload.</p>
              </div>
              <div className="hiw-detail__card">
                <h3>Secure printing</h3>
                <p>Once payment is confirmed, the document is sent securely to the kiosk and printed. No staff can see or access your file during this process.</p>
              </div>
              <div className="hiw-detail__card">
                <h3>Automatic cleanup</h3>
                <p>After printing, your document is permanently deleted from our servers. If printing fails or your session expires, the same deletion happens automatically.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
};

export default HowItWorksPage;
