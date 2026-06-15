import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import bgImage from '../assets/Why Choose Us/Image 1.png';

const whyChooseUsData = [
  {
    id: 1,
    title: 'Diverse Portfolio',
    description: 'Our strong industry presence has paved the way for us to build a strong presence across multiple nations and industries. Our ability to offer our clients with bespoke portfolios that are carefully designed to align with their requirements has set us apart from our competitors.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Collaborative Approach',
    description: 'We believe transformation begins with a structured, collaborative approach that engages stakeholders early and builds trust through transparency. By aligning teams and integrating diverse perspectives, we drive meaningful and successful change.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Environmentally Responsible',
    description: 'We are committed to being an eco-friendly company with a low carbon footprint. By prioritizing energy efficiency, waste reduction, and sustainable sourcing, we minimize our environmental impact to contribute to a greener, more sustainable future.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Empowering Communities',
    description: 'Our community-based initiatives unite local and international communities to drive positive change through collaboration, advocacy, and education empowering people and ensuring community voices guide meaningful action.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  },
  {
    id: 5,
    title: 'Business Insights',
    description: 'Our expertise is rooted in meticulous data analysis, granting deep insight into operations and market dynamics. By transforming data into actionable intelligence, we empower informed decision-making and strategic planning while minimizing risk.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="12" width="4" height="8" rx="1" />
        <rect x="9" y="8" width="4" height="12" rx="1" />
        <rect x="15" y="4" width="4" height="16" rx="1" />
        <circle cx="20" cy="8" r="2" />
        <path d="M20 4v1m0 6v1m3-4h-1m-6 0h-1m4.24-2.24-.71.71m-4.06 4.06-.71.71m0-5.48.71.71m4.06 4.06.71.71" />
      </svg>
    )
  }
];

const WhyChooseUs = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current) {
        // Calculate the width manually to avoid flex container measurement glitches
        const isLg = window.innerWidth >= 1024;
        const isMd = window.innerWidth >= 768;
        
        const activeWidth = isLg ? 480 : (isMd ? 440 : 300);
        const inactiveWidth = isLg ? 280 : (isMd ? 280 : 240);
        const gap = isMd ? 24 : 16;
        
        // 5 items total: 1 active, 4 inactive
        const totalItems = whyChooseUsData.length;
        const totalCardsWidth = activeWidth + (totalItems - 1) * inactiveWidth;
        const totalGapsWidth = (totalItems - 1) * gap;
        
        // Track right padding
        const trackRightPadding = isLg ? 80 : (isMd ? 48 : 24);
        
        // Total scrollable width
        const scrollWidth = totalCardsWidth + totalGapsWidth + trackRightPadding;
        
        // Left padding of the container wrapper
        const containerLeftPadding = isLg ? 80 : (isMd ? 48 : 24);
        
        // We add an extra margin to ensure the last card isn't touching the right screen edge
        const extraMargin = 50;
        
        setMaxTranslate(Math.max(0, scrollWidth + containerLeftPadding - window.innerWidth + extraMargin));
      }
    };

    // Slight delay to ensure DOM is fully rendered before measuring
    setTimeout(updateWidth, 200);
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  const x = useMotionValue(0);

  useEffect(() => {
    const updateX = (latest) => {
      x.set(latest * -maxTranslate);
    };
    const unsubscribe = smoothProgress.on("change", updateX);
    updateX(smoothProgress.get());
    return unsubscribe;
  }, [smoothProgress, maxTranslate, x]);

  // Progress bar width
  const progressWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Update active index based on scroll progress
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      // Map the continuous scroll progress (0 to 1) to an active index
      const newIndex = Math.min(
        whyChooseUsData.length - 1,
        Math.floor(latest * whyChooseUsData.length)
      );
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, activeIndex]);

  return (
    <div ref={containerRef} className="relative bg-[#0a0a0a]" style={{ height: `${whyChooseUsData.length * 100}vh` }}>
      <section
        className="sticky top-0 h-screen w-full flex flex-col justify-between py-6 md:py-10 lg:py-16 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Top Content (Fixed in view) */}
        <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full shrink-0">
          <div className="flex items-center gap-3 mb-2 md:mb-6">
            <div className="w-2 h-2 bg-white rotate-45"></div>
            <span className="text-white text-[0.85rem] tracking-[0.1em] uppercase font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-white text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3rem] xl:text-[3rem] font-medium leading-[1.1] max-w-[900px] tracking-tight">
            Delivering premium value through decades of expertise
          </h2>
        </div>

        {/* Bottom Area (Track + Progress Bar) */}
        <div className="relative z-10 w-full flex flex-col shrink-0 min-h-0">

          {/* Scrolling Track */}
          <div className="w-full flex-1 flex items-end pl-6 md:pl-12 lg:pl-20 mb-4 md:mb-8 lg:mb-12 overflow-visible">
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex items-end gap-4 md:gap-6 pr-6 md:pr-12 lg:pr-20"
            >
              {whyChooseUsData.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <motion.div
                    key={item.id}
                    className={`flex flex-col relative transition-all duration-500 ease-in-out shrink-0 overflow-hidden ${isActive
                      ? "bg-white p-6 md:p-8 lg:p-10 w-[300px] md:w-[440px] lg:w-[480px] h-[50vh] min-h-[320px] max-h-[400px] shadow-2xl text-black"
                      : "bg-[#1a1a1a]/40 backdrop-blur-md border border-white/10 p-5 md:p-6 lg:p-8 w-[240px] md:w-[280px] h-[40vh] min-h-[240px] max-h-[320px] text-white hover:bg-[#1a1a1a]/60"
                      }`}
                  >
                    <div className="flex flex-col w-full transition-all duration-500 ease-in-out mt-auto">
                      <div className={`mb-3 md:mb-6 transition-colors duration-500 ${isActive ? 'text-black' : 'opacity-80'}`}>
                        {item.icon}
                      </div>

                      <h3
                        className={`font-medium tracking-tight transition-all duration-500 ${isActive ? 'text-[1.4rem] md:text-[1.7rem] mb-3 md:mb-4' : 'text-[1.05rem] md:text-[1.2rem] leading-[1.3]'
                          }`}
                      >
                        {item.title}
                      </h3>

                      <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                          <p className="text-[#555] text-[0.95rem] md:text-[1rem] leading-[1.6]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Progress bar */}
          <div className="px-6 md:px-12 lg:px-20 shrink-0">
            <div className="flex items-center">
              <div className="h-[2px] w-[200px] md:w-[300px] bg-white/20 relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-white"
                  style={{ width: progressWidth }}
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
