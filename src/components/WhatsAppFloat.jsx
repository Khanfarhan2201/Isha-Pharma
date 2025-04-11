import React, { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WhatsAppFloat = () => {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (message.trim() !== '') {
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/919305043140?text=${encodedMessage}`, '_blank');
    }
  };

  return (
    <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-[1000] flex flex-col items-end">
      {/* Floating WhatsApp Icon */}
      {!showChat && (
        <button
          onClick={() => setShowChat(true)}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center"
          aria-label="Chat with us"
        >
          <FaWhatsapp className="text-2xl" />
        </button>
      )}

      {/* Chat Popup */}
      <div
        className={`mt-2 transform transition-all duration-300 ease-in-out ${
          showChat ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
        } w-full max-w-sm sm:w-72 bg-white rounded-lg shadow-xl overflow-hidden z-[1001]`}
      >
        {/* Header */}
        <div className="bg-green-500 text-white p-3 flex justify-between items-center">
          <div>
            <h3 className="font-semibold">Chat with Isha Pharma</h3>
            <p className="text-xs">We typically reply within minutes</p>
          </div>
          <button
            onClick={() => setShowChat(false)}
            className="text-white hover:text-gray-200"
          >
            <FaTimes />
          </button>
        </div>

        {/* Body */}
        <div className="p-4">
          <p className="text-sm mb-2">👋 Hello! How can we help you today?</p>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="w-full border rounded px-3 py-2 text-sm mb-3 focus:outline-none focus:ring focus:border-green-400"
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            Start Chat on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;
