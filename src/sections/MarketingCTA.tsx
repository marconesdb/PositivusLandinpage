import imgMarketingCTA from '../assets/MarketingCTA.svg' 

const MarketingCTA = () => {
  return (
    <div className="mt-20 w-full max-w-7xl mx-auto px-4">
      <div className="bg-gray-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-start justify-between relative h-[200px] md:h-[350px]">
        {/* Content Section */}
        <div className="z-10 max-w-md">
          <h2 className="text-[30px] font-medium font-SpaceGrotesk mb-4">
            Let's make things happen
          </h2>
          <p className="text-gray-700 mb-6 text-[20px] font-normal font-SpaceGrotesk">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-[20px] font-normal font-SpaceGrotesk">
            Get your free proposal
          </button>
        </div>

        {/* Image Section */}
        <div className="z-10 absolute right-8 -top-20 md:-top-6">
          <img 
            src={imgMarketingCTA} 
            alt="Marketing CTA"
            className="w-[300px] md:w-[500px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketingCTA;