import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import PropTypes from "prop-types";

const ContactCards = ({ contacts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {contacts.map((contact, index) => (
        <div 
          key={index} 
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          {/* Card Header */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                {contact.avatar ? (
                  <img 
                    src={contact.avatar} 
                    alt={contact.name} 
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <FaUser className="text-2xl text-white/80" />
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold">{contact.name}</h3>
                <p className="text-white/90">{contact.title}</p>
              </div>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-500 flex-shrink-0" />
              <a 
                href={`mailto:${contact.email}`} 
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 hover:underline break-all"
              >
                {contact.email}
              </a>
            </div>

            {contact.phone && (
              <div className="flex items-center gap-3">
                <FaPhone className="text-indigo-500 flex-shrink-0" />
                <a 
                  href={`tel:${contact.phone}`} 
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 hover:underline"
                >
                  {contact.phone}
                </a>
              </div>
            )}

            {contact.address && (
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-indigo-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{contact.address}</span>
              </div>
            )}

            {/* Social Links */}
            {(contact.linkedin || contact.github || contact.website) && (
              <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex gap-4">
                  {contact.linkedin && (
                    <a 
                      href={contact.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                  )}
                  {contact.github && (
                    <a 
                      href={contact.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  )}
                  {contact.website && (
                    <a 
                      href={contact.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      aria-label="Website"
                    >
                      <FaGlobe className="text-xl" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

ContactCards.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string,
      address: PropTypes.string,
      avatar: PropTypes.string,
      linkedin: PropTypes.string,
      github: PropTypes.string,
      website: PropTypes.string,
    })
  ).isRequired,
};

export default ContactCards;