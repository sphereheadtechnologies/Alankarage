import JCLogo from '../assets/Subsidiaries/Logos/Logo1.png';
import SERENDIandMARQUISELogo from '../assets/Subsidiaries/Logos/Logo2.png';
import ALANKARAGEENGINEERINGLogo from '../assets/Subsidiaries/Logos/Logo3.png';
import TasteOfCeylonLogo from '../assets/Subsidiaries/Logos/Logo4.png';
import MaCherieJEWELSLogo from '../assets/Subsidiaries/Logos/Logo5.png';
import SEREDIBHOMESLogo from '../assets/Subsidiaries/Logos/Logo6.png';

import JCWhiteLogo from '../assets/Subsidiaries/Logos/white_logos/White logo/Logo1.png';
import SERENDIandMARQUISEWhiteLogo from '../assets/Subsidiaries/Logos/white_logos/White logo/Logo2.png';
import ALANKARAGEENGINEERINGWhiteLogo from '../assets/Subsidiaries/Logos/white_logos/White logo/Logo3.png';
import TasteOfCeylonWhiteLogo from '../assets/Subsidiaries/Logos/white_logos/White logo/Logo4.png';
import MaCherieJEWELSWhiteLogo from '../assets/Subsidiaries/Logos/white_logos/White logo/Logo5.png';
import SEREDIBHOMESWhiteLogo from '../assets/Subsidiaries/Logos/white_logos/White logo/Logo6.png';

import webBg1 from '../assets/Subsidiaries/MobileBackgrounds/web/bg1.png';
import webBg2 from '../assets/Subsidiaries/MobileBackgrounds/web/bg2.png';
import webBg3 from '../assets/Subsidiaries/MobileBackgrounds/web/bg3.png';
import webBg4 from '../assets/Subsidiaries/MobileBackgrounds/web/bg4.png';
import webBg5 from '../assets/Subsidiaries/MobileBackgrounds/web/bg5.png';
import webBg6 from '../assets/Subsidiaries/MobileBackgrounds/web/bg6.png';

import mobileBg1 from '../assets/Subsidiaries/MobileBackgrounds/mobile/bg1.png';
import mobileBg2 from '../assets/Subsidiaries/MobileBackgrounds/mobile/bg2.png';
import mobileBg3 from '../assets/Subsidiaries/MobileBackgrounds/mobile/bg3.png';
import mobileBg4 from '../assets/Subsidiaries/MobileBackgrounds/mobile/bg4.png';
import mobileBg5 from '../assets/Subsidiaries/MobileBackgrounds/mobile/bg5.png';
import mobileBg6 from '../assets/Subsidiaries/MobileBackgrounds/mobile/bg6.png';

const subsidiariesData = [
  {
    id: 1,
    name: 'JC',
    description: 'We transform homes into smart and modern',
    year: '2024',
    logo: JCLogo,
    whiteLogo: JCWhiteLogo,
    mobileBg: mobileBg1,
    webBg: webBg1,
  },
  {
    id: 2,
    name: 'SERENDI & MARQUISE.',
    description: 'We pioneer exquisite jewelry with curated designs',
    year: '2023',
    logo: SERENDIandMARQUISELogo,
    whiteLogo: SERENDIandMARQUISEWhiteLogo,
    mobileBg: mobileBg2,
    webBg: webBg2,
  },
  {
    id: 3,
    name: 'ALANKARAGE ENGINEERING',
    description: 'We deliver expert engineering consultation services.',
    year: '2021',
    logo: ALANKARAGEENGINEERINGLogo,
    whiteLogo: ALANKARAGEENGINEERINGWhiteLogo,
    mobileBg: mobileBg3,
    webBg: webBg3,
  },
  {
    id: 4,
    name: 'Taste Of Ceylon',
    description: 'Savor the authentic and vibrant flavors of Sri Lankan',
    year: '2020',
    logo: TasteOfCeylonLogo,
    whiteLogo: TasteOfCeylonWhiteLogo,
    mobileBg: mobileBg4,
    webBg: webBg4,
  },
  {
    id: 5,
    name: 'Ma Chérie JEWELS',
    description: 'Collection of exquisitely crafted silver jewelry',
    year: '2020',
    logo: MaCherieJEWELSLogo,
    whiteLogo: MaCherieJEWELSWhiteLogo,
    mobileBg: mobileBg5,
    webBg: webBg5,
  },
  {
    id: 6,
    name: 'SEREDIB HOMES',
    description: 'We transform homes into smart and modern havens',
    year: '2019',
    logo: SEREDIBHOMESLogo,
    whiteLogo: SEREDIBHOMESWhiteLogo,
    mobileBg: mobileBg6,
    webBg: webBg6,
  }
];

