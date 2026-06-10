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
      <div className="mb-6 max-w-[1400px] ml-[-25px] pl-[calc(22%+3rem)]">
        <div className="flex items-center gap-3 text-[0.95rem] font-semibold mb-6">
          <span className="diamond"></span> About Us
        </div>
        <h2 className="text-3xl md:text-[3rem] font-normal leading-[1.15] tracking-tight">
          Enabling triumph with an extensive<br />
          portfolio of holistic business services
        </h2>
      </div>

      {/* 3-column grid */}
      <div className="grid grid-cols-[1.1fr_2.6fr_1.3fr] gap-12 items-start max-w-[1400px] mx-auto">

        {/* Left column — paragraph */}
        <div>
          <p className="text-gray-500 text-sm leading-[1.5]">
            As a socially-conscious firm, that is backed with cutting-edge contemporary technology. Our carefully curated services are designed to deliver efficiency, flexibility, and, above all, success. By distilling complex dilemmas into clear solutions, As an ethical firm, we set the benchmark for integrity and transparency absolutely dedicating to help our clients pursue their aspirations. We wholeheartedly believe in the value of our work, and we are committed to giving back to the greater community with the skills and experience we have honed in our repertoire.
          </p>
        </div>

        {/* Middle column — big image + bottom text */}
        <div className="flex flex-col gap-6 overflow-visible">
          <img src={bigImage} alt="Team meeting" className="w-full h-auto aspect-[1.8] object-cover bg-gray-100" />
          <div className="flex flex-col items-start gap-2 self-end max-w-[265px] translate-x-34">
            <p className="text-gray-500 text-sm leading-relaxed text-justify ">
              Our unwavering dedication to making a positive impact drives us forward, and we strive to create a brighter future for all through our purposeful endeavours.
            </p>
            <button className="bg-black text-white border-none self-end py-3 px-10 text-base font-medium cursor-pointer transition-colors duration-300 hover:bg-gray-800">
              About Us
            </button>
          </div>
        </div>

        {/* Right column — timeline */}
        <div className="relative pr-10 flex flex-col gap-6 ">

          {/* Static Image Container */}
          <div className="absolute left-[-30px] top-[1px] w-[110px] h-[80px] overflow-hidden z-10">
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
                  <div className="w-[70px] h-[50px] shrink-0 invisible"></div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold mb-2 text-gray-800">{item.date}</h3>
                    <p className="text-sm text-gray-500 leading-normal">{item.text}</p>
                  </div>
                  <div className="timeline-marker"></div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Vertical timeline line */}
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
