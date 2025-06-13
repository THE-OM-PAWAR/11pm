'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { ArrowRight } from 'lucide-react';

// Tab categories
const categories = [
  'All',
  'Strength',
  'Cardio',
  'Yoga',
  'CrossFit',
  'HIIT',
];

// Classes data
const classesData = [
  {
    id: 1,
    title: 'Power Lifting',
    description: 'Build strength with our intensive power lifting program',
    image: 'https://images.pexels.com/photos/4164762/pexels-photo-4164762.jpeg',
    duration: '60 min',
    intensity: 'Advanced',
    category: 'Strength',
  },
  {
    id: 2,
    title: 'Cardio Blast',
    description: 'High-energy cardio session to improve stamina',
    image: 'https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg',
    duration: '45 min',
    intensity: 'Medium',
    category: 'Cardio',
  },
  {
    id: 3,
    title: 'Yoga Flow',
    description: 'Connect mind and body with our relaxing yoga sessions',
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg',
    duration: '50 min',
    intensity: 'Beginner',
    category: 'Yoga',
  },
  {
    id: 4,
    title: 'CrossFit WOD',
    description: 'Challenge yourself with our workout of the day',
    image: 'https://images.pexels.com/photos/2294363/pexels-photo-2294363.jpeg',
    duration: '60 min',
    intensity: 'Advanced',
    category: 'CrossFit',
  },
  {
    id: 5,
    title: 'HIIT Circuit',
    description: 'Burn maximum calories with high-intensity interval training',
    image: 'https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg',
    duration: '30 min',
    intensity: 'High',
    category: 'HIIT',
  },
  {
    id: 6,
    title: 'Core Crusher',
    description: 'Focus on building a strong and stable core',
    image: 'https://images.pexels.com/photos/4162579/pexels-photo-4162579.jpeg',
    duration: '40 min',
    intensity: 'Medium',
    category: 'Strength',
  },
];

const ClassesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredClasses = activeCategory === 'All' 
    ? classesData 
    : classesData.filter(item => item.category === activeCategory);

  return (
    <section className="section-padding relative overflow-hidden bg-black">
      {/* Background accent */}
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[rgb(var(--accent-red))] rounded-full filter blur-[120px] opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl mb-8 md:mb-0">
            <ScrollReveal threshold={0.1}>
              <h2 className="heading-lg mb-6">
                Our <span className="text-gradient">Classes</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal threshold={0.1} delay={0.2}>
              <p className="text-gray-300">
                Discover our diverse range of classes designed to target different aspects of fitness and accommodate all experience levels.
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal threshold={0.1} delay={0.3}>
            <Link href="/classes">
              <button className="btn-secondary flex items-center gap-2 hover-trigger">
                View Timetable <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </ScrollReveal>
        </div>
        
        {/* Category Tabs */}
        <ScrollReveal threshold={0.1} delay={0.2} className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover-trigger ${
                  activeCategory === category
                    ? 'bg-[rgb(var(--accent-green))] text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>
        
        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClasses.map((classItem, index) => (
            <ScrollReveal 
              key={classItem.id} 
              threshold={0.1} 
              delay={0.1 * (index % 3)}
              className="group"
            >
              <div className="glass-panel overflow-hidden rounded-lg">
                <div className="relative h-60">
                  <Image
                    src={classItem.image}
                    alt={classItem.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-[rgb(var(--accent-green))] text-black text-xs font-semibold px-3 py-1 rounded-full">
                    {classItem.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[rgb(var(--accent-green))] transition-colors">
                    {classItem.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{classItem.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-300 text-sm">{classItem.duration}</span>
                      <span className="text-gray-300 text-sm">{classItem.intensity}</span>
                    </div>
                    <Link href={`/classes/${classItem.id}`}>
                      <button className="text-[rgb(var(--accent-green))] hover:underline text-sm font-medium flex items-center gap-1 hover-trigger">
                        Details
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;