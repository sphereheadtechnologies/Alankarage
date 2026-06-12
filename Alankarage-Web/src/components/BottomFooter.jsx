import React from 'react';

const BottomFooter = () => {
  return (
    <footer className="bg-white text-gray-900 font-sans border-t border-gray-300">
      {/* Bordered container — top line and bottom bar all connect */}
      <div className="px-8 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">

          {/* Main Footer Content */}
          <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr_0.8fr_1.5fr] gap-12 lg:gap-16 py-12">

            {/* Left Column (Desktop) / Top Section (Mobile) */}
            <div className="flex flex-col gap-8 lg:pr-12">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex justify-center items-center">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-black">
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
                <div className="text-xl tracking-wide flex flex-col leading-tight">
                  <span className="font-semibold">ALANKARAGE</span>
                  <span className="font-light text-[0.95rem]">HOLDINGS</span>
                </div>
              </div>

              {/* Text */}
              <p className="body-medium text-gray-700 max-w-[400px]">
                We wholeheartedly believe in the value of our work, and we are committed to giving back to the greater community with the skills and experience we have honed in our repertoire.
              </p>

              {/* Desktop Button */}
              <div className="hidden lg:block">
                <a
                  href="/contact"
                  className="inline-block bg-black text-white no-underline px-8 py-3 body-medium font-medium cursor-pointer hover:bg-gray-800 transition-colors duration-300"
                >
                  Contact us
                </a>
              </div>
            </div>

            {/* Mobile 2-column Grid Container */}
            <div className="grid grid-cols-[1.2fr_0.8fr] gap-8 lg:contents">
              
              {/* Middle Column (Desktop) / Right Column (Mobile) */}
              <div className="flex flex-col gap-4 lg:px-12 order-2 lg:order-none">
                <a href="/#about" className="text-gray-700 no-underline body-medium font-normal transition-colors duration-300 hover:text-black">About Us</a>
                <a href="/#why" className="text-gray-700 no-underline body-medium font-normal transition-colors duration-300 hover:text-black">Why Us</a>
                <a href="/#services" className="text-gray-700 no-underline body-medium font-normal transition-colors duration-300 hover:text-black">Services</a>
                <a href="/#partners" className="text-gray-700 no-underline body-medium font-normal transition-colors duration-300 hover:text-black">Partners</a>
                <a href="/contact" className="text-gray-700 no-underline body-medium font-normal transition-colors duration-300 hover:text-black">Contact Us</a>
              </div>

              {/* Right Column (Desktop) / Left Column (Mobile) */}
              <div className="flex flex-col gap-8 order-1 lg:order-none">
                {/* Address */}
                <div>
                  <h4 className="body-medium tracking-[0.15em] uppercase font-medium text-gray-400 mb-2">Address</h4>
                  <p className="body-medium text-gray-700 max-w-[320px]">
                    Level 05, East Lower Block,<br />
                    Echelon Square,<br />
                    World Trade Centre,<br />
                    Colombo 01
                  </p>
                </div>

                {/* Website */}
                <div>
                  <h4 className="body-medium tracking-[0.15em] uppercase font-medium text-gray-400 mb-2">Website</h4>
                  <a href="mailto:info@alankarage.com" className="body-medium text-gray-700 no-underline hover:text-black transition-colors duration-300 break-words">
                    info@alankarage.com
                  </a>
                </div>

                {/* Contact Number */}
                <div>
                  <h4 className="body-medium tracking-[0.15em] uppercase font-medium text-gray-400 mb-2">Contact Number</h4>
                  <a href="tel:+94766666688" className="body-medium text-gray-700 no-underline hover:text-black transition-colors duration-300">
                    +94 76 666 6688
                  </a>
                </div>

                {/* Mobile Button */}
                <div className="lg:hidden mt-2">
                  <a
                    href="/contact"
                    className="inline-block bg-black text-white no-underline px-8 py-3 body-medium font-medium cursor-pointer hover:bg-gray-800 transition-colors duration-300"
                  >
                    Contact us
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300">
        <div className="px-6 md:px-12 lg:px-20 py-8 md:py-5">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
            
            {/* Legal Links */}
            <div className="flex items-center justify-between w-full md:w-auto gap-2 md:gap-12 order-1 md:order-2">
              <a href="#" className="body-small tracking-[0.1em] md:tracking-[0.12em] uppercase font-medium text-gray-700 no-underline hover:text-gray-900 transition-colors duration-300 text-center">
                Privacy Policy
              </a>
              <a href="#" className="body-small tracking-[0.1em] md:tracking-[0.12em] uppercase font-medium text-gray-700 no-underline hover:text-gray-900 transition-colors duration-300 text-center">
                Legal Policies
              </a>
              <a href="#" className="body-small tracking-[0.1em] md:tracking-[0.12em] uppercase font-medium text-gray-700 no-underline hover:text-gray-900 transition-colors duration-300 text-center">
                Terms of Services
              </a>
            </div>

            {/* Copyright */}
            <p className="body-small uppercase text-gray-400 text-center md:text-left order-2 md:order-1 mt-2 md:mt-0">
              2026 © ALANKARAGE HOLDINGS SRI LANKA | ALL RIGHTS RESERVED.<br className="md:hidden" />
              DESIGNED AND DEVELOPED BY SPHEREHEAD
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BottomFooter;
