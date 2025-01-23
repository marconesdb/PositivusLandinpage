import imgMarketingCTA from '../assets/MarketingCTA.svg' 

const MarketingCTA = () => {
  return (
    <div className="mt-20 w-full max-w-7xl mx-auto px-4 ">
      <div className="sm:items-center sm:justify-center bg-gray-100 md:h-[355px] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between relative h-[350px]">
        {/* Content Section */}
        <div className="z-10 md:max-w-[45%]">
          <h2 className="text-2xl md:text-3xl font-medium font-SpaceGrotesk mb-4">
            Let's make things happen
          </h2>
          <p className="text-gray-700 mb-6 text-base md:text-lg font-normal font-SpaceGrotesk">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-base md:text-lg font-normal font-SpaceGrotesk">
            Get your free proposal
          </button>
        </div>
       
        {/* Image Section */}
        <div className="hidden md:block md:w-[45%]">
          <img
            src={imgMarketingCTA}
            alt="Marketing CTA"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketingCTA;