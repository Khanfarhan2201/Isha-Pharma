import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const ModernStory = () => {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <Parallax speed={-10}>
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-indigo-100 opacity-40"></div>
      </Parallax>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-white/80 backdrop-blur-lg border border-gray-100 rounded-3xl p-8 shadow-xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              From a humble lab in 2005 to a global force in generics, Isha Pharma's 
              story is one of relentless innovation.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">500+ formulations developed</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">30+ countries served</span>
              </li>
            </ul>
          </div>

          <Parallax speed={5}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/modern-lab.jpg" 
                alt="State-of-the-art laboratory at Isha Pharma" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default ModernStory;
