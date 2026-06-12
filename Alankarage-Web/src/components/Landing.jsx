import React from 'react';

const Landing = () => {
  return (
    <div className="landing-bg w-full min-h-screen bg-cover bg-center bg-no-repeat relative flex flex-col">
      <div className="landing-overlay absolute inset-0 z-[1]"></div>
      <div className="relative z-[2] flex flex-col flex-1 px-[5%] py-10 md:py-10">
        <header className="flex justify-between items-center md:flex-row flex-col md:items-center items-start gap-6 md:gap-0">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex justify-center items-center">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
                <path d="M24 2C24 2 28 10 24 16C20 10 24 2 24 2Z" fill="currentColor" />
                <path d="M24 46C24 46 20 38 24 32C28 38 24 46 24 46Z" fill="currentColor" />
                <path d="M46 24C46 24 38 28 32 24C38 20 46 24 46 24Z" fill="currentColor" />
                <path d="M2 24C2 24 10 20 16 24C10 28 2 24 2 24Z" fill="currentColor" />
                <path d="M38.5 8.5C38.5 8.5 34.5 16.5 28 14C32 9 38.5 8.5 38.5 8.5Z" fill="currentColor" />
                <path d="M9.5 39.5C9.5 39.5 13.5 31.5 20 34C16 39 9.5 39.5 9.5 39.5Z" fill="currentColor" />
                <path d="M9.5 8.5C9.5 8.5 16 9 20 14C13.5 16.5 9.5 8.5 9.5 8.5Z" fill="currentColor" />
                <path d="M38.5 39.5C38.5 39.5 32 39 28 34C34.5 31.5 38.5 39.5 38.5 39.5Z" fill="currentColor" />
                <circle cx="24" cy="24" r="3" fill="currentColor" />
              </svg>
            </div>
            <div className="text-xl tracking-wide flex flex-col leading-tight text-white">
              <span className="font-semibold">ALANKARAGE</span>
              <span className="font-light text-[0.95rem]">HOLDINGS</span>
            </div>
          </div>
          <nav>
            <ul className="flex list-none gap-6 md:gap-12 flex-wrap">
              <li><a href="#about" className="text-white/90 no-underline text-[0.95rem] font-normal transition-opacity duration-300 hover:text-white">About Us</a></li>
              <li><a href="#why" className="text-white/90 no-underline text-[0.95rem] font-normal transition-opacity duration-300 hover:text-white">Why Us</a></li>
              <li><a href="#services" className="text-white/90 no-underline text-[0.95rem] font-normal transition-opacity duration-300 hover:text-white">Services</a></li>
              <li><a href="#partners" className="text-white/90 no-underline text-[0.95rem] font-normal transition-opacity duration-300 hover:text-white">Partners</a></li>
              <li><a href="#contact" className="text-white/90 no-underline text-[0.95rem] font-normal transition-opacity duration-300 hover:text-white">Contact Us</a></li>
            </ul>
          </nav>
        </header>

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
