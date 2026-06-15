import React from 'react';

import Logo1 from '../assets/Partnership/Logo1.png';
import Logo2 from '../assets/Partnership/Logo2.png';
import Logo3 from '../assets/Partnership/Logo3.png';
import Logo4 from '../assets/Partnership/Logo4.png';
import Logo5 from '../assets/Partnership/Logo5.png';
import Logo6 from '../assets/Partnership/Logo6.png';
import Logo7 from '../assets/Partnership/Logo7.png';
import Logo8 from '../assets/Partnership/Logo8.png';
import Logo9 from '../assets/Partnership/Logo9.png';
import Logo10 from '../assets/Partnership/Logo10.png';
import Logo11 from '../assets/Partnership/Logo11.png';
import Logo12 from '../assets/Partnership/Logo12.png';
import Logo13 from '../assets/Partnership/Logo13.png';
import Logo14 from '../assets/Partnership/Logo14.png';
import Logo15 from '../assets/Partnership/Logo15.png';

const logos = [
  Logo1, Logo2, Logo3, Logo4, Logo5,
  Logo6, Logo7, Logo8, Logo9, Logo10,
  Logo11, Logo12, Logo13, Logo14, Logo15,
];

const Partnership = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
      {/* Section label */}
      <div className="flex items-center gap-2 mb-6">
        <span className="diamond"></span>
        <span className="body-small text-grey-500">Partnership</span>
      </div>

      {/* Heading */}
      <h2 className="heading-3 font-medium text-grey-500 max-w-3xl mb-6">
        Collaborating with trusted{' '}
        partners to create lasting value.
      </h2>

      {/* Description */}
      <p className="body-medium text-grey-200 max-w-4xl mb-16">
        At the heart of our success lies the enduring relationships we cultivate with our partners who share our unwavering passion for excellence. With a keen understanding of their unique needs and a shared drive for success, we have delivered transformative experiences and unlocked remarkable opportunities across various industries. Our collaborative approach and perceptive insights have consistently led to successful outcomes and forged a path towards mutual growth and prosperity.
      </p>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-4 py-8 md:py-10"
          >
            <img
              src={logo}
              alt={`Partner logo ${index + 1}`}
              className="max-h-10 md:max-h-12 w-auto object-contain grayscale"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partnership;
