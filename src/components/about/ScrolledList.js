import React from 'react';
import './about.css';
import f1 from '../../assets/Icons1/js.png';
import f2 from '../../assets/Icons1/css-3.png';
import f3 from '../../assets/Icons1/react.png';
import f4 from '../../assets/Icons1/bootstrap.png';
import f5 from '../../assets/Icons1/android.png';
import f6 from '../../assets/Icons1/apple.png';

export const ScrolledList = () => {
  const logos = [f1, f2, f3, f4, f5, f6];

  return (
    <div className="carousel">
      <div className="carousel-track">
        {logos.map((logo, index) => (
          <div key={index} className="carousel-item">
            <img
              style={{ width: 70, height: 70 }}
              src={logo}
              alt={`Logo ${index + 1}`}
            />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={index + logos.length} className="carousel-item">
            <img
              style={{ width: 70, height: 70 }}
              src={logo}
              alt={`Logo ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
