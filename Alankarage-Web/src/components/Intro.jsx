import React from 'react';

const Intro = () => {
  return (
    <section className="w-full min-h-[70vh] flex items-center bg-white py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <h2 className="text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.15] font-medium text-[#111] tracking-tight">
            Driving sustainable growth through strategic thinking and proven experience
          </h2>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center">
          <p className="text-[#666] text-[0.95rem] md:text-[1.05rem] leading-[1.7] mb-12 max-w-[600px]">
            We combine extensive industry expertise with innovative thinking to deliver solutions that
            create real impact. Our approach focuses on collaboration, adaptability, and strategic
            execution, enabling organizations to navigate complexity with confidence. By aligning
            people, processes, and purpose, we build lasting partnerships that drive sustainable growth
            and meaningful success.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-8 sm:gap-0 items-start">
            {/* Feature 1 */}
            <div className="flex gap-5 sm:pr-8">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#fffcf5] border border-[#f5e6b3] rounded-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dcb349" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#111] font-medium text-[1.1rem] mb-1.5">Strategic Expertise</h3>
                <p className="text-[#666] text-[0.9rem] leading-[1.6]">
                  Turning expertise into<br className="hidden sm:block" />future-ready solutions.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-[1px] self-stretch bg-gray-200 mx-4"></div>

            {/* Feature 2 */}
            <div className="flex gap-5 sm:pl-8">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#fffcf5] border border-[#f5e6b3] rounded-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dcb349" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.4 14.4l-2.4 2.4a2 2 0 0 1-2.8 0l-3.6-3.6a2 2 0 0 1 0-2.8l2.4-2.4"></path>
                  <path d="M9.6 9.6l2.4-2.4a2 2 0 0 1 2.8 0l3.6 3.6a2 2 0 0 1 0 2.8l-2.4 2.4"></path>
                  <line x1="12" y1="12" x2="16" y2="16"></line>
                  <line x1="8" y1="16" x2="12" y2="12"></line>
                  <path d="M14 8l2 -2c1.1 -1.1 2.9 -1.1 4 0 1.1 1.1 1.1 2.9 0 4l-2 2"></path>
                  <path d="M10 16l-2 2c-1.1 1.1-2.9 1.1-4 0-1.1-1.1-1.1-2.9 0-4l2-2"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#111] font-medium text-[1.1rem] mb-1.5">Client Partnership</h3>
                <p className="text-[#666] text-[0.9rem] leading-[1.6]">
                  Building strong relationships<br className="hidden sm:block" />that deliver meaningful results.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Intro;
