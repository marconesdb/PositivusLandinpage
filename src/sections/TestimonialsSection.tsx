import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import img1 from '../assets/Bubble.svg';
import starWhite from '../assets/starWhite.svg';
import starGreen from '../assets/starGreen.svg';

interface SlideProps {
  image: string;
  name: string;
  profession: string;
  testimonial: string;
}

const Carousel: React.FC = () => {
  const slides: SlideProps[] = [
    { 
      image: img1, 
      name: 'John Doe', 
      profession: 'Software Engineer', 
      testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."' 
    },
    { 
      image: img1, 
      name: 'Jane Smith', 
      profession: 'Product Manager', 
      testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."' 
    },
    { 
      image: img1, 
      name: 'Bob Johnson', 
      profession: 'UX Designer', 
      testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."' 
    },
    { 
      image: img1, 
      name: 'Alice Brown', 
      profession: 'Data Scientist', 
      testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."' 
    },
    { 
      image: img1, 
      name: 'Michael Green', 
      profession: 'Marketing Specialist', 
      testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."' 
    },
    { 
      image: img1, 
      name: 'Emily White', 
      profession: 'Graphic Designer', 
      testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."' 
    },
  ];

  const extendedSlides: SlideProps[] = [
    slides[slides.length - 1], 
    ...slides, 
    slides[0]
  ];

  const [currentSlide, setCurrentSlide] = useState(1);
  const [offset, setOffset] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const gap = 56;
  const transitionDuration = 500;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const updateOffset = useCallback(() => {
    if (containerRef.current && slideRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const slideWidth = slideRef.current.clientWidth;
      const computedTotalWidth = extendedSlides.length * (slideWidth + gap) - gap;
      setTotalWidth(computedTotalWidth);
      const newOffset = currentSlide * (slideWidth + gap) - (containerWidth - slideWidth) / 2;
      setOffset(newOffset);
    }
  }, [currentSlide, extendedSlides.length, gap]);

  useLayoutEffect(() => {
    if (!isMobile) {
      updateOffset();
    }
  }, [updateOffset, isMobile]);

  useEffect(() => {
    if (!isMobile) {
      const handleResize = () => {
        updateOffset();
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [updateOffset, isMobile]);

  // Auto-slide effect for both mobile and desktop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (isMobile) {
          // For mobile, cycle through the original slides array
          return prev === slides.length ? 1 : prev + 1;
        } else {
          // For desktop, handle the extended slides array
          return prev + 1;
        }
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile, slides.length]);

  useEffect(() => {
    if (!isMobile && currentSlide === extendedSlides.length - 1) {
      const timer = setTimeout(() => {
        setEnableTransition(false);
        setCurrentSlide(1);
      }, transitionDuration);
      return () => clearTimeout(timer);
    }
    if (!isMobile && currentSlide === 0) {
      const timer = setTimeout(() => {
        setEnableTransition(false);
        setCurrentSlide(slides.length);
      }, transitionDuration);
      return () => clearTimeout(timer);
    }
    setEnableTransition(true);
  }, [currentSlide, extendedSlides.length, slides.length, isMobile]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index + 1);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => prev - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  if (isMobile) {
    const currentIndex = currentSlide - 1;
    return (
      <div className="relative w-full h-auto px-4 py-8">
        <div className="bg-slateCustom900 rounded-[20px] p-6">
          <div className="flex flex-col items-center">
            {/* Speech Bubble Container */}
            <div className="relative w-full mb-8">
  <div className="relative bg-slateCustom900 rounded-[32px]">
    {/* Border overlay */}
    <div className="absolute inset-0 rounded-[32px] border-2 border-[#B1FF6C]" />
    {/* Content */}
    <div className="relative z-10 p-6">
      <p className="text-white text-center text-base leading-relaxed">
        {slides[currentIndex].testimonial}
      </p>
    </div>
    {/* Speech bubble pointer */}
    <div className="absolute -bottom-4 left-[50px] transform rotate-45">
      <div 
        className="w-8 h-8 bg-[#1B1B1B]"
        style={{
          borderRight: '2px solid #B1FF6C',
          borderBottom: '2px solid #B1FF6C'
        }}
      />
    </div>
  </div>
</div>
            
            <div className="text-center mb-8">
              <h3 className="text-lime-300 text-xl font-medium mb-1">
                {slides[currentIndex].name}
              </h3>
              <p className="text-white text-sm">
                {slides[currentIndex].profession}
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 w-full">
              <button 
                onClick={goToPrevSlide}
                className="p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>

              <div className="flex space-x-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    <img 
                      src={currentSlide === idx + 1 ? starGreen : starWhite} 
                      alt="Indicator" 
                      className="w-2 h-2" 
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={goToNextSlide}
                className="p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                aria-label="Next slide"
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px]">
      <div ref={containerRef} className="relative w-full overflow-hidden h-full">
        <div
          className="flex"
          style={{
            transform: `translateX(-${offset}px)`,
            width: totalWidth,
            transition: enableTransition ? `transform ${transitionDuration}ms ease` : 'none',
          }}
        >
          {extendedSlides.map((slide, index) => (
            <div
              key={index}
              ref={index === 1 ? slideRef : null}
              className="flex-shrink-0 relative"
              style={{ marginRight: index === extendedSlides.length - 1 ? 0 : `${gap}px` }}
            >
              <div className="flex flex-col items-center">
                <img src={slide.image} alt={slide.name} className="max-w-[650px] max-h-[300px] object-contain mt-16" />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <p className="mb-4 text-white text-center font-medium text-lg">{slide.testimonial}</p>
                </div>
              </div>
              <div className="absolute -bottom-16 left-[90px] -ml-2 w-full">
                <div className="text-start">
                  <h3 className="text-lime-300 font-normal text-xl mb-1">{slide.name}</h3>
                  <p className="text-white text-sm">{slide.profession}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute mt-20 left-0 right-0 flex flex-col items-center gap-4">
        <div className="flex justify-center gap-36 mb-4">
          <button 
            onClick={goToPrevSlide} 
            className="p-2 mt-10 rounded-full bg-slateCustom900 hover:bg-black/40 transition-colors" 
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-8 h-8 text-white" />
          </button>
          <div className="flex space-x-2 mt-10">
            {slides.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <img 
                  src={currentSlide === idx + 1 ? starGreen : starWhite} 
                  alt="Indicator" 
                  className="w-3 h-3" 
                />
              </button>
            ))}
          </div>
          <button 
            onClick={goToNextSlide} 
            className="p-2 mt-10 rounded-full bg-slateCustom900 hover:bg-black/40 transition-colors"
            aria-label="Next slide"
          >
            <ArrowRight className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className={`flex ${isMobile ? 'flex-col text-center' : 'justify-start items-center'} mb-8`}>
        <h1 className="font-medium bg-lime-300 px-1 rounded-lg text-[40px] font-SpaceGrotesk">
          Testimonials
        </h1>
        <p className={`text-lg ${isMobile ? 'mt-4' : 'ml-8'} font-SpaceGrotesk`}>
          Hear from Our Satisfied Clients: Read Our Testimonials {!isMobile && <br />} 
          to Learn More about Our Digital Marketing Services
        </p>
      </div>
      <div className={`max-w-7xl mx-auto ${isMobile ? 'h-auto' : 'h-[600px]'} rounded-[50px] bg-slateCustom900`}>
        <Carousel />
      </div>
    </div>
  );
};

export default TestimonialsSection;