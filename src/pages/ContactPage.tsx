import React, { useEffect, useState } from 'react';
import Button from '../components/ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './PageStyles.css';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  const ref = useScrollReveal();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    kioskCount: '1',
    kioskType: 'unsure',
    message: ''
  });

  useEffect(() => {
    document.title = 'Contact & Quote — PrintGo';
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Prepared for Supabase integration here
    // e.g., await supabase.from('quotes').insert([formData]);
    
    // Simulate network request
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '', phone: '', email: '', location: '', kioskCount: '1', kioskType: 'unsure', message: ''
      });
    }, 1500);
  };

  return (
    <>
      <section className="contact-page" ref={ref} aria-labelledby="contact-headline">
        <div className="container contact-page__container">
          
          {/* Left: Info */}
          <div className="contact-page__info reveal">
            <span className="section-label">Get in Touch</span>
            <h1 id="contact-headline" className="contact-page__title">Let's discuss your printing needs.</h1>
            <p className="contact-page__desc">
              Whether you're interested in deploying a kiosk at your college, upgrading your printing business, or becoming a franchise partner, our team is ready to help.
            </p>

            <div className="contact-page__methods">
              <div className="contact-page__method">
                <div className="contact-page__method-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <strong>Email us</strong>
                  <span>hello@smartprinter.in</span>
                </div>
              </div>
              <div className="contact-page__method">
                <div className="contact-page__method-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <strong>Call us</strong>
                  <span>+91 98765 43210</span>
                </div>
              </div>
              <div className="contact-page__method">
                <div className="contact-page__method-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <div>
                  <strong>WhatsApp</strong>
                  <span>Available Mon-Sat</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-page__form-wrap reveal reveal-delay-2">
            {formStatus === 'success' ? (
              <div className="contact-page__success" role="alert" aria-live="polite">
                <div className="contact-page__success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3>Request Received</h3>
                <p>Thank you for your interest in PrintGo. Our team will review your requirements and get back to you shortly.</p>
                <Button onClick={() => setFormStatus('idle')} variant="secondary">
                  Send another request
                </Button>
              </div>
            ) : (
              <form className="contact-page__form" onSubmit={handleSubmit} noValidate>
                <h2 className="contact-page__form-title">Get a Quote</h2>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name <span aria-hidden="true">*</span></label>
                    <input type="text" id="name" required placeholder="John Doe" value={formData.name} onChange={handleChange} aria-required="true" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number <span aria-hidden="true">*</span></label>
                    <input type="tel" id="phone" required placeholder="+91" value={formData.phone} onChange={handleChange} aria-required="true" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address <span aria-hidden="true">*</span></label>
                    <input type="email" id="email" required placeholder="john@example.com" value={formData.email} onChange={handleChange} aria-required="true" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="location">City / State <span aria-hidden="true">*</span></label>
                    <input type="text" id="location" required placeholder="Hyderabad, TS" value={formData.location} onChange={handleChange} aria-required="true" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="kioskCount">Number of kiosks</label>
                    <select id="kioskCount" value={formData.kioskCount} onChange={handleChange}>
                      <option value="1">1</option>
                      <option value="2-5">2-5</option>
                      <option value="5-10">5-10</option>
                      <option value="10+">More than 10</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="kioskType">Preferred type</label>
                    <select id="kioskType" value={formData.kioskType} onChange={handleChange}>
                      <option value="unsure">Not sure yet</option>
                      <option value="bw">B&W Only</option>
                      <option value="color">B&W + Colour</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Additional Message (Optional)</label>
                  <textarea id="message" rows={4} placeholder="Tell us about your location and requirements..." value={formData.message} onChange={handleChange}></textarea>
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  fullWidth 
                  size="lg"
                  disabled={formStatus === 'submitting'}
                  aria-busy={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Request Quote'}
                </Button>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  );
};

export default ContactPage;
