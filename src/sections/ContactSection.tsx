import React from 'react';
import imgContact from '../assets/imgContact.png';

const ContactSection: React.FC = () => {
  return (
    <section className="w-full mx-auto max-w-7xl px-4 flex flex-col items-center bg-white mt-20">
      {/* Título e Parágrafo */}
      <div className="w-full mx-auto max-w-7xl flex items-center mb-20">
        {/* Título */}
        <h2 className="bg-lime-400 text-black font-medium px-2 rounded-lg text-[40px] font-SpaceGrotesk">
          Contact Us
        </h2>

        {/* Parágrafo */}
        <p className="ml-16 text-black text-lg font-SpaceGrotesk font-medium">
          Connect with Us: Let's Discuss Your 
          <span className="block">Digital Marketing Needs</span>
        </p>
      </div>

      {/* Formulário */}
      <div className="w-full bg-gray-100 mx-auto max-w-7xl px-4 p-8 rounded-[30px] flex justify-between">
        
        <div className="p-8 rounded-lg w-full max-w-md ml-8">
          <div className="flex items-center mb-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="contactReason"
                className="form-radio appearance-none w-5 h-5 border-2 border-black rounded-full checked:bg-lime-400 checked:border-lime-400 focus:outline-none"
              />
              <span className="ml-2 font-SpaceGrotesk">Say Hi</span>
            </label>
            <label className="flex items-center ml-6">
              <input
                type="radio"
                name="contactReason"
                className="form-radio appearance-none w-5 h-5 border-2 border-black rounded-full checked:bg-lime-400 checked:border-lime-400 focus:outline-none"
              />
              <span className="ml-2">Get a Quote</span>
            </label>
          </div>
          <div className="mb-4">
          <label className="block text-black font-SpaceGrotesk">
              Name<span className="text-black ">*</span>
            </label>
            <input
              type="text"
              className="w-[500px] mt-1 p-2 border border-black rounded-lg font-SpaceGrotesk"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black font-SpaceGrotesk">
              Email<span className="text-black">*</span>
            </label>
            <input
              type="email"
              className="w-[500px] mt-1 p-2 border border-black rounded-lg font-SpaceGrotesk"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black font-SpaceGrotesk">
              Message<span className="text-black">*</span>
            </label>
            <textarea
              className="w-[500px] mt-1 p-2 h-32 border border-black font-SpaceGrotesk rounded-lg"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <button className="mt-4 w-[500px] bg-black font-SpaceGrotesk text-white py-4 rounded-lg">
            Send Message
          </button>
        </div>

        <div className="ml-8 mb-8 -mr-4">
          <img className='h-[530px]  pt-10' src={imgContact} alt="Decorative" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
