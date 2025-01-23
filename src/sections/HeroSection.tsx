import React from 'react';
import AmazonLogo from '../assets/AmazonLogo.svg'
import DribbbleLogo from '../assets/DribbbleLogo.svg'; 
import HubSpotLogo from '../assets/HubSpotLogo.svg'; 
import NotionLogo from '../assets/NotionLogo.svg'; 
import NetflixLogo from '../assets/NetflixLogo.svg'; 
import ZoomLogo from '../assets/ZoomLogo.svg';
import imgIllustration from '../assets/Illustration.svg'


interface HeroProps {
  onConsultationClick?: () => void;
}

const HeroSection: React.FC<HeroProps> = ({ 
  onConsultationClick = () => console.log('Consultation button clicked')
}) => {
  const companies = [
    { name: 'Amazon', src: AmazonLogo },
    { name: 'Dribbble', src: DribbbleLogo },
    { name: 'HubSpot', src: HubSpotLogo }, 
    { name: 'Notion', src: NotionLogo },
    { name: 'Netflix', src: NetflixLogo },
    { name: 'Zoom', src: ZoomLogo },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Coluna de texto */}
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight font-SpaceGrotesk">
            Navigating the digital landscape for success
          </h1>
          <p className="text-[20px] sm:text-xl font-SpaceGrotesk  max-w-2xl">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <button
            onClick={onConsultationClick}
            className="bg-black text-white px-8 py-4 rounded-lg text-[20px] font-normal font-SpaceGrotesk  hover:bg-gray-800 transition-colors"
          >
            Book a consultation
          </button>
        </div>

       {/* Coluna da ilustração */}
       <div className="flex justify-center items-center">
        <img 
        src={imgIllustration}
        alt="Illustration" 
        className="max-w-full h-auto "
        />
</div>

        
      </div>

      {/* Logos dos clientes */}
      <div className="mt-16">
        <div className="flex max-w-7xl mx-auto gap-8 justify-between">
          <div className="grid grid-cols-2 sm:flex sm:flex-row gap-8 w-full justify-between">
            {companies.map((company) => (
              <div key={company.name} className="flex justify-center">
                <img
                  src={company.src}
                  alt={`${company.name} logo`}
                  className="h-8 sm:h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;