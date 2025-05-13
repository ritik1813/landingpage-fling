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
            <p className="text-gray-700">Stop being stuck. Get matched with people who want to build with you — not just talk.</p>
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

        {/* NEW SECTION STARTS HERE */}
        <div className="mt-16 p-8 bg-purple-50 rounded-3xl shadow-inner border border-purple-100">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2">🤝 Two Paths. One Platform.</h3>
            <p className="text-lg text-gray-700">Whether you’re building the next big thing or joining something epic — this is your launchpad.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-xl p-6 shadow">
              <h4 className="text-xl font-semibold mb-2">🚀 Got an Idea, Need a Crew?</h4>
              <p className="text-gray-600">
                Find the developer, designer, editor, or hustler who gets your vision — and wants to build it *with* you.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h4 className="text-xl font-semibold mb-2">🔥 Got Skills, Need a Mission?</h4>
              <p className="text-gray-600">
                Discover exciting projects, side hustles, and collaborations where you can make real impact fast.
              </p>
            </div>
          </div>

          <div className="text-center mb-6">
            <h4 className="text-2xl font-bold">Built by Builders. For Builders.</h4>
            <p className="text-gray-700 mt-2">From final-year students to seasoned pros — FlingBizzz fuels creation across all levels.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 shadow text-center">
              <Zap className="h-8 w-8 text-purple-700 mx-auto mb-2" />
              <h4 className="font-bold">STUDENTS</h4>
              <p className="text-sm text-gray-600">Students building projects that go beyond the classroom</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow text-center">
              <Zap className="h-8 w-8 text-purple-700 mx-auto mb-2" />
              <h4 className="font-bold">FOUNDERS</h4>
              <p className="text-sm text-gray-600">Founders launching the next big thing</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow text-center">
              <Zap className="h-8 w-8 text-purple-700 mx-auto mb-2" />
              <h4 className="font-bold">CREATORS</h4>
              <p className="text-sm text-gray-600">Content creators planning their breakout moment</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow text-center">
              <Zap className="h-8 w-8 text-purple-700 mx-auto mb-2" />
              <h4 className="font-bold">PROFESSIONALS</h4>
              <p className="text-sm text-gray-600">Building side hustles beyond the 9–5</p>
            </div>
          </div>
        </div>
        {/* NEW SECTION ENDS HERE */}
<div className="mt-16 py-16 bg-white rounded-3xl shadow-lg">
  <div className="text-center mb-12">
    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
      🧠 Real Use Cases That Drive Success
    </h3>
    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
      Builders are already creating magic with FlingBizzz — turning ideas into tangible projects, startups, and careers.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-12">
    {/* Case 1 */}
    <div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-purple-700">
      <h4 className="text-2xl font-bold text-gray-800 mb-4">
        🎓 Final Year Project Team-Up
      </h4>
      <p className="text-gray-700">
        A CS student teamed up with a design student to build a sleek budgeting app for their final project — all matched through FlingBizzz.
      </p>
    </div>

    {/* Case 2 */}
    <div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-purple-700">
      <h4 className="text-2xl font-bold text-gray-800 mb-4">
        🎬 Creator x Marketer Collab
      </h4>
      <p className="text-gray-700">
        A YouTuber found a part-time content marketer to help grow her channel to 10k+ subscribers organically.
      </p>
    </div>

    {/* Case 3 */}
    <div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-purple-700">
      <h4 className="text-2xl font-bold text-gray-800 mb-4">
        🚀 Early-Stage Startup Boost
      </h4>
      <p className="text-gray-700">
        A solo founder looking for a technical co-founder found a React dev interested in building on weekends — they launched MVP in 4 weeks.
      </p>
    </div>
  </div>
</div>




      </div>
    </section>
  );
};

export default FeaturesSection;
