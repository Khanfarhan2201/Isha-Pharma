import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-20 font-[Poppins] overflow-hidden"  style={{backgroundColor:"#122847",color:"#A3E635"}}>
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB...')] bg-repeat"></div>
      </div>

      <div className="relative z-10 px-6 container mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <br />
          <br />
          <h1 className="text-5xl font-extrabold mb-4 text-white tracking-wide drop-shadow-2xl">
            Let's Connect
          </h1>
          <p className="text-lg md:text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
            Reach us anytime — we're always happy to hear from you!
          </p>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {[
              {
                icon: <MdEmail className="text-3xl text-cyan-400" />,
                title: "Email Us",
                content: (
                  <a href="mailto:contact@example.com" className="text-purple-300 hover:text-cyan-300 underline">
                    contact@example.com
                  </a>
                ),
              },
              {
                icon: <FaPhoneAlt className="text-2xl text-cyan-400" />,
                title: "Call Us",
                content: (
                  <a href="tel:+1234567890" className="text-purple-300 hover:text-cyan-300 underline">
                    +1 (234) 567-890
                  </a>
                ),
              },
              {
                icon: <FaMapMarkerAlt className="text-2xl text-cyan-400" />,
                title: "Visit Us",
                content: (
                  <p className="text-purple-300 text-center">
                    123 Business Ave<br />
                    San Francisco, CA 94107
                  </p>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl hover:scale-105 transform"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <div className="text-purple-200">{item.content}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Working Hours */}
          <div className="mt-16 max-w-lg mx-auto bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-lg">
            <div className="flex items-center justify-center gap-4">
              <FaClock className="text-2xl text-cyan-400" />
              <div>
                <h3 className="text-lg font-semibold text-white">Working Hours</h3>
                <p className="text-purple-300">Mon - Fri: 9AM - 5PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