const Subsidiaries = () => {
  return (
    <section className="bg-white text-black py-15 lg:py-25 px-6 md:px-12 lg:px-24 font-sans relative">
      {/* Top Header Area */}
      <div className="max-w-[1000px] mb-12 md:mb-32">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 bg-black rotate-45"></div>
          <span className="text-[0.85rem] tracking-[0.1em] uppercase font-medium">Subsidiaries</span>
        </div>
        <h2 className="text-[2rem] md:text-[3.5rem] lg:text-[3.2rem] leading-[1.1] font-medium tracking-tight mb-6 md:mb-12 max-w-[1000px]">
          Strengthening impact through a network of specialized subsidiaries
        </h2>
        <p className="text-[#666] text-[1rem] md:text-[1.1rem] leading-[1.5] max-w-[600px]">
          We take pride in our network of subsidiaries, each contributing specialized expertise that enhances our service delivery. United by excellence and innovation, our affiliates collaborate to provide tailored solutions across diverse sectors.
        </p>
      </div>

      {/* List Area */}
      <div className="w-full md:border-t border-black/10 flex flex-col gap-12 md:gap-0">
        {subsidiariesData.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col md:flex-row items-start md:items-center justify-between md:py-12 border-b border-black/10 transition-all duration-300 hover:bg-[#0A0A0A] hover:border-transparent md:px-8 md:-mx-8 hover:z-50"
          >
            {/* Mobile View: Image Card */}
            <div className="md:hidden w-full flex items-end pb-8">
              {/* Image Container */}
              <div className="relative w-[75%] sm:w-[80%] aspect-[3/2] bg-gray-100 overflow-hidden">
                {item.mobileBg ? (
                  <img src={item.mobileBg} alt={`${item.name} background`} className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 bg-[#d9d9d9] mix-blend-multiply opacity-50"></div>
                )}
              </div>

              {/* Connecting Line */}
              <div className="flex-1 h-[1px] bg-gray-300 mb-1"></div>

              {/* Year text */}
              <div className="pl-3 pr-1 text-black font-medium leading-none mb-[0.1rem]">
                <span className="text-[1rem] sm:text-[1.1rem]">{item.year}</span>
              </div>
            </div>

            {/* Desktop View Elements */}
            {/* Hover Image Pop-out (Centered in row) */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] lg:w-[400px] aspect-[4/3] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-50 scale-95 group-hover:scale-100 shadow-2xl pointer-events-none">
              <img src={item.webBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            {/* Logo Column */}
            <div className="hidden md:flex w-full md:w-[45%] mb-4 md:mb-0 pr-4 relative z-20 items-center">
              <div className="relative w-[140px] md:w-[200px] h-[1.5rem] md:h-[2rem]">
                <img src={item.logo} alt={`${item.name} logo`} className="absolute inset-0 w-full h-full object-contain object-left transition-opacity duration-300 group-hover:opacity-0" />
                <img src={item.whiteLogo} alt={`${item.name} white logo`} className="absolute inset-0 w-full h-full object-contain object-left transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              </div>
            </div>

            {/* Description Column */}
            <div className="hidden md:flex w-full md:w-[40%] mb-4 md:mb-0 pr-4 relative items-center z-10">
              <p className="text-[#777] text-[0.85rem] md:text-[0.95rem] font-medium group-hover:opacity-0 transition-opacity duration-300">
                {item.description}
              </p>
            </div>

            {/* Year Column */}
            <div className="hidden md:flex w-full md:w-[15%] justify-end relative z-20 items-center">
              <span className="text-[1rem] md:text-[1.1rem] font-medium text-[#222] group-hover:text-white transition-colors duration-300">
                {item.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Subsidiaries;
