import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import BottomFooter from '../components/BottomFooter';
import Services from '../components/Services';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#0a0a0a]">
      <Navbar />
      <div className="flex-1 w-full relative">
        <Services />
      </div>
      <BottomFooter />
    </div>
  );
};

export default ServicesPage;
