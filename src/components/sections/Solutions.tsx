import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Solutions.css';

const solutions = [
  { title: 'Colleges & Universities', desc: 'Serve thousands of students 24/7 without library staff.', img: '🎓' },
  { title: 'Corporate Offices', desc: 'On-demand printing for employees without a dedicated print room.', img: '🏢' },
  { title: 'Printing Businesses', desc: 'Automate your Xerox shop and serve more customers simultaneously.', img: '🖨️' },
  { title: 'Public Spaces', desc: 'Malls, railway stations, and transit hubs with high footfall.', img: '🚉' },
];

const Solutions: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section className="solutions" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Deployments</span>
          <h2>A solution for every space.</h2>
        </div>

        <div className="solutions__grid">
          {solutions.map((s, i) => (
            <div key={s.title} className={`solutions__card reveal reveal-delay-${i + 1}`}>
              <div className="solutions__card-visual">{s.img}</div>
              <div className="solutions__card-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
