import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Twitter } from 'lucide-react';

// Trainer data
const trainers = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Strength & Conditioning',
    experience: '8+ years',
    bio: 'Alex specializes in strength training and has helped countless clients achieve their muscle building and toning goals. Certified in advanced resistance training techniques.',
    image: 'https://images.pexels.com/photos/6550851/pexels-photo-6550851.jpeg',
    certifications: ['NASM CPT', 'Strength Training Specialist', 'Sports Nutrition'],
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#',
    },
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: 'Yoga & Pilates',
    experience: '6+ years',
    bio: 'Sarah brings mindfulness to fitness with her expertise in yoga and pilates. Her sessions focus on flexibility, core strength, and mental wellbeing.',
    image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg',
    certifications: ['RYT 200', 'Pilates Instructor', 'Mindfulness Coach'],
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#',
    },
  },
  {
    id: 3,
    name: 'Marcus Chen',
    role: 'CrossFit Expert',
    experience: '7+ years',
    bio: 'Marcus is our CrossFit specialist who designs challenging workouts that push clients to their limits. His energy and motivation are contagious.',
    image: 'https://images.pexels.com/photos/6456184/pexels-photo-6456184.jpeg',
    certifications: ['CrossFit Level 3', 'Olympic Weightlifting', 'Mobility Specialist'],
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#',
    },
  },
  {
    id: 4,
    name: 'Jessica Parker',
    role: 'Cardio & HIIT',
    experience: '5+ years',
    bio: 'Jessica specializes in high-energy cardio and HIIT workouts. Her sessions are designed to maximize calorie burn and improve cardiovascular health.',
    image: 'https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg',
    certifications: ['HIIT Specialist', 'ACE Certified', 'TRX Training'],
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#',
    },
  },
  {
    id: 5,
    name: 'David Rodriguez',
    role: 'Bodybuilding Coach',
    experience: '10+ years',
    bio: 'David has competed professionally in bodybuilding and now shares his expertise with clients looking to build serious muscle and transform their physique.',
    image: 'https://images.pexels.com/photos/4498608/pexels-photo-4498608.jpeg',
    certifications: ['IFBB Pro', 'Sports Nutrition', 'Hypertrophy Specialist'],
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#',
    },
  },
  {
    id: 6,
    name: 'Emma Thompson',
    role: 'Nutrition Specialist',
    experience: '6+ years',
    bio: 'Emma combines fitness training with nutrition expertise to help clients achieve holistic health transformations. She creates personalized meal plans to complement workout routines.',
    image: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg',
    certifications: ['Registered Dietitian', 'Precision Nutrition', 'Weight Management Specialist'],
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#',
    },
  },
];

export default function TrainersPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative py-20 mb-16">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-[rgb(var(--accent-green))] opacity-10 mix-blend-overlay"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="heading-lg mb-6">
              Our Expert <span className="text-gradient">Trainers</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Meet our team of certified fitness professionals dedicated to helping you achieve your goals. 
              With diverse specialties and years of experience, our trainers provide personalized guidance 
              for every fitness journey.
            </p>
          </div>
        </div>
      </div>

      {/* Trainers Grid */}
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="glass-panel rounded-lg overflow-hidden group">
              <div className="relative h-80">
                <Image 
                  src={trainer.image} 
                  alt={trainer.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                
                {/* Social icons */}
                <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 transform translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <a href={trainer.social.instagram} className="bg-black bg-opacity-60 p-2 rounded-full text-white hover:text-[rgb(var(--accent-green))] transition-colors hover-trigger">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href={trainer.social.facebook} className="bg-black bg-opacity-60 p-2 rounded-full text-white hover:text-[rgb(var(--accent-green))] transition-colors hover-trigger">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href={trainer.social.twitter} className="bg-black bg-opacity-60 p-2 rounded-full text-white hover:text-[rgb(var(--accent-green))] transition-colors hover-trigger">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[rgb(var(--accent-green))] text-sm font-medium mb-1 block">
                    {trainer.role} • {trainer.experience}
                  </span>
                  <h3 className="text-xl font-semibold text-white group-hover:text-[rgb(var(--accent-green))] transition-colors">
                    {trainer.name}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-6">{trainer.bio}</p>
                
                <div className="mb-6">
                  <h4 className="text-white text-sm font-semibold mb-2">Certifications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {trainer.certifications.map((cert, idx) => (
                      <span 
                        key={idx} 
                        className="bg-gray-800 text-gray-300 text-xs py-1 px-3 rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link href={`/trainers/${trainer.id}`}>
                  <button className="w-full py-2 rounded-md text-[rgb(var(--accent-green))] border border-[rgb(var(--accent-green))] hover:bg-[rgb(var(--accent-green))] hover:bg-opacity-10 transition-all duration-300 font-medium hover-trigger">
                    Book a Session
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