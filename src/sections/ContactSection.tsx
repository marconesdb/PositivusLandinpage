import React from 'react';
import imgContact from '../assets/imgContact.png';

const ContactSection: React.FC = () => {
  return (
    <section className="w-full mx-auto max-w-7xl px-4 flex flex-col items-center bg-white mt-20">
      {/* Título e Parágrafo */}
      <div className="w-full mx-auto max-w-7xl flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start text-center sm:text-left mb-10 sm:mb-20">
        <h2 className="bg-lime-400 text-black font-medium px-2 rounded-lg text-[40px] font-SpaceGrotesk">
          Contact Us
        </h2>
        <p className="mt-4 sm:ml-4 text-black text-lg font-SpaceGrotesk font-medium">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>

      {/* Formulário */}
      <div className="w-full bg-gray-100 mx-auto max-w-7xl p-4 sm:p-8 rounded-[30px] flex flex-col items-center lg:flex-row lg:justify-between">
        <div className="w-full max-w-[500px] p-4 sm:p-8 rounded-lg">
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
              Name<span className="text-black">*</span>
            </label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-black rounded-lg font-SpaceGrotesk"
              placeholder="Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black font-SpaceGrotesk">
              Email<span className="text-black">*</span>
            </label>
            <input
              type="email"
              className="w-full mt-1 p-2 border border-black rounded-lg font-SpaceGrotesk"
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-black font-SpaceGrotesk">
              Message<span className="text-black">*</span>
            </label>
            <textarea
              className="w-full mt-1 p-2 h-32 border border-black font-SpaceGrotesk rounded-lg"
              placeholder="Message"
              required
            ></textarea>
          </div>

          <button className="mt-4 w-full bg-black font-SpaceGrotesk text-white py-4 rounded-lg">
            Send Message
          </button>
        </div>

        <div className="hidden lg:block lg:ml-8 lg:mb-8 lg:-mr-8">
          <img className="h-[530px] pt-10" src={imgContact} alt="Decorative" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;