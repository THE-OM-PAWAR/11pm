'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative py-20 mb-16">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-[rgb(var(--accent-red))] opacity-10 mix-blend-overlay"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="heading-lg mb-6">
              Visit <span className="text-gradient">Yuvi Gym</span> - Best Gym in Dr. Ambedkar Nagar
            </h1>
            <p className="text-gray-300 text-lg">
              Ready to start your fitness journey? Visit Yuvi Gym, the leading fitness center in Dr. Ambedkar Nagar, Mhow. 
              Our expert trainers are here to help you achieve your fitness goals. Contact us today for membership 
              inquiries, personal training, or to schedule a tour of our state-of-the-art facility.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* WhatsApp Contact Section */}
          <ScrollReveal threshold={0.1} direction="left">
            <div className="glass-panel p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
              
              <div className="space-y-6">
                <div className="text-center py-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[rgba(var(--accent-green),0.2)] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-[rgb(var(--accent-green))]">
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M9.5 15.5a5 5 0 0 0 5 0" />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-medium mb-4">Direct WhatsApp Support</h3>
                  <p className="text-gray-300 mb-8 max-w-md mx-auto">
                    Get instant responses about our gym membership plans, personal training programs, or facility tours. 
                    Our team at Yuvi Gym, Dr. Ambedkar Nagar is ready to assist you with all your fitness needs.
                  </p>
                  
                  <a 
                    href={`https://wa.me/918966968087?text=Hi,%20I'm%20interested%20in%20learning%20more%20about%20Yuvi%20Gym.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center justify-center gap-2 hover-trigger px-8 py-4"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                    Chat on WhatsApp
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  
                  <p className="text-sm text-gray-400 mt-6">
                    Our typical response time is under 30 minutes during working hours
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <ScrollReveal threshold={0.1} direction="right">
              <div className="glass-panel p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-[rgb(var(--accent-green))] mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <p className="text-gray-300">
                        <a 
                          href="https://maps.app.goo.gl/gHm5tGpYoSLEsXDa8" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-[rgb(var(--accent-green))] transition-colors"
                        >
                          Yuvi Gym, 989 A, Main Street, Dreamland Square, Dr. Ambedkar Nagar, Mhow, Madhya Pradesh 453441
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-[rgb(var(--accent-green))] mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Phone & WhatsApp</h3>
                      <p className="text-gray-300">
                        <a 
                          href="tel:08966968087"
                          className="hover:text-[rgb(var(--accent-green))] transition-colors"
                          onClick={(e) => {
                            navigator.clipboard.writeText("08966968087");
                            e.preventDefault();
                            alert("Phone number copied to clipboard!");
                          }}
                        >
                          Yuvraj Patidar – 08966968087
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-[rgb(var(--accent-green))] mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-gray-300">
                        <a 
                          href="mailto:Yuviipatidar@gmail.com"
                          className="hover:text-[rgb(var(--accent-green))] transition-colors"
                        >
                          Yuviipatidar@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-[rgb(var(--accent-green))] mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Working Hours</h3>
                      <p className="text-gray-300">Monday - Friday: 6:00 AM - 10:00 PM</p>
                      <p className="text-gray-300">Saturday: 7:00 AM - 8:00 PM</p>
                      <p className="text-gray-300">Sunday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-300 mt-2">Best Gym in Dr. Ambedkar Nagar - Open 7 Days a Week</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal threshold={0.1} delay={0.2} direction="right">
              <div className="rounded-lg overflow-hidden h-80">
                {/* Google Map Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.6182051894184!2d75.76031619999999!3d22.555970499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f9309566bff5%3A0xe0ffafa00f2a4ec3!2sYuvi%20fitness%20gym!5e0!3m2!1sen!2sin!4v1749198963871!5m2!1sen!2sin" 
                  width={"100%"}
                  height={"100%"}
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="filter contrast-125"
                ></iframe>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}