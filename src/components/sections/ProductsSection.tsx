import React from 'react';
import Button from '../ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ProductsSection.css';

export interface ProductModel {
  id: string;
  name: string;
  badge?: string;
  price: string;
  popular?: boolean;
  description: string;
  specs: string[];
}

const products: ProductModel[] = [
  {
    id: 'smart-printer',
    name: 'SMART PRINTER',
    badge: 'Standard Edition',
    price: '₹40,000',
    popular: false,
    description: 'Compact, cost-effective self-service printing kiosk optimized for B&W documents in colleges, libraries, and high-footfall areas.',
    specs: [
      'Black & White printing',
      'Paper capacity: 250 sheets',
      'Printing speed: up to 30 PPM',
      'Auto duplex printing',
      'Toner life: up to 2,600 prints',
      'QR-code instant scan interface',
      'UPI & digital payment integrated'
    ]
  },
  {
    id: 'smart-printer-pro',
    name: 'SMART PRINTER PRO',
    badge: 'High-Volume Enterprise',
    price: '₹2,00,000',
    popular: true,
    description: 'Heavy-duty commercial self-service kiosk with full colour + B&W support, multi-tray capacity, and enterprise-grade reliability.',
    specs: [
      'Colour + Black & White printing',
      'Paper capacity: 1,250 sheets',
      'High-speed printing',
      'Auto duplex printing',
      'Ink life: up to 50,000 prints',
      'Multi-tray auto selection',
      'Remote telemetry & automated alerts'
    ]
  }
];

const ProductsSection: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section className="products-section" id="products" ref={ref} aria-labelledby="products-headline">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Our Hardware Models</span>
          <h2 id="products-headline">Choose the Right SmartPrinter for Your Space</h2>
          <p>Purpose-built self-service kiosks engineered for speed, high duty-cycles, and zero daily operational maintenance.</p>
        </div>

        <div className="products-grid">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className={`product-card ${product.popular ? 'product-card--popular' : ''} reveal reveal-delay-${idx + 1}`}
            >
              {product.popular && <div className="product-card__popular-badge">Most Popular</div>}

              <div className="product-card__header">
                <span className="product-card__category">{product.badge}</span>
                <h3 className="product-card__title">{product.name}</h3>
                <div className="product-card__price">{product.price}</div>
                <p className="product-card__desc">{product.description}</p>
              </div>

              <div className="product-card__specs">
                <h4 className="product-card__specs-title">Key Specifications</h4>
                <ul className="product-card__specs-list">
                  {product.specs.map((spec, sIdx) => (
                    <li key={sIdx}>
                      <span className="spec-check">✓</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="product-card__footer">
                <Button
                  to="/contact"
                  variant={product.popular ? 'primary' : 'secondary'}
                  fullWidth
                  size="lg"
                  id={`product-cta-${product.id}`}
                >
                  Request a Quote for {product.name}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
