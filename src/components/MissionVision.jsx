import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const MissionVision = () => {
  const content = [
    {
      title: "Our Mission",
      icon: (
        <svg
          className="w-12 h-12 mx-auto text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      ),
      text:
        "To deliver affordable, life-saving medicines while upholding the highest standards of quality and ethics.",
    },
    {
      title: "Our Vision",
      icon: (
        <svg
          className="w-12 h-12 mx-auto text-purple-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          <path d="M12 4a8 8 0 100 16 8 8 0 000-16z"></path>
        </svg>
      ),
      text:
        "To be a global leader in generics and specialty pharmaceuticals through innovation and patient-centric solutions.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-sky-50 via-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10">
          {content.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
