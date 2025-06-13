'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react';

const staff = [
  {
    name: 'Gaming Master',
    role: 'Esports Coach & Manager',
    image: 'https://images.pexels.com/photos/6550851/pexels-photo-6550851.jpeg',
    certificates: [
      'Certified Esports Coach',
      'Tournament Organizer',
    ],
    social: {
      instagram: 'https://www.instagram.com/11pmgaming',
    },
  },
];

const TrainersPreview = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00ffff] rounded-full filter blur-[120px] opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="max-w-2xl mb-8 md:mb-0">
            <ScrollReveal threshold={0.1}>
              <h2 className="heading-lg mb-6">
                Meet Our <span className="text-gradient">Gaming Staff</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal threshold={0.1} delay={0.2}>
              <p className="text-gray-300">
                Our team of gaming experts and esports professionals is here to help you improve your skills and enjoy the ultimate gaming experience.
              </p>
            </ScrollReveal>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((member, index) => (
            <ScrollReveal 
              key={index} 
              threshold={0.1} 
              delay={0.2 * (index + 1)}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                </div>
                
                {/* Social icons - appear on hover */}
                <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 transform translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <a href={member.social.instagram} className="bg-black bg-opacity-60 p-2 rounded-full text-white hover:text-[#00ffff] transition-colors hover-trigger">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-[#00ffff] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-1">{member.role}</p>
                  {member.certificates && (
                    <ul className="text-gray-400 text-xs list-disc pl-4">
                      {member.certificates.map((cert, i) => (
                        <li key={i}>{cert}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersPreview;