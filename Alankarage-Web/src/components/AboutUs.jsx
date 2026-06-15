import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bigImage from '../assets/about us/Big Image.png';
import smallImage1 from '../assets/about us/Small Image 1.png';
import smallImage2 from '../assets/about us/Small Image 2.png';

const initialTimelineData = [
  {
    id: 1,
    date: "Feb, 2026",
    text: "Partner up with ShiftX technology company",
    image: smallImage1
  },
  {
    id: 2,
    date: "Sep, 2025",
    text: "Build a new large scale ML model for LLM company",
    image: smallImage2
  },
  {
    id: 3,
    date: "March, 2026",
    text: "Acquired another subsidiary and started on partnering up",
    image: smallImage1
  }
];

const AboutUs = () => {
  const [items, setItems] = useState(() =>
    initialTimelineData.map((item, i) => ({ ...item, uniqueId: i }))
  );
  const counterRef = useRef(3);

  useEffect(() => {
    const interval = setInterval(() => {
      counterRef.current += 1;
      const newId = counterRef.current;
      setItems((prev) => {
        const newItems = [...prev];
        const first = newItems.shift();
        newItems.push({ ...first, uniqueId: newId });
        return newItems;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white text-black px-[5%] py-4" id="about">
      {/* Header aligned to middle column */}
      <div className="mb-6 max-w-[1400px] md:ml-[-25px] md:pl-[calc(22%+3rem)]">
        <div className="flex items-center gap-3 text-[0.95rem] font-semibold mb-6 mt-8 md:mt-0">
          <span className="diamond"></span> About Us
        </div>
        <h2 className="text-3xl md:text-[3rem] font-normal leading-[1.15] tracking-tight">
          Enabling triumph with an extensive<br className="hidden md:block" />
          portfolio of holistic business services
        </h2>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_2.6fr_1.3fr] gap-6 md:gap-x-12 items-start max-w-[1400px] mx-auto mt-6 md:mt-0">
        
        {/* Big Image */}
        <div className="order-1 md:col-start-2 md:col-end-3 md:row-start-1 overflow-visible">
          <img src={bigImage} alt="Team meeting" className="w-full h-auto aspect-[1.3] md:aspect-[1.8] object-cover bg-gray-100" />
        </div>

        {/* Left column — paragraph */}
        <div className="order-2 md:col-start-1 md:col-end-2 md:row-start-1 md:row-span-2 mt-4 md:mt-0">
          <p className="text-gray-500 text-sm leading-[1.5]">
            As a socially-conscious firm, that is backed with cutting-edge contemporary technology. Our carefully curated services are designed to deliver efficiency, flexibility, and, above all, success. By distilling complex dilemmas into clear solutions, As an ethical firm, we set the benchmark for integrity and transparency absolutely dedicating to help our clients pursue their aspirations. We wholeheartedly believe in the value of our work, and we are committed to giving back to the greater community with the skills and experience we have honed in our repertoire.
          </p>
        </div>

        {/* Middle column — bottom text */}
        <div className="order-3 md:col-start-2 md:col-end-3 md:row-start-2 flex flex-col items-start gap-4 md:gap-2 self-start md:self-end md:max-w-[265px] md:translate-x-34">
          <p className="text-gray-500 text-sm leading-relaxed text-justify mt-2 md:mt-0">
            Our unwavering dedication to making a positive impact drives us forward, and we strive to create a brighter future for all through our purposeful endeavours.
          </p>
          <button className="hidden md:block bg-black text-white border-none self-end py-3 px-10 text-base font-medium cursor-pointer transition-colors duration-300 hover:bg-gray-800">
            About Us
          </button>
        </div>

        {/* Right column — timeline */}
        <div className="order-4 md:col-start-3 md:col-end-4 md:row-start-1 md:row-span-2 relative md:pr-10 flex flex-col gap-6 mt-8 md:mt-0 pl-[120px] md:pl-0">

          {/* Static Image Container */}
          <div className="absolute left-0 md:left-[-30px] top-[1px] w-[100px] md:w-[110px] h-[75px] md:h-[80px] overflow-hidden z-10">
            <AnimatePresence>
              <motion.img
                key={`img-${items[0].uniqueId}`}
                src={items[0].image}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: 0, opacity: 0.99 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ zIndex: items[0].uniqueId }}
                className="absolute inset-0 w-full h-full object-cover bg-gray-100"
              />
            </AnimatePresence>
          </div>

          <AnimatePresence mode="popLayout">
            {items.map((item, index) => {
              return (
                <motion.div
                  key={item.uniqueId}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative flex gap-6 items-center"
                >
                  <div className="hidden md:block w-[70px] h-[50px] shrink-0 invisible"></div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold mb-2 text-gray-800">{item.date}</h3>
                    <p className="text-sm text-gray-500 leading-normal">{item.text}</p>
                  </div>
                  <div className="timeline-marker hidden md:block"></div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Vertical timeline line */}
          <div className="timeline-line hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
