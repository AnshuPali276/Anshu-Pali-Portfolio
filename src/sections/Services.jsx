import { motion } from "framer-motion";
import {
  FaAndroid,
  FaPython,
  FaReact,
  FaNetworkWired,
} from "react-icons/fa";
import bgImage from "../assets/images/background.png";

const services = [
  {
    icon: <FaAndroid size={45} className="text-green-500" />,
    title: "Android Development",
    desc: "Building Android applications using Java and Android Studio.",
  },
  {
    icon: <FaReact size={45} className="text-cyan-400" />,
    title: "Frontend Development",
    desc: "Creating responsive websites using React, HTML, CSS and Tailwind CSS.",
  },
  {
    icon: <FaPython size={45} className="text-yellow-400" />,
    title: "Python Development",
    desc: "Developing Python applications and automation solutions.",
  },
  {
    icon: <FaNetworkWired size={45} className="text-purple-400" />,
    title: "Networking",
    desc: "Computer networking fundamentals and Cisco Packet Tracer simulations.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative py-24 text-white bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16"
        >
          <span className="text-cyan-400">What</span>{" "}
          <span className="text-white">I Do</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 0 35px rgba(34,211,238,0.35)",
              }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 backdrop-blur-lg border border-cyan-500/20 rounded-3xl p-8 text-center hover:border-cyan-400 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-7">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;