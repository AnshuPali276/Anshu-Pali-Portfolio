import { motion } from "framer-motion";
import {
  FaAndroid,
  FaPython,
  FaReact,
  FaNetworkWired,
} from "react-icons/fa";

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
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          What I Do
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-slate-800 border border-slate-700 rounded-3xl p-8 text-center hover:border-cyan-400 transition"
            >
              <div className="flex justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400">
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