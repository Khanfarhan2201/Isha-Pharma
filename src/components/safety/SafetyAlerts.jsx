import { useEffect, useState } from 'react';
import { HiOutlineExclamationCircle, HiOutlineInformationCircle } from 'react-icons/hi';

const SafetyAlerts = () => {
  const [activeAlert, setActiveAlert] = useState(0);

  const alerts = [
    {
      id: 1,
      title: "Important Safety Update",
      content: "Batch #PH2024-025 recall due to packaging inconsistency.",
      date: "May 15, 2024",
      urgency: "high"
    },
    {
      id: 2,
      title: "New Approval",
      content: "FDA approves IshaRelief™ 50mg for migraine treatment.",
      date: "April 28, 2024",
      urgency: "medium"
    }
  ];

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAlert((prev) => (prev + 1) % alerts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [alerts.length]);

  const current = alerts[activeAlert];
  const urgencyStyles = current.urgency === 'high'
    ? 'bg-red-50 border-red-600 text-red-800'
    : 'bg-blue-50 border-blue-600 text-blue-800';

  const Icon = current.urgency === 'high' ? HiOutlineExclamationCircle : HiOutlineInformationCircle;

  return (
    <section className="w-full py-6">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            <span className="inline-block border-b-2 border-blue-500 pb-1">Safety Alerts & Updates</span>
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Important pharmaceutical notifications and regulatory updates
          </p>
        </div>

        {/* Alert Box */}
        <div className={`w-full p-4 rounded-lg border-l-4 transition-all duration-500 ease-in-out ${urgencyStyles}`}>
          <div className="flex justify-between items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <Icon className="h-6 w-6" />
            </div>
    
            <div className="flex-1">
              <h3 className="font-semibold text-lg leading-tight">{current.title}</h3>
              <p className="text-sm mt-1 leading-snug">{current.content}</p>
              <span className="text-xs text-gray-500 mt-2 block">{current.date}</span>
    
              <a 
                href="/pharmacovigilance" 
                className="inline-block mt-3 text-sm font-medium text-blue-600 hover:underline"
              >
                Report Adverse Event →
              </a>
            </div>
    
            {alerts.length > 1 && (
              <button 
                onClick={() => setActiveAlert((prev) => (prev + 1) % alerts.length)}
                className="text-gray-400 hover:text-gray-600 ml-2 transition"
                aria-label="Next Alert"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyAlerts;