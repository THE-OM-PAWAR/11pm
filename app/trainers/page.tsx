import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Twitter } from 'lucide-react';

// Staff data
const staff = [
  {
    id: 1,
    name: 'Alex "ProGamer" Johnson',
    role: 'Esports Coach & Manager',
    experience: '8+ years',
    bio: 'Alex is a professional esports coach specializing in FPS and MOBA games. He has trained multiple championship teams and helps players improve their competitive skills.',
    image: 'https://images.pexels.com/photos/6550851/pexels-photo-6550851.jpeg',
    certifications: ['Certified Esports Coach', 'Tournament Director', 'Gaming Psychology'],
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#',
    },
  },
  {
    id: 2,
    name: 'Sarah "VRQueen" Williams',
    role: 'VR Experience Specialist',
    experience: '5+ years',
    bio: 'Sarah manages our VR gaming experiences and helps newcomers navigate virtual reality gaming. She creates immersive gaming sessions for all skill levels.',
    image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg',
    certifications: ['VR Technology Specialist', 'Gaming Experience Designer', 'Customer Experience'],
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#',
    },
  },
  {
    id: 3,
    name: 'Marcus "TechMaster" Chen',
    role: 'Gaming Tech Specialist',
    experience: '7+ years',
    bio: 'Marcus maintains our gaming hardware and helps customers optimize their gaming setups. He ensures all our gaming stations run at peak performance.',
    image: 'https://images.pexels.com/photos/6456184/pexels-photo-6456184.jpeg',
    certifications: ['Hardware Specialist', 'Gaming Optimization', 'Technical Support'],
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#',
    },
  },
  {
    id: 4,
    name: 'Jessica "StreamQueen" Parker',
    role: 'Content & Community Manager',
    experience: '4+ years',
    bio: 'Jessica manages our gaming community and organizes tournaments and events. She helps create engaging content and builds connections among gamers.',
    image: 'https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg',
    certifications: ['Community Management', 'Event Organization', 'Content Creation'],
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#',
    },
  },
  {
    id: 5,
    name: 'David "CompKing" Rodriguez',
    role: 'Tournament Organizer',
    experience: '10+ years',
    bio: 'David has organized hundreds of gaming tournaments and esports events. He ensures fair play and creates competitive environments for all skill levels.',
    image: 'https://images.pexels.com/photos/4498608/pexels-photo-4498608.jpeg',
    certifications: ['Tournament Director', 'Esports Management', 'Competitive Gaming'],
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#',
    },
  },
  {
    id: 6,
    name: 'Emma "CafeManager" Thompson',
    role: 'Gaming Cafe Manager',
    experience: '6+ years',
    bio: 'Emma oversees daily operations and ensures every gamer has an amazing experience. She manages bookings, events, and customer service.',
    image: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg',
    certifications: ['Hospitality Management', 'Customer Service', 'Operations Management'],
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#',
    },
  },
];

export default function StaffPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative py-20 mb-16">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-[#00ffff] opacity-10 mix-blend-overlay"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="heading-lg mb-6">
              Our Gaming <span className="text-gradient">Team</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Meet our team of gaming experts, esports professionals, and tech specialists dedicated to providing 
              you with the ultimate gaming experience. From tournament organization to technical support, 
              our team is here to help you level up your gaming.
            </p>
          </div>
        </div>
      </div>

      {/* Staff Grid */}
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((member) => (
            <div key={member.id} className="glass-panel rounded-lg overflow-hidden group">
              <div className="relative h-80">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                
                {/* Social icons */}
                <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 transform translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <a href={member.social.instagram} className="bg-black bg-opacity-60 p-2 rounded-full text-white hover:text-[#00ffff] transition-colors hover-trigger">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href={member.social.facebook} className="bg-black bg-opacity-60 p-2 rounded-full text-white hover:text-[#00ffff] transition-colors hover-trigger">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href={member.social.twitter} className="bg-black bg-opacity-60 p-2 rounded-full text-white hover:text-[#00ffff] transition-colors hover-trigger">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[#00ffff] text-sm font-medium mb-1 block">
                    {member.role} • {member.experience}
                  </span>
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#00ffff] transition-colors">
                    {member.name}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-6">{member.bio}</p>
                
                <div className="mb-6">
                  <h4 className="text-white text-sm font-semibold mb-2">Specializations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.certifications.map((cert, idx) => (
                      <span 
                        key={idx} 
                        className="bg-gray-800 text-gray-300 text-xs py-1 px-3 rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link href={`/staff/${member.id}`}>
                  <button className="w-full py-2 rounded-md text-[#00ffff] border border-[#00ffff] hover:bg-[#00ffff] hover:bg-opacity-10 transition-all duration-300 font-medium hover-trigger">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}