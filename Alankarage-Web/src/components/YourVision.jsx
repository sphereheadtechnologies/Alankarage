import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import yourVisionImg from '../assets/YourVision/YourVision.png';

const YourVision = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  console.log("YourVision Image URL:", yourVisionImg);

  // Scale the image subtly from 1 to 1.2 instead of over-expanding
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1.4]);

  // Keep the label fully visible for the first 60% of the scroll, then fade it out
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [1, 1, 0, 0]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-black text-white">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

        {/* Top left section title */}
        <motion.div
          style={{ opacity }}
          className="absolute top-8 left-8 md:top-12 md:left-12 flex items-center gap-2 text-sm text-gray-400 z-10"
        >
          <span className="text-white">♦</span> Your Vision
        </motion.div>

        {/* The zooming image */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <motion.div
            style={{ scale }}
            className="w-1/2 aspect-video overflow-hidden bg-gray-800"
          >
            <img
              src={yourVisionImg}
              alt="Your Vision"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center pointer-events-none gap-10 md:gap-0">

          {/* Left Text */}
          <div className="max-w-xl pointer-events-auto">
            <h2 className="heading-3 md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight tracking-wide">
              Connect with our expert<br />
              team committed to<br />
              timeless sophistication.
            </h2>
          </div>

          {/* Right Text */}
          <div className="flex flex-col md:items-end gap-6 text-left md:text-right pointer-events-auto mt-8 md:mt-0">
            <div className="space-y-3">
              <h3 className="text-xs tracking-[0.2em] text-gray-400 uppercase">Address</h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-300 max-w-sm">
                Level 05, East Lower Block, Echelon Square,<br />
                World Trade Center, Bank of Ceylon<br />
                Mawatha, Colombo 00100, Sri Lanka
              </p>
            </div>
            <button className="bg-white text-black px-4 py-2 text-sm font-medium border-[6px] border-white hover:border-gray-200 hover:scale-110 transition-all duration-300 w-fit">
              About Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default YourVision;
