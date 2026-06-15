import React from 'react';

import Person1 from '../assets/OurTeam/Person1.png';
import Person2 from '../assets/OurTeam/Person2.png';
import Person3 from '../assets/OurTeam/Person3.png';
import Person4 from '../assets/OurTeam/Person4.png';
import Person5 from '../assets/OurTeam/Person5.png';
import Person6 from '../assets/OurTeam/Person6.png';

const OurTeam = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Section label */}
      <div className="flex items-center gap-2 mb-6">
        <span className="diamond"></span>
        <span className="body-small text-grey-500">Our Team</span>

      </div>
      <div>
        <h2 className="heading-3 font-medium text-grey-500 mb-10 md:mb-18">
          The People Behind<br />
          Our Success
        </h2>
      </div>

      {/* Heading + Grid wrapper */}
      <div className="grid grid-cols-3 gap-6 md:gap-28 ">
        {/* Left: heading + images */}
        <div >

          <div className="flex flex-col gap-6 md:gap-10">
            <div className="overflow-hidden">
              <img src={Person1} alt="Team member" className="w-full h-auto block" />
            </div>
            <div className="overflow-hidden">
              <img src={Person4} alt="Team member" className="w-full h-auto block" />
            </div>
          </div>
        </div>

        {/* Center column — offset down to align with mid-Person1 */}
        <div className="pt-40 md:pt-24">
          <div className="flex flex-col gap-6 md:gap-10">
            <div className="overflow-hidden">
              <img src={Person2} alt="Team member" className="w-full h-auto block" />
            </div>
            <div className="overflow-hidden">
              <img src={Person5} alt="Team member" className="w-full h-auto block" />
            </div>
          </div>
        </div>

        {/* Right column — starts at top, aligned with heading */}
        <div className="-mt-28">
          <div className="flex flex-col gap-6 md:gap-10">
            <div className="overflow-hidden">
              <img src={Person3} alt="Team member" className="w-full h-auto block" />
            </div>
            <div className="overflow-hidden">
              <img src={Person6} alt="Team member" className="w-full h-auto block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
