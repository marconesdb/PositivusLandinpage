import React, { useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  { number: '02', title: 'Research and Strategy Development', description: '' },
  { number: '03', title: 'Implementation', description: '' },
  { number: '04', title: 'Monitoring and Optimization', description: '' },
  { number: '05', title: 'Reporting and Communication', description: '' },
  { number: '06', title: 'Continual Improvement', description: '' },
];

const WorkingProcessSection: React.FC = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(1);

  const toggleStep = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 p-4 mt-20">
      {/* Contêiner flex para o título e subtítulo */}
      <div className="flex justify-start items-center mb-8">
        <h1 className="font-medium bg-lime-300 px-1 rounded-lg text-[40px] font-SpaceGrotesk">
          Our Working Process
        </h1>
        <p className="text-lg ml-8 font-SpaceGrotesk">
          Step-by-Step Guide to Achieving <br />
          Your Business Goals
        </p>
      </div>
      {steps.map((step, index) => (
        <div key={index} className="mb-10">
          <div
            className={`p-4 border border-black min-h-32 rounded-[30px] cursor-pointer shadow-[0px_8px_0px_rgba(0,0,0,10.5)] ${
              expandedStep === index ? 'bg-lime-300' : 'bg-neutral-100'
            }`}
            onClick={() => toggleStep(index)}
          >
            {/* Flex para centralizar verticalmente os elementos */}
            <div className="flex justify-between items-center p-8">
              <div className="flex items-center space-x-4">
                {/* Número e título centralizados */}
                <span className="text-[60px] font-SpaceGrotesk font-medium">{step.number}</span>
                <span className="text-[30px] font-SpaceGrotesk font-medium">{step.title}</span>
              </div>
              {/* Ícone expandir/recolher com background dinâmico */}
              <span
                className={`text-3xl border font-extrabold w-16 h-16 border-black rounded-full flex items-center justify-center ${
                  expandedStep === index ? 'bg-white text-black' : 'bg-neutral-100 text-black'
                }`}
              >
                {expandedStep === index ? '⁃' : '+'}
              </span>
            </div>
            {/* Descrição expandida com linha acima */}
            {expandedStep === index && step.description && (
              <div className="-mt-8 p-8 font-SpaceGrotesk">
                {/* Linha decorativa acima do texto */}
                <div className="w-full h-[1px] bg-black mb-4"></div>
                <p>{step.description}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkingProcessSection;
