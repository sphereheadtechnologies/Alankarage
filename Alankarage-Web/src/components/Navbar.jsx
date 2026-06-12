import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center w-full relative z-[2]">
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2 no-underline">
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
          <li><a href="/#partners" className="text-white/90 no-underline text-[0.95rem] font-normal transition-opacity duration-300 hover:text-white">Partners</a></li>
          <li><Link to="/contact" className="text-white/90 no-underline text-[0.95rem] font-normal transition-opacity duration-300 hover:text-white">Contact Us</Link></li>
        </ul>
      </nav>

      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-black/95 md:hidden mt-4 py-4 px-6 border border-white/10">
          <ul className="flex flex-col list-none m-0 p-0 gap-6">
            <li><a href="/#about" className="text-white/90 no-underline text-[0.95rem] font-normal" onClick={() => setIsOpen(false)}>About Us</a></li>
            <li><a href="/#why" className="text-white/90 no-underline text-[0.95rem] font-normal" onClick={() => setIsOpen(false)}>Why Us</a></li>
            <li><a href="/#services" className="text-white/90 no-underline text-[0.95rem] font-normal" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="/#partners" className="text-white/90 no-underline text-[0.95rem] font-normal" onClick={() => setIsOpen(false)}>Partners</a></li>
            <li><Link to="/contact" className="text-white/90 no-underline text-[0.95rem] font-normal" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
