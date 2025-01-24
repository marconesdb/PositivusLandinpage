import React from 'react';
import ArrowGreen from '../assets/Arrow-Green.svg';
import ArrowWhite from '../assets/Arrow-White.svg';
import Illustration01 from '../assets/Illustration-01.svg';
import Illustration02 from '../assets/Illustration-02.svg';
import Illustration03 from '../assets/Illustration-03.png';
import Illustration04 from '../assets/Illustration-04.svg';
import Illustration05 from '../assets/Illustration-05.png';
import Illustration06 from '../assets/Illustration-06.png';

interface ServiceCardProps {
  title: string;
  bgColor?: 'light' | 'black' | 'green' | string;
  rightImage?: string;
  learnMoreIcon?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  bgColor = 'greyCustom',
  rightImage,
  learnMoreIcon,
}) => {
  const getBgColor = () => {
    switch (bgColor) {
      case 'black':
        return 'bg-black';
      case 'green':
        return 'bg-lime-300';
      case 'light':
        return 'bg-gray-100';
      default:
        return bgColor.startsWith('#') ? '' : 'bg-gray-100';
    }
  };

  const getTextColor = () => {
    return bgColor === 'black' ? 'text-white' : 'text-black';
  };

  const getTitleBgColor = () => {
    switch (bgColor) {
      case 'black':
        return 'bg-white';
      case 'green':
        return 'bg-white';
      default:
        return 'bg-lime-300';
    }
  };

  const shadowClass = bgColor === 'black' ? '' : 'shadow-[0px_8px_0px_rgba(0,0,0,10.5)]';

  const customStyles = bgColor.startsWith('#')
    ? { backgroundColor: bgColor, boxShadow: '0px 8px 0px rgba(0, 0, 0, 10.5)' }
    : {};

  const getTitleLines = (title: string) => {
    const titleMap: { [key: string]: string[] } = {
      'Search engine optimization': ['Search engine', 'optimization'],
      'Pay-per-click advertising': ['Pay-per-click', 'advertising'],
      'Social Media Marketing': ['Social Media', 'Marketing'],
      'Email Marketing': ['Email', 'Marketing'],
      'Content Creation': ['Content', 'Creation'],
      'Analytics and Tracking': ['Analytics and', 'Tracking'],
    };

    return titleMap[title] || [title];
  };

  const titleLines = getTitleLines(title);

  return (
    <div
      className={`${getBgColor()} ${shadowClass} rounded-[20px] md:rounded-[50px] p-4 md:p-12 relative overflow-hidden min-h-[180px] md:min-h-[300px] border border-black mt-3 md:mt-6`}
      style={customStyles}
    >
      <div className="relative z-10">
        <h3 className="flex flex-col items-start text-lg md:text-[30px] font-medium leading-none max-w-[65%]">
          {titleLines.map((line, index) => (
            <span
              key={index}
              className={`${getTitleBgColor()} px-2 md:px-3 py-1 rounded-md ${bgColor === 'dark' ? 'text-black' : 'text-black'} mb-1`}
            >
              {line}
            </span>
          ))}
        </h3>
      </div>
      {rightImage && (
        <div className="absolute right-4 md:right-12 top-1/2 transform -translate-y-1/2 w-24 md:w-44">
          <img
            src={rightImage}
            alt={`${title} illustration`}
            className="w-full h-auto object-contain pointer-events-none"
          />
        </div>
      )}
      <button className="flex items-center space-x-2 absolute bottom-4 md:bottom-8 left-4 md:left-12 hover:opacity-80 z-10">
        {learnMoreIcon && (
          <img
            src={learnMoreIcon}
            alt={`${title} icon`}
            className="w-6 h-6 md:w-10 md:h-10"
          />
        )}
        <span className={`font-SpaceGrotesk font-normal text-sm md:text-[20px] ${getTextColor()}`}>
          Learn more
        </span>
      </button>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: 'Search engine optimization',
      bgColor: '#F3F3F3',
      rightImage: Illustration01,
      learnMoreIcon: ArrowGreen,
    },
    {
      title: 'Pay-per-click advertising',
      bgColor: 'green',
      rightImage: Illustration02,
      learnMoreIcon: ArrowGreen,
    },
    {
      title: 'Social Media Marketing',
      bgColor: 'black',
      rightImage: Illustration03,
      learnMoreIcon: ArrowWhite,
    },
    {
      title: 'Email Marketing',
      bgColor: '#F3F3F3',
      rightImage: Illustration04,
      learnMoreIcon: ArrowGreen,
    },
    {
      title: 'Content Creation',
      bgColor: 'green',
      rightImage: Illustration05,
      learnMoreIcon: ArrowGreen,
    },
    {
      title: 'Analytics and Tracking',
      bgColor: 'black',
      rightImage: Illustration06,
      learnMoreIcon: ArrowWhite,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 md:py-8">
      <div className="mb-4 md:mb-8 flex flex-col md:flex-row">
        <h2 className="mr-8 bg-lime-300 text-black font-medium  px-2 rounded-lg text-[40px] font-SpaceGrotesk">
          Services
        </h2>
        <p className="text-black md:ml-8 text-sm md:text-lg font-SpaceGrotesk font-medium max-w-[580px]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 md:gap-12">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            bgColor={service.bgColor}
            rightImage={service.rightImage}
            learnMoreIcon={service.learnMoreIcon}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;