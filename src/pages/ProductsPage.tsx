import React, { useEffect } from 'react';
import ProductsSection from '../components/sections/ProductsSection';
import FinalCTA from '../components/sections/FinalCTA';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './PageStyles.css';

const ProductsPage: React.FC = () => {
  const ref = useScrollReveal();

  useEffect(() => {
    document.title = 'Products & Kiosks — SmartPrinter';
  }, []);

  return (
    <>
      <section className="page-hero page-hero--soft" ref={ref} aria-labelledby="products-page-headline">
        <div className="container page-hero__content">
          <span className="section-label reveal">SmartPrinter Hardware</span>
          <h1 id="products-page-headline" className="page-hero__title reveal reveal-delay-1">
            Automated Kiosks Built for Heavy Duty.
          </h1>
          <p className="page-hero__sub reveal reveal-delay-2">
            Explore our flagship self-service printing kiosks. Designed for maximum throughput, low cost per print, and continuous 24/7 uptime.
          </p>
        </div>
      </section>

      <ProductsSection />
      <FinalCTA />
    </>
  );
};

export default ProductsPage;
