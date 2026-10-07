import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Security.css';

const Security: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section className="security" ref={ref}>
      <div className="container">
        <div className="security__grid">
          {/* Main Statement */}
          <div className="security__main reveal">
            <span className="section-label">Privacy First</span>
            <h2>Zero human exposure.</h2>
            <p>SmartPrinter operates entirely automatically. Your documents are never seen by any staff member, ensuring complete confidentiality for sensitive information.</p>
          </div>

          {/* Bento Boxes */}
          <div className="security__bento security__bento--encrypt reveal reveal-delay-1">
            <div className="bento-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
            </div>
            <h3>End-to-End Encryption</h3>
            <p>Documents are encrypted during upload, storage, and transfer to the kiosk.</p>
          </div>

          <div className="security__bento security__bento--delete reveal reveal-delay-2">
            <div className="bento-icon">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path></svg>
            </div>
            <h3>Auto-Deletion</h3>
            <p>Files are permanently wiped immediately after printing, or if a session expires.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
