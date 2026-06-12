import React from 'react';
import Navbar from './Navbar';
const Landing = () => {
  return (
    <div className="landing-bg w-full min-h-screen bg-cover bg-center bg-no-repeat relative flex flex-col">
      <div className="landing-overlay absolute inset-0 z-[1]"></div>
      <div className="relative z-[2] flex flex-col flex-1 px-[5%] py-10 md:py-10">
        <Navbar />

        <main className="mt-auto mb-16 md:mb-32 max-w-[850px]">
          <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-medium leading-[1.1] mb-6 tracking-tight text-white">
            Comprehensive services<br />to orchestrate businesses
          </h1>
          <p className="text-lg md:text-xl leading-relaxed font-normal max-w-[750px] text-white/95">
            Our carefully curated services are designed to deliver efficiency, flexibility, and, above all,<br />
            success. By distilling complex dilemmas into clear solutions,
          </p>
        </main>
      </div>
    </div>
  );
};

export default Landing;
