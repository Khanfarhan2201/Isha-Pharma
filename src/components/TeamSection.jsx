// components/TeamSection.jsx
import React from 'react';

// components/ModernTeam.jsx
import { motion } from 'framer-motion';

const ModernTeam = () => {
  const team = [
    {
      id: 1,
      name: "Dr. Aisha Khan",
      role: "Chief Scientist",
      image: "/images/team/scientist.jpg",
      delay: 0.1
    },
    // Add more team members...
  ];

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          The <span className="text-blue-600">Minds</span> Behind Innovation
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Our interdisciplinary team brings together decades of pharmaceutical expertise.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white text-2xl font-bold">{person.name}</h3>
                    <p className="text-blue-200">{person.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernTeam;