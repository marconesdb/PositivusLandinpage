import imgMarketingCTA from '../assets/MarketingCTA.svg' 

const MarketingCTA = () => {
  return (
    <div className="mt-20 w-full max-w-7xl mx-auto px-4">
      <div className="bg-gray-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-start justify-between relative h-[350px] xs:h-[440px] sm:h-[440px] md:h-[350px]">
        {/* Content Section */}
        <div className="z-10 max-w-md sm:mx-auto sm:text-center md:text-left md:mx-0">
          <h2 className="text-[30px] font-medium font-SpaceGrotesk mb-4">
            Let's make things happen
          </h2>
          <p className="text-gray-700 mb-6 text-[20px] font-normal font-SpaceGrotesk">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors text-[20px] font-normal font-SpaceGrotesk whitespace-nowrap sm:whitespace-normal">
            Get your free proposal
          </button>
        </div>
       
        {/* Image Section - Hidden on SM and XS screens */}
        <div className="z-10 absolute right-8 -top-6 hidden md:block">
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