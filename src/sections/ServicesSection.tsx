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
  bgColor?: 'light' | 'dark' | 'green' | string;
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
      case 'dark':
        return 'bg-gray-900';
      case 'green':
        return 'bg-lime-300';
      case 'light':
        return 'bg-gray-100';
      default:
        return bgColor.startsWith('#') ? '' : 'bg-gray-100';
    }
  };

  const getTextColor = () => {
    return bgColor === 'dark' ? 'text-white' : 'text-black';
  };

  const getTitleBgColor = () => {
    switch (bgColor) {
      case 'dark':
        return 'bg-white';
      case 'green':
        return 'bg-white'; // Alterado para branco quando o card é verde
      default:
        return 'bg-lime-300';
    }
  };

  const shadowClass = bgColor === 'dark' ? '' : 'shadow-[0px_8px_0px_rgba(0,0,0,10.5)]';

  const customStyles = bgColor.startsWith('#')
    ? { backgroundColor: bgColor, boxShadow: '0px 8px 0px rgba(0, 0, 0, 10.5)' }
    : {};

  // Function to split title based on predefined breaks
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
      className={`${getBgColor()} ${shadowClass} rounded-[50px] p-12 relative overflow-hidden min-h-[300px] border border-black`}
      style={customStyles}
    >
      {rightImage && (
        <img
          src={rightImage}
          alt={`${title} illustration`}
          className="absolute right-12 top-1/2 transform -translate-y-1/2 w-52 h-52 object-contain pointer-events-none"
        />
      )}
      <div className="flex flex-col gap-1">
        <h3 className="flex flex-col  items-start text-[30px] font-medium leading-none">
          {titleLines.map((line, index) => (
            <span 
              key={index}
              className={`${getTitleBgColor()} px-3 py-1 rounded-md ${bgColor === 'dark' ? 'text-black' : 'text-black'}`}
            >
              {line}
            </span>
          ))}
        </h3>
      </div>
      <button className="flex items-center space-x-2 absolute bottom-8 left-12 hover:opacity-80">
        {learnMoreIcon && (
          <img
            src={learnMoreIcon}
            alt={`${title} icon`}
            className="w-10 h-10"
          />
        )}
        <span className={`font-SpaceGrotesk font-normal text-[20px] ${getTextColor()}`}>
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
      bgColor: 'dark',
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
      bgColor: 'dark',
      rightImage: Illustration06,
      learnMoreIcon: ArrowWhite,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8 flex">
        <h2 className="inline-block bg-lime-300 px-3 py-1 rounded-md text-[30px] font-medium mb-4 font-SpaceGrotesk">
          Services
        </h2>
        <p className="text-black ml-8 text-lg font-SpaceGrotesk font-medium max-w-[580px]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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