import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import BottomFooter from '../components/BottomFooter';
import wtcImage from '../assets/Footer/wtc.png';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div 
        className="relative w-full h-[30vh] bg-cover bg-center grayscale flex flex-col"
        style={{ backgroundImage: `url(${wtcImage})` }}
      >
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>
        <div className="relative z-[2] flex-1 flex items-center pt-24 pb-12 md:pb-20 px-8 md:px-12 lg:px-20">
          <div className="max-w-[1400px] w-full mx-auto">
            <h1 className="text-white heading-1">
              Connect with us
            </h1>
          </div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="max-w-[1400px] w-full mx-auto px-8 md:px-12 lg:px-20 py-16 md:py-24 flex-1">
        <h2 className="heading-3 mb-6">Get in touch</h2>
        <p className="text-gray-500 body-medium mb-16 max-w-[800px]">
          Thank you for reaching out! Whether you want to learn more about us, schedule an appointment, talk to us about your requirements or discuss the opportunities of how we can help, feel free to contact us below. A member from our team will get back to you shortly.
        </p>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left: Contact Info */}
          <div className="flex flex-col gap-8 lg:gap-12 w-full lg:w-[300px] shrink-0">
            <div className="w-full">
              <h4 className="body-medium font-bold text-gray-800 tracking-[0.1em] uppercase mb-4">Location</h4>
              <p className="text-gray-500 body-medium">
                Level 05, East Lower Block,<br />
                Echelon Square,<br />
                World Trade Centre,<br />
                Colombo 01
              </p>
            </div>
            <div className="flex flex-row justify-between gap-4 lg:flex-col lg:gap-12 w-full">
              <div className="flex-1">
                <h4 className="body-medium font-bold text-gray-800 tracking-[0.1em] uppercase mb-4">Email</h4>
                <a href="mailto:info@alankarage.com" className="text-gray-500 body-medium hover:text-black transition-colors break-words">
                  info@alankarage.com
                </a>
              </div>
              <div className="flex-1">
                <h4 className="body-medium font-bold text-gray-800 tracking-[0.1em] uppercase mb-4">Contact Number</h4>
                <a href="tel:+94766666688" className="text-gray-500 body-medium hover:text-black transition-colors">
                  +94 76 666 6688
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="flex-1">
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="w-full p-4 bg-[#f8f8f8] border-none outline-none body-medium placeholder:text-gray-400 focus:bg-[#f0f0f0] transition-colors"
              />
              <input 
                type="email" 
                placeholder="Enter email address" 
                className="w-full p-4 bg-[#f8f8f8] border-none outline-none body-medium placeholder:text-gray-400 focus:bg-[#f0f0f0] transition-colors"
              />
              <input 
                type="tel" 
                placeholder="Enter your mobile number" 
                className="w-full p-4 bg-[#f8f8f8] border-none outline-none body-medium placeholder:text-gray-400 focus:bg-[#f0f0f0] transition-colors"
              />
              <textarea 
                placeholder="Enter your message..." 
                rows="6"
                className="w-full p-4 bg-[#f8f8f8] border-none outline-none body-medium placeholder:text-gray-400 focus:bg-[#f0f0f0] transition-colors resize-y"
              ></textarea>
              <div className="flex justify-end mt-2">
                <button 
                  type="submit"
                  className="bg-black text-white px-8 py-3 body-medium cursor-pointer hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[450px] relative mt-auto bg-gray-200">
        <iframe
          title="Alankarage Holdings Location"
          src="https://maps.google.com/maps?q=World%20Trade%20Center,%20Colombo&t=&z=14&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Footer */}
      <BottomFooter />
    </div>
  );
};

export default ContactUs;
