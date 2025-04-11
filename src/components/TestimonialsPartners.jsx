import React from "react";

const TestimonialsPartners = () => {
  const partners = [
    {
      name: "City Hospital",
      logo: "/hospital_3000010.png",
    },
    {
      name: "HealthDistribute",
      logo: "/care_6800289.png",
    },
    {
      name: "MediBrand",
      logo: "/substance_10527114.png",
    },
    {
      name: "Care Clinic",
      logo: "/clinic_8217926.png",
    },
  ];

  const testimonial = {
    quote: "Isha Pharma's commitment to quality and patient care has significantly improved our hospital's outcomes.",
    author: "Dr. Sarah Johnson",
    title: "Chief Medical Officer, City Hospital",
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Testimonials & Partners
        </h2>

        {/* Testimonial Quote */}
        <div className="text-center mb-12">
          <blockquote className="text-xl italic text-gray-700 max-w-3xl mx-auto">
            "{testimonial.quote}"
          </blockquote>
          <p className="mt-4 text-gray-600">
            - {testimonial.author}, {testimonial.title}
          </p>
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition border border-gray-100"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-16 w-auto object-contain"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPartners;