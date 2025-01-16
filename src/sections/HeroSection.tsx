import React from 'react';

interface HeroProps {
  onConsultationClick?: () => void;  // Tornando a prop opcional com ?
}

const HeroSection: React.FC<HeroProps> = ({ 
  onConsultationClick = () => console.log('Consultation button clicked') // Valor padrão
}) => {
  // Lista de logos das empresas
  const companies = [
    { name: 'Amazon', src: '/path-to-amazon-logo.png' },
    { name: 'Dribbble', src: '/path-to-dribbble-logo.png' },
    { name: 'HubSpot', src: '/path-to-hubspot-logo.png' },
    { name: 'Notion', src: '/path-to-notion-logo.png' },
    { name: 'Netflix', src: '/path-to-netflix-logo.png' },
    { name: 'Zoom', src: '/path-to-zoom-logo.png' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Coluna de texto */}
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Navigating the digital landscape for success
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <button
            onClick={onConsultationClick}
            className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Book a consultation
          </button>
        </div>

        {/* Coluna da ilustração */}
        <div className="relative">
          {/* Círculos decorativos */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-lime-400 rounded-full opacity-10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-lime-400 rounded-full opacity-10 blur-3xl" />
          
          {/* Megafone e ícones */}
          <div className="relative">
            {/* Ícones flutuantes */}
            <div className="absolute top-0 right-0 flex gap-4">
              <div className="bg-black p-2 rounded-full">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <div className="bg-lime-400 p-2 rounded-full">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                </svg>
              </div>
            </div>

            {/* Megafone */}
            <div className="w-full h-64 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-48 h-48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 11h-8v2h8v-2zm0-6h-8v2h8V5zm0 12h-8v2h8v-2zm-10 0H3v2h6v-2zM9 5H3v2h6V5zm0 6H3v2h6v-2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logos dos clientes */}
      <div className="mt-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
          {companies.map((company) => (
            <div key={company.name} className="flex justify-center">
              <img
                src={company.src}
                alt={`${company.name} logo`}
                className="h-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;