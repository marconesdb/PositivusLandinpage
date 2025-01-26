import React, { useState, useEffect } from 'react';
import img1 from '../assets/Bubble.svg';

interface SlideProps {
  image: string;
  name: string;
  profession: string;
}

const Carousel: React.FC = () => {
  const slides: SlideProps[] = [
    {
      image: img1,
      name: 'John Doe',
      profession: 'Software Engineer',
    },
    {
      image: img1,
      name: 'Jane Smith',
      profession: 'Product Manager',
    },
    {
      image: img1,
      name: 'Bob Johnson',
      profession: 'UX Designer',
    },

    {
      image: img1,
      name: 'Alice Brown',
      profession: 'Data Scientist',
    },
    {
      image: img1,
      name: 'Michael Green',
      profession: 'Marketing Specialist',
    },
    {
      image: img1,
      name: 'Emily White',
      profession: 'Graphic Designer',
    }
    
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full overflow-hidden h-96 flex justify-center items-center">
      {/* Contêiner com os slides */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentSlide * (100 / 3)}%)`, // Ajusta a transição considerando 3 slides visíveis
          width: `${slides.length * (100 / 3)}%`, // Define a largura total do contêiner flex
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[45.333%] px-4 h-full relative" // Cada slide ocupa 1/3 do contêiner
          >
            {/* Imagem */}
            <img
              src={slide.image}
              alt={slide.name}
              className="w-full h-full object-contain"
            />
            {/* Informações */}
           
            <div className="absolute -bottom-16 left-24 w-full">
              <div className="text-start">
                <h3 className="text-white font-bold text-xl mb-1">{slide.name}</h3>
                <p className="text-white text-sm">{slide.profession}</p>
              </div>
            </div>
         
          </div>
        ))}
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-start items-center mb-8">
        <h1 className="font-medium bg-lime-300 px-1 rounded-lg text-[40px] font-SpaceGrotesk">
          Testimonials
        </h1>
        <p className="text-lg ml-8 font-SpaceGrotesk">
          Hear from Our Satisfied Clients: Read Our Testimonials <br />
          to Learn More about Our Digital Marketing Services
        </p>
      </div>
      <div className="max-w-7xl mx-auto h-[500px] rounded-[50px] bg-black">
        {/* Componente de carrossel */}
        <Carousel />
      </div>
    </div>
  );
};

export default TestimonialsSection;
