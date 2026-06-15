import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header ref={navRef} className="flex justify-between items-center w-full relative z-[2]">
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <img src={logoImage} alt="Alankarage Holdings" className="h-10 w-auto object-contain" />
        </Link>
      </div>

      <button 
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <nav className="hidden md:block">
        <ul className="flex list-none gap-6 md:gap-12 flex-wrap m-0 p-0">
          <li><a href="/#about" className="text-white/90 no-underline text-[0.95rem] font-normal transition-opacity duration-300 hover:text-white">About Us</a></li>
          <li><a href="/#why" className="text-white/90 no-underline text-[0.95rem] font-normal transition-opacity duration-300 hover:text-white">Why Us</a></li>
          <li><a href="/#services" className="text-white/90 no-underline text-[0.95rem] font-normal transition-opacity duration-300 hover:text-white">Services</a></li>
          <li><a href="/#subsidiaries" className="text-white/90 no-underline text-[0.95rem] font-normal transition-opacity duration-300 hover:text-white">Subsidiaries</a></li>
          <li><a href="/#partners" className="text-white/90 no-underline text-[0.95rem] font-normal transition-opacity duration-300 hover:text-white">Partners</a></li>
          <li><Link to="/contact" className="text-white/90 no-underline text-[0.95rem] font-normal transition-opacity duration-300 hover:text-white">Contact Us</Link></li>
        </ul>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#0a0a0a] z-[100] flex flex-col md:hidden"
          >
            {/* Top Bar matching main header padding */}
            <div className="flex justify-between items-center w-full px-[5%] py-6">
              <div className="flex items-center gap-2">
                <Link to="/" className="flex items-center gap-2 no-underline" onClick={() => setIsOpen(false)}>
                  <img src={logoImage} alt="Alankarage Holdings" className="h-10 w-auto object-contain" />
                </Link>
              </div>

              <button 
                onClick={() => setIsOpen(false)} 
                className="text-white p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Navigation Links */}
            <nav className="w-full px-[12%] mt-12">
              <ul className="flex flex-col list-none m-0 p-0 gap-8">
                <li className="border-b border-[#333] pb-2">
                   <a href="/#about" className="text-white/90 no-underline text-[1.05rem] font-normal tracking-wide block w-full" onClick={() => setIsOpen(false)}>About Us</a>
                </li>
                <li className="border-b border-[#333] pb-2">
                   <a href="/#why" className="text-white/90 no-underline text-[1.05rem] font-normal tracking-wide block w-full" onClick={() => setIsOpen(false)}>Why Us</a>
                </li>
                <li className="border-b border-[#333] pb-2">
                   <a href="/#services" className="text-white/90 no-underline text-[1.05rem] font-normal tracking-wide block w-full" onClick={() => setIsOpen(false)}>Services</a>
                </li>
                <li className="border-b border-[#333] pb-2">
                   <a href="/#subsidiaries" className="text-white/90 no-underline text-[1.05rem] font-normal tracking-wide block w-full" onClick={() => setIsOpen(false)}>Subsidiaries</a>
                </li>
                <li className="border-b border-[#333] pb-2">
                   <a href="/#partners" className="text-white/90 no-underline text-[1.05rem] font-normal tracking-wide block w-full" onClick={() => setIsOpen(false)}>Partners</a>
                </li>
                <li className="border-b border-[#333] pb-2">
                   <Link to="/contact" className="text-white/90 no-underline text-[1.05rem] font-normal tracking-wide block w-full" onClick={() => setIsOpen(false)}>Contact Us</Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
