import React, { useRef, useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';

const VisionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section
      id="vision-section"
      ref={sectionRef}
      className={`py-20 bg-gray-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          WHAT <span className="text-purple-700">SEPARATES</span> THE SUCCESSFUL FROM THE STUCK
        </h2>

        {/* Common vs Winning Strategy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {/* The Common Path */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-red-500">
            <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">
              THE COMMON PATH
            </span>
            <h3 className="text-2xl font-bold mb-4 text-red-500 flex items-center">
              <X className="h-6 w-6 mr-2" /> The way most people get stuck
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <X className="text-red-500 h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span>Takes forever to find the right people to build with</span>
              </li>
              <li className="flex items-start">
                <X className="text-red-500 h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span>You have skills — but not the full team to start</span>
              </li>
              <li className="flex items-start">
                <X className="text-red-500 h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span>Ideas die before they even get off the ground</span>
              </li>
              <li className="flex items-start">
                <X className="text-red-500 h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span>You're stuck waiting, instead of creating</span>
              </li>
            </ul>
          </div>

          {/* The Winning Strategy */}
<div className="bg-white text-black rounded-3xl shadow-lg p-8 border-t-4 border-purple-500">
  <span className="bg-white text-purple-700 px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">
    THE WINNING STRATEGY
  </span>
  <h3 className="text-2xl font-bold mb-4 flex items-center text-purple-700">
    <Check className="h-6 w-6 mr-2" /> How successful builders win
  </h3>
  <ul className="space-y-4">
    <li className="flex items-start">
      <Check className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-purple-600" />
      <span className="text-black">Find teammates who fill your gaps, instantly</span>
    </li>
    <li className="flex items-start">
      <Check className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-purple-600" />
      <span className="text-black">Focus on what you do best — we match you with the res</span>
    </li>
    <li className="flex items-start">
      <Check className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-purple-600" />
      <span className="text-black">Get inspired by real ideas and real people</span>
    </li>
    <li className="flex items-start">
      <Check className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-purple-600" />
      <span className="text-black">Bo from “thinking about it” to actually building</span>
    </li>
  </ul>
</div>

        </div>

        {/* Transition Text */}
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 italic">
            It All Starts With One Thought...
          </h3>
          <p className="text-xl md:text-2xl text-gray-700 mt-4">
            “What if I start a podcast? Build a SaaS app? Launch a side hustle? Create a short film?”
          </p>
        </div>

        {/* CTA Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <p className="text-lg mb-4">
            <span className="font-bold">HERE'S THE REALITY:</span> You don't code. You can't design.
            You need marketing expertise.{' '}
            <span className="italic">You need the right people.</span>
          </p>
          <p className="text-lg font-bold text-purple-700 mb-6">
            That's why we built FlingBizzz. A place where builders find builders. Where college
            students, entrepreneurs, content creators, and professionals connect to build something
            extraordinary.
          </p>
          <button
            onClick={() =>
              document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-700 hover:to-indigo-900 text-white font-bold px-8 py-3 rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            FIND YOUR TEAM NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
