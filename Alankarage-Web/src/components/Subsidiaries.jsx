import JCLogo from '../assets/Subsidiaries/Logos/Logo1.png';
import SERENDIandMARQUISELogo from '../assets/Subsidiaries/Logos/Logo2.png';
import ALANKARAGEENGINEERINGLogo from '../assets/Subsidiaries/Logos/Logo3.png';
import TasteOfCeylonLogo from '../assets/Subsidiaries/Logos/Logo4.png';
import MaCherieJEWELSLogo from '../assets/Subsidiaries/Logos/Logo5.png';
import SEREDIBHOMESLogo from '../assets/Subsidiaries/Logos/Logo6.png';


const subsidiariesData = [
  {
    id: 1,
    name: 'JC',
    description: 'We transform homes into smart and modern',
    year: '2024',
    logo: JCLogo,
  },
  {
    id: 2,
    name: 'SERENDI & MARQUISE.',
    description: 'We pioneer exquisite jewelry with curated designs',
    year: '2023',
    logo: SERENDIandMARQUISELogo,
  },
  {
    id: 3,
    name: 'ALANKARAGE ENGINEERING',
    description: 'We deliver expert engineering consultation services.',
    year: '2021',
    logo: ALANKARAGEENGINEERINGLogo,
  },
  {
    id: 4,
    name: 'Taste Of Ceylon',
    description: 'Savor the authentic and vibrant flavors of Sri Lankan',
    year: '2020',
    logo: TasteOfCeylonLogo,
  },
  {
    id: 5,
    name: 'Ma Chérie JEWELS',
    description: 'Collection of exquisitely crafted silver jewelry',
    year: '2020',
    logo: MaCherieJEWELSLogo,
  },
  {
    id: 6,
    name: 'SEREDIB HOMES',
    description: 'We transform homes into smart and modern havens',
    year: '2019',
    logo: SEREDIBHOMESLogo,
  }
];

const Subsidiaries = () => {
  return (
    <section className="bg-white text-black py-15 lg:py-25 px-6 md:px-12 lg:px-24 font-sans relative">
      {/* Top Header Area */}
      <div className="max-w-[1000px] mb-20 md:mb-32">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 bg-black rotate-45"></div>
          <span className="text-[0.85rem] tracking-[0.1em] uppercase font-medium">Subsidiaries</span>
        </div>
        <h2 className="text-[2rem] md:text-[3.5rem] lg:text-[3.2rem] leading-[1] font-medium tracking-tight mb-12 max-w-[1000px]">
          Strengthening impact through a network<br /> of specialized subsidiaries
        </h2>
        <p className="text-[#666] text-[1.05rem] md:text-[1.1rem] leading-[1.3] max-w-[600px]">
          We take pride in our network of subsidiaries, each contributing specialized expertise that enhances our service delivery. United by excellence and innovation, our affiliates collaborate to provide tailored solutions across diverse sectors.
        </p>
      </div>

      {/* List Area */}
      <div className="w-full border-t border-black/10">
        {subsidiariesData.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col md:flex-row items-start md:items-center justify-between py-8 md:py-12 border-b border-black/10 transition-colors duration-300 hover:bg-gray-50/50"
          >
            {/* Logo Column */}
            <div className="w-full md:w-1/3 mb-4 md:mb-0 pr-4">
              <img src={item.logo} alt={`${item.name} logo`} className="h-10 md:h-12 w-auto object-contain" />
            </div>

            {/* Description Column */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0 pr-4">
              <p className="text-[#777] text-[0.95rem] md:text-[1rem] font-medium">
                {item.description}
              </p>
            </div>

            {/* Year Column */}
            <div className="w-full md:w-1/6 text-left md:text-right">
              <span className="text-[1.1rem] md:text-[1.2rem] font-medium text-[#222]">
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
