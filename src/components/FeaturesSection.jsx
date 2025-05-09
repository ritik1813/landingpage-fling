import React, { useRef, useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

const FeaturesSection = () => {
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
      ref={sectionRef}
      className={`py-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16">
          HOW THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700">TOP 1%</span> BUILD DIFFERENTLY
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-purple-700">
            <h3 className="text-2xl font-bold mb-4">🔥 No More Solo Struggles</h3>
            <p className="text-gray-700">Stop being stuck. Get matched with people who want to build with you — not just talk.

</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-purple-700">
            <h3 className="text-2xl font-bold mb-4">🎯 Matched By Mission</h3>
            <p className="text-gray-700">Algorithms that actually care about your goals, not just buzzwords.</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-purple-700">
            <h3 className="text-2xl font-bold mb-4">💬 Real Conversations</h3>
            <p className="text-gray-700">Once matched, you can chat, plan, and start building — right from the app.</p>
          </div>
        </div>
        
        <div className="mt-16 p-8 bg-purple-50 rounded-3xl shadow-inner border border-purple-100">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2">WHO DOMINATES WITH FLINGBIZZZ?</h3>
            <p className="text-lg text-gray-700">Our platform powers success stories across diverse projects</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 shadow text-center">
              <Zap className="h-8 w-8 text-purple-700 mx-auto mb-2" />
              <h4 className="font-bold">STUDENTS</h4>
              <p className="text-sm text-gray-600">Building college projects that stand out</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow text-center">
              <Zap className="h-8 w-8 text-purple-700 mx-auto mb-2" />
              <h4 className="font-bold">FOUNDERS</h4>
              <p className="text-sm text-gray-600">Finding technical co-founders & early team</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow text-center">
              <Zap className="h-8 w-8 text-purple-700 mx-auto mb-2" />
              <h4 className="font-bold">CONTENT CREATORS</h4>
              <p className="text-sm text-gray-600">Scaling channels with video editors & writers</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow text-center">
              <Zap className="h-8 w-8 text-purple-700 mx-auto mb-2" />
              <h4 className="font-bold">PROFESSIONALS</h4>
              <p className="text-sm text-gray-600">Building side hustles while working full-time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;