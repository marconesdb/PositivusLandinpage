import React from 'react';
import { ArrowRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  return (
    <section className="w-full mx-auto max-w-7xl px-4 flex flex-col items-center bg-white mt-20">
      {/* Título e Parágrafo */}
      <div className="w-full mx-auto max-w-7xl flex items-center mb-20">
        {/* Título */}
        <h2 className="bg-lime-400 text-black font-medium px-2 rounded-lg text-[40px] font-SpaceGrotesk">
          Case Studies
        </h2>

        {/* Parágrafo */}
        <p className="ml-16 text-black text-lg font-SpaceGrotesk font-medium">
          Explore Real-Life Examples of Our Proven Digital Marketing
          <span className="block">Success through Our Case Studies</span>
        </p>
      </div>

      {/* Caixa escura */}
      <div className="w-full mx-auto max-w-7xl px-4 bg-black rounded-[50px] h-64 md:h-80 flex justify-evenly items-center">
        {/* Card 1 */}
        <div className="p-6 rounded-lg">
          <p className="px-4 mb-4 text-white  text-lg font-SpaceGrotesk -translate-y-4">
          For a local restaurant we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
          </p>
          <a href="#" className="px-4 flex items-center text-lime-400 hover:text-white -translate-y-1">
            Learn more <ArrowRight className="ml-2 w-8 h-8 transform -rotate-45" />
          </a>
        </div>

        {/* Divisor central */}
       

        {/* Card 2 */}
        <div className="p-6  border-l-2">
          <p className="px-4 mb-4 text-white  text-lg font-SpaceGrotesk -translate-y-4">
          For a B2B software company we developed an SEO strategy that resulted in a first page ranking for key keywords and a 20% increase in organic traffic.
          </p>
          <a href="#" className="px-4 flex items-center text-lime-400 hover:text-white -translate-y-2">
            Learn more <ArrowRight className="ml-2 w-8 h-8 transform -rotate-45" />
          </a>
        </div>

        <div className="p-6 border-l-2">
        <p className="px-4 mb-4 text-white text-lg font-SpaceGrotesk -translate-y-4">
        For a national retail chain  we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
        </p>
        <a href="#" className="px-4 flex items-center text-lime-400 hover:text-white -translate-y-2">
          Learn more <ArrowRight className="ml-2 w-8 h-8 transform -rotate-45" />
        </a>
      </div>

        
      </div>
    </section>
  );
};

export default CaseStudies;
