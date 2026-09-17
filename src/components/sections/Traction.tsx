import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Traction.css';

const Traction: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section className="traction" ref={ref} aria-label="Current traction">
      <div className="container traction__inner">
        <div className="traction__stat reveal">
          <span className="traction__num">5</span>
          <span className="traction__label">Active Kiosks</span>
        </div>
        <div className="traction__divider" aria-hidden="true" />
        <div className="traction__stat reveal reveal-delay-1">
          <span className="traction__num">B.Tech</span>
          <span className="traction__label">Colleges Served</span>
        </div>
        <div className="traction__divider" aria-hidden="true" />
        <div className="traction__stat reveal reveal-delay-2">
          <span className="traction__num">WGL.</span>
          <span className="traction__label">Warangal, India</span>
        </div>
      </div>
    </section>
  );
};

export default Traction;
