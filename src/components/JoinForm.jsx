import React, { useState } from 'react';
import axios from 'axios';
const JoinForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
 
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email || !validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');
    setShowModal(true);
  };

  const handleSubmitName = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/submit', {
        name,
        email,
      });
  
      console.log(res.data); // Optional: confirm success
      setShowPopup(false);
      setShowThankYou(true);
      setName("");
      setEmail("");
    } catch (err) {
      console.error('Error saving user:', err);
    }
  };

  return (
    <div className="p-4">
      {submitted ? (
        <div className="text-green-600">
          Thanks for joining! 👉 <a href="https://chat.whatsapp.com/YOUR_COMMUNITY_LINK" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">Join our WhatsApp Community</a>
        </div>
      ) : (
        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border px-3 py-2 rounded w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Join Now
          </button>
        </form>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
          <div className="bg-white p-6 rounded shadow-md max-w-sm w-full">
            <h2 className="text-xl mb-4">What's your name?</h2>
            <form onSubmit={handleFinalSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Enter your name"
                className="border px-3 py-2 rounded w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <div className="flex justify-end space-x-2">
                <button type="button" className="text-gray-500" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
              </div>
            </form>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default JoinForm;
