import React from 'react';
import { ArrowRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  return (
    <section className="w-full mx-auto max-w-7xl px-4 flex flex-col items-center bg-white mt-20">
      {/* Título e Parágrafo */}
      <div className="w-full mx-auto max-w-7xl flex max-[640px]:flex-col min-[768px]:flex items-center mb-20">
        {/* Título */}
        <h2 className="bg-lime-400 text-black font-medium px-2 rounded-lg text-[40px] font-SpaceGrotesk">
          Case Studies
        </h2>
        {/* Parágrafo */}
        <p className="ml-16 max-[640px]:ml-0 max-[640px]:text-center max-[640px]:mt-4 min-[640px]:mt-0 min-[768px]:mt-0 text-black text-lg font-SpaceGrotesk font-medium md:text-base md:ml-8">
          Explore Real-Life Examples of Our Proven Digital Marketing
          <span className="block min-[768px]:inline">Success through Our Case Studies</span>
        </p>
      </div>
      {/* Caixa escura */}
      <div className="w-full mx-auto max-w-7xl px-4 bg-black rounded-[50px] h-64 max-[640px]:h-[400px] min-[640px]:h-[400px] md:h-96 flex max-[640px]:flex-col min-[640px]:flex-col min-[768px]:flex-row justify-evenly items-center">
        <div className="max-[640px]:w-full max-[640px]:overflow-x-auto max-[640px]:snap-x max-[640px]:snap-mandatory min-[640px]:w-full min-[640px]:overflow-x-auto min-[640px]:snap-x min-[640px]:snap-mandatory min-[768px]:w-full min-[768px]:overflow-visible">
          <div className="flex max-[640px]:w-[300%] min-[640px]:w-[300%] min-[768px]:w-full">
            {/* Card 1 */}
            <div className="p-6 rounded-lg max-[640px]:w-full max-[640px]:snap-center min-[640px]:w-full min-[640px]:snap-center min-[768px]:w-auto min-[768px]:snap-none md:w-1/3">
              <p className="px-4 mb-4 text-white text-lg font-SpaceGrotesk -translate-y-4 md:text-sm md:leading-relaxed">
                For a local restaurant we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
              </p>
              <a href="#" className="px-4 flex items-center text-lime-400 hover:text-white -translate-y-1 md:text-sm">
                Learn more <ArrowRight className="ml-2 w-8 h-8 transform -rotate-45 md:w-6 md:h-6" />
              </a>
            </div>
            {/* Card 2 */}
            <div className="p-6 border-l-2 max-[640px]:w-full max-[640px]:snap-center min-[640px]:w-full min-[640px]:snap-center min-[768px]:w-auto min-[768px]:snap-none md:w-1/3">
              <p className="px-4 mb-4 text-white text-lg font-SpaceGrotesk -translate-y-4 md:text-sm md:leading-relaxed">
                For a B2B software company we developed an SEO strategy that resulted in a first page ranking for key keywords and a 20% increase in organic traffic.
              </p>
              <a href="#" className="px-4 flex items-center text-lime-400 hover:text-white -translate-y-2 md:text-sm">
                Learn more <ArrowRight className="ml-2 w-8 h-8 transform -rotate-45 md:w-6 md:h-6" />
              </a>
            </div>
            {/* Card 3 */}
            <div className="p-6 border-l-2 max-[640px]:w-full max-[640px]:snap-center min-[640px]:w-full min-[640px]:snap-center min-[768px]:w-auto min-[768px]:snap-none md:w-1/3">
              <p className="px-4 mb-4 text-white text-lg font-SpaceGrotesk -translate-y-4 md:text-sm md:leading-relaxed">
                For a national retail chain we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
              </p>
              <a href="#" className="px-4 flex items-center text-lime-400 hover:text-white -translate-y-2 md:text-sm">
                Learn more <ArrowRight className="ml-2 w-8 h-8 transform -rotate-45 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;