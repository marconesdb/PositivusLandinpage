import React from 'react';
import johnSmith from '../assets/JohnSmith.svg';
import janeDoe from '../assets/JaneDoe.svg';
import michaelBrown from '../assets/MichaelBrown.svg';
import emilyJohnson from '../assets/EmilyJohnson.svg';
import brianWilliams from '../assets/BrianWilliams.svg';
import sarahKim from '../assets/SarahKim.svg';
import Linkedin from '../assets/iconLinkedin.svg';

const teamMembers = [
  {
    name: 'John Smith',
    position: 'CEO and Founder',
    description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
    image: johnSmith,
  },
  {
    name: 'Jane Doe',
    position: 'Director of Operations',
    description: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
    image: janeDoe,
  },
  {
    name: 'Michael Brown',
    position: 'Senior SEO Specialist',
    description: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
    image: michaelBrown,
  },
  {
    name: 'Emily Johnson',
    position: 'PPC Manager',
    description: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
    image: emilyJohnson,
  },
  {
    name: 'Brian Williams',
    position: 'Social Media Specialist',
    description: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
    image: brianWilliams,
  },
  {
    name: 'Sarah Kim',
    position: 'Content Creator',
    description: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries',
    image: sarahKim,
  },
];

const Team: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex items-start space-x-4">
          <h2 className="text-[40px] font-SpaceGrotesk font-medium text-black bg-lime-300 px-2 rounded-lg">Team</h2>
          <p className="text-lg text-black font-SpaceGrotesk">
            Meet the skilled and experienced team behind our <br /> successful digital marketing strategies
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-gray-100 p-6 border border-black rounded-[40px] shadow-[0px_8px_0px_rgba(0,0,0,10.5)]">
              <div className="flex items-start space-x-4">
                {/* Imagem do membro */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-32 w-32 object-contain"
                />
                {/* Detalhes do membro */}
                <div className="flex-1 mt-20">
                  <h3 className="text-lg font-medium text-black">{member.name}</h3>
                  <p className="text-sm text-black font-SpaceGrotesk">{member.position}</p>
                </div>
                {/* Ícone do LinkedIn */}
                <img
                  className="mt-2 self-start translate-y-[-8px]"
                  src={Linkedin}
                  alt="LinkedIn"
                />
              </div>
              <div className="mt-8 w-full h-[1px] bg-black mb-4"></div>
              <p className="mt-4 text-black font-SpaceGrotesk">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Botão à direita */}
        <div className="flex justify-end mt-10">
          <button className="bg-black text-white px-16 py-4 rounded-xl hover:bg-gray-800 transition-colors text-[20px] font-normal font-SpaceGrotesk">
            See all team
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
