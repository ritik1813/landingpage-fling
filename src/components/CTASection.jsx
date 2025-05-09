import React, { useState } from 'react';

const CTASection = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    alert(`You've taken the first step to success! We'll be in touch soon.`);
    setEmail('');
  };

  return (
    <section id="cta-section" className="py-16 bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">DECIDE NOW: MEDIOCRE ALONE OR EXCEPTIONAL TOGETHER?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90 font-bold">
          The most successful people don't wait for "someday." They take action while everyone else makes excuses.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow px-4 py-3 rounded-full border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-sm"
            required
          />
          <button 
            onClick={handleEmailSubmit}
            className="px-6 py-3 bg-white text-purple-700 rounded-full font-bold hover:from-purple-700 transition transform hover:scale-105 shadow-lg"
          >
            JOIN NOW
          </button>
        </div>
        
 
      </div>
    </section>
  );
};

export default CTASection;
