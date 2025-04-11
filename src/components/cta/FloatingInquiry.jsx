import { useState } from 'react';

const FloatingInquiry = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded ? (
        <div className="bg-white p-4 rounded-lg shadow-xl w-64">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-gray-800">Contact Our Team</h3>
            <button 
              onClick={() => setIsExpanded(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          <a
            href="mailto:distributors@ishapharma.com"
            className="block mb-2 p-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 text-sm"
          >
            ✉ Email Us
          </a>
          <a
            href="tel:+18005551234"
            className="block p-2 bg-green-50 text-green-600 rounded hover:bg-green-100 text-sm"
          >
            📞 Call +1 (800) 555-1234
          </a>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition-all flex items-center animate-pulse hover:animate-none"
          aria-label="Distributor inquiry"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default FloatingInquiry;