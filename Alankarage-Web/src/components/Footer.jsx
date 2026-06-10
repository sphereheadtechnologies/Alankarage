import React from 'react';

export default function Footer() {
  return (
    <section className="flex flex-col md:flex-row min-h-screen w-full bg-white text-gray-900 antialiased font-sans">
      
      {/* Left Column: Image Area */}
      <div className="flex-1 relative min-h-[350px] md:min-h-full bg-gray-200">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" 
          }}
        />
      </div>

      {/* Right Column: Form Area */}
      <div className="flex-1 p-8 md:p-12 lg:px-24 lg:py-20 flex flex-col justify-center">
        
        {/* Label */}
        <div className="text-sm font-medium mb-8 text-gray-800 flex items-center gap-2">
          <span className="text-[10px]">◆</span> Contact Us
        </div>
        
        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-[42px] leading-tight font-medium mb-12 tracking-tight">
          Take the first step towards transforming your ideas into substantial reality.
        </h1>
        
        {/* Form */}
        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text" 
            placeholder="Enter your name" 
            required 
            className="w-full p-4 bg-[#f5f5f5] text-gray-900 outline-none focus:bg-[#ebebeb] transition-colors placeholder:text-gray-500"
          />
          <input 
            type="email" 
            placeholder="Enter email address" 
            required 
            className="w-full p-4 bg-[#f5f5f5] text-gray-900 outline-none focus:bg-[#ebebeb] transition-colors placeholder:text-gray-500"
          />
          <input 
            type="tel" 
            placeholder="Enter your mobile number" 
            className="w-full p-4 bg-[#f5f5f5] text-gray-900 outline-none focus:bg-[#ebebeb] transition-colors placeholder:text-gray-500"
          />
          <textarea 
            placeholder="Enter your message..." 
            rows="6" 
            required 
            className="w-full p-4 bg-[#f5f5f5] text-gray-900 outline-none focus:bg-[#ebebeb] transition-colors placeholder:text-gray-500 resize-y min-h-[150px]"
          ></textarea>
          
          {/* Submit Button */}
          <div className="flex justify-end mt-2">
            <button 
              type="submit"
              className="bg-black text-white px-8 py-4 text-base cursor-pointer hover:opacity-80 transition-opacity"
            >
              Send Message
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}