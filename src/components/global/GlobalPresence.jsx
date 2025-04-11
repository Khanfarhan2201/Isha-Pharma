const GlobalPresence = () => {
    const facilities = [
      {
        country: "India",
        cities: ["Hyderabad", "Mumbai", "Bengaluru"],
        certification: "WHO-GMP"
      },
      {
        country: "United States",
        cities: ["New Jersey"],
        certification: "FDA Approved"
      },
      {
        country: "Germany",
        cities: ["Berlin"],
        certification: "EMA Compliant"
      }
    ];
  
    return (
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Global Manufacturing Network
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="mr-2">🌍</span>
                  {facility.country}
                </h3>
                <ul className="mb-4 space-y-1">
                  {facility.cities.map((city, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {city}
                    </li>
                  ))}
                </ul>
                <div className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full inline-block">
                  {facility.certification}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default GlobalPresence;