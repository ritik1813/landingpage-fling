import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleJoinClick = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setShowPopup(true);
  };

  const handleSubmitName = async () => {
    if (!name) {
      setError("Please enter your name.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("User saved:", data);
        setShowPopup(false);
        setShowThankYou(true);
        setEmail("");
        setName("");
        setError("");
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error("Error submitting:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <section className="w-full text-center py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50">
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 tracking-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        You Have The <span className="text-purple-700">Fire</span>.<br />
        We'll Bring the <span className="text-purple-700">Fuel</span>.
      </motion.h1>

      <motion.p
        className="mt-6 text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        You’ve got an idea. But you’re missing something — maybe a designer, a coder, a co-founder, or just the right energy to kick it off.
        FlingBizzz is where your idea finds its wings.
      </motion.p>

      <motion.div
        className="mt-10 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 bg-white rounded-xl p-3 shadow-lg">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Join the movement – your@email.com"
            className="flex-grow bg-white text-black rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 transition-all"
          />
          <Button
            onClick={handleJoinClick}
            className="bg-purple-700 text-white rounded-lg px-6 py-3 hover:bg-purple-800 hover:shadow-xl transition-shadow"
          >
            Join Now
          </Button>
        </div>
        {error && <p className="text-red-600 mt-2">{error}</p>}
        <p className="mt-4 text-sm text-gray-500">
          Join <span className="font-semibold">100+</span> creators who started with FlingBizzz.
        </p>
      </motion.div>

      {/* Name Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-xl">
            <h2 className="text-lg font-semibold mb-4">What’s your name?</h2>
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-4"
            />
            <div className="flex justify-end space-x-2">
              <Button onClick={() => setShowPopup(false)} variant="outline">
                Cancel
              </Button>
              <Button onClick={handleSubmitName} className="bg-purple-700 text-white">
                Submit
              </Button>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-xl text-center">
            <h2 className="text-xl font-bold mb-4">You're in, {name} 🎉</h2>
            <p className="text-gray-700 mb-4">
              Thanks for joining! You're one step away from real growth.
            </p>
            <a
              href="https://chat.whatsapp.com/HZtDZ2YMYATADMdFheCi9Z"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-600 text-white px-6 py-3 hover:bg-green-700 transition-all w-full mb-3">
                👉 Join Our WhatsApp Community
              </Button>
            </a>
            <Button onClick={() => setShowThankYou(false)} variant="outline" className="w-full">
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
