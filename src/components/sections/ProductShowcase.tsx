import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ProductShowcase.css';

const capacities = [
  { id: 'compact', sheets: '350', label: 'Compact', desc: 'Ideal for clinics and small waiting rooms.' },
  { id: 'standard', sheets: '750', label: 'Standard', desc: 'Perfect for small offices and departments.' },
  { id: 'pro', sheets: '1300', label: 'Professional', desc: 'High-volume kiosk for busy college hubs.' },
  { id: 'enterprise', sheets: '1800', label: 'Enterprise', desc: 'Maximum capacity for public transit and large campuses.' },
];

const ProductShowcase: React.FC = () => {
  const ref = useScrollReveal();
  const [activeTab, setActiveTab] = useState('pro');

  return (
    <section className="product" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Hardware</span>
          <h2>Built for your location.</h2>
          <p>Choose from multiple kiosk capacities and print configurations (B&W or Full Colour) to match your footfall.</p>
        </div>

        <div className="product__hardware-showcase reveal reveal-delay-1">
          
          <div className="product__tabs">
            {capacities.map(c => (
              <button 
                key={c.id} 
                className={`product__tab ${activeTab === c.id ? 'active' : ''}`}
                onClick={() => setActiveTab(c.id)}
              >
                {c.sheets} Sheets
              </button>
            ))}
          </div>

          <div className="product__display">
            <div className="product__display-visual">
               <div className={`product__kiosk-model product__kiosk-model--${activeTab}`}>
                  <div className="kiosk-screen-mock"></div>
                  <div className="kiosk-slot-mock"></div>
               </div>
            </div>
            
            <div className="product__display-info">
               {capacities.map(c => (
                 <div key={c.id} className={`product__info-pane ${activeTab === c.id ? 'active' : ''}`}>
                    <h3>{c.label} Model</h3>
                    <div className="product__stat">
                      <span className="product__stat-value">{c.sheets}+</span>
                      <span className="product__stat-label">Page Capacity</span>
                    </div>
                    <p>{c.desc}</p>
                 </div>
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
