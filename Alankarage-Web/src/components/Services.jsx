import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import service1 from '../assets/Services/Services 1.png';
import service2 from '../assets/Services/Services 2.png';
import service3 from '../assets/Services/Services 3.png';
import service4 from '../assets/Services/Services 4.png';
import service5 from '../assets/Services/Services 5.png';

const servicesData = [
  {
    id: 1,
    number: '01',
    title: 'Business Consultation',
    image: service1,
    description:
      'Our streamlined and agile services pave the way for businesses to focus on growth while ensuring tranquility and confidence. Our streamlined and agile services pave the way for businesses to focus on growth while ensuring tranquility and confidence.',
  },
  {
    id: 2,
    number: '02',
    title: 'Public Relations',
    image: service2,
    description:
      'Building and maintaining a positive public image through strategic communication, media relations, and brand reputation management for sustained business growth.',
  },
  {
    id: 3,
    number: '03',
    title: 'Engineering Consultation',
    image: service3,
    description:
      'Providing expert engineering solutions and technical consultation for infrastructure projects, leveraging cutting-edge technology and industry best practices.',
  },
  {
    id: 4,
    number: '04',
    title: 'Tourism & Hospitality',
    image: service4,
    description:
      'Curating exceptional travel experiences and hospitality services that showcase cultural richness and natural beauty while fostering sustainable tourism development.',
  },
  {
    id: 5,
    number: '05',
    title: 'Gemstone Excavation & Lapidary',
    image: service5,
    description:
      'Expert gemstone mining, cutting, and polishing services with a commitment to ethical sourcing and artisanal craftsmanship in precious stone extraction.',
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const listRef = useRef(null);
  const itemRefs = useRef([]);
  const [listOffset, setListOffset] = useState(0);

  // Scroll-driven: determine active index based on scroll position within the tall container
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollableDistance = totalHeight - viewportHeight;
      const scrolled = -rect.top;

      if (scrolled <= 0) {
        setActiveIndex(0);
        return;
      }
      if (scrolled >= scrollableDistance) {
        setActiveIndex(servicesData.length - 1);
        return;
      }

      const progress = scrolled / scrollableDistance;
      const newIndex = Math.min(
        servicesData.length - 1,
        Math.floor(progress * servicesData.length)
      );
      setActiveIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Measure item positions and compute translate to center the active item
  useLayoutEffect(() => {
    const activeEl = itemRefs.current[activeIndex];
    if (!activeEl) return;

    const offset = activeEl.offsetTop + activeEl.offsetHeight / 2;
    setListOffset(offset);
  }, [activeIndex]);

  const activeService = servicesData[activeIndex];

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${servicesData.length * 100}vh` }}
    >
      <section
        className="sticky top-0 h-[100dvh] grid grid-cols-1 md:grid-cols-[1fr_1.25fr] overflow-hidden bg-[#0a0a0a]"
        id="services"
      >
        {/* Main Panel (Mobile & Desktop Left) */}
        <div className="flex flex-col h-full pt-6 md:pt-0">
          
          {/* Mobile Title */}
          <div className="md:hidden px-6 pb-5 shrink-0">
            <AnimatePresence mode="wait">
              <motion.h2
                key={`title-${activeService.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-white text-[1.7rem] font-medium tracking-tight"
              >
                {activeService.title}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Image */}
          <div className="relative w-full h-[40vh] md:h-auto md:aspect-[1.84] overflow-hidden shrink-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeService.id}
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover block"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
            </AnimatePresence>
          </div>

          <div className="flex-1 flex flex-col px-6 pt-6 pb-6 md:pt-10 md:pr-4 md:pb-10 md:pl-12 overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeService.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="text-[#999] text-[0.9rem] md:text-[1rem] leading-[1.6] md:leading-[1.7] max-w-[480px] mb-6 md:mb-auto"
              >
                {activeService.description}
              </motion.p>
            </AnimatePresence>

            <a
              href="#"
              className="flex items-center justify-between text-[#e0e0e0] no-underline text-[0.95rem] md:text-[1rem] font-normal tracking-wide pb-3 border-b border-[#444] w-full md:max-w-[440px] transition-colors duration-300 hover:text-gold hover:border-gold mb-8 md:mb-0"
            >
              <span>View More</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>

            {/* Mobile Pagination */}
            <div className="md:hidden flex items-center justify-center gap-4 mt-auto pt-4">
              {servicesData.map((service, index) => (
                <span
                  key={service.id}
                  className={`text-[0.8rem] tracking-wider transition-colors duration-300 ${
                    index === activeIndex ? 'text-[#dcb349] font-medium' : 'text-[#444]'
                  }`}
                >
                  {service.number}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel — Service List (Desktop Only) */}
        <div className="hidden md:block relative overflow-hidden">
          <div className="absolute top-[40%] left-0 right-0 px-16">
            <ul
              ref={listRef}
              className="list-none p-0 m-0 flex flex-col gap-1 w-full max-w-[520px]"
              style={{
                transform: `translateY(${-listOffset}px)`,
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {servicesData.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                  <li
                    key={service.id}
                    ref={(el) => (itemRefs.current[index] = el)}
                    className={`flex items-baseline gap-5 py-3.5 cursor-default transition-opacity duration-400 ${isActive ? 'opacity-100' : 'opacity-30'
                      }`}
                  >
                    <span
                      className={`text-sm font-semibold min-w-[28px] transition-colors duration-400 ${isActive ? 'text-[#dcb349]' : 'text-[#444]'
                        }`}
                    >
                      {service.number}
                    </span>
                    <span
                      className={`text-[2.4rem] font-medium leading-[1.15] tracking-tight transition-colors duration-400 ${isActive ? 'text-white' : 'text-[#444]'
                        }`}
                    >
                      {service.title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
