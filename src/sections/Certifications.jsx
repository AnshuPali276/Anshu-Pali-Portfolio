import { motion } from "framer-motion";
import {
  FaCertificate,
  FaPython,
  FaAndroid,
  FaNetworkWired,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { TbBrain } from "react-icons/tb";

const certifications = [
  {
    title: "Android with Core Java",
    organization: "Netcamp Solutions Pvt. Ltd.",
    year: "2026",
    icon: <FaAndroid className="text-green-500 text-5xl" />,
  },
  {
    title: "Network Management & Web Development with Ethical Hacking",
    organization: "Netcamp Solutions Pvt. Ltd.",
    year: "2026",
    icon: <FaNetworkWired className="text-purple-500 text-5xl" />,
  },
  {
    title: "Workshop on Machine Learning",
    organization: "Softpro India Computer Technologies (P) Ltd.",
    year: "2024",
    icon: <TbBrain className="text-pink-500 text-5xl" />,
  },
  {
    title: "Workshop on JavaScript",
    organization: "Softpro India Computer Technologies (P) Ltd.",
    year: "2024",
    icon: <SiJavascript className="text-yellow-400 text-5xl" />,
  },
  {
    title: "Python Developer Training",
    organization: "Alfido Tech",
    year: "2025",
    icon: <FaPython className="text-blue-400 text-5xl" />,
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          Certifications
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {certifications.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(34,211,238,0.4)",
              }}
              transition={{ duration: 0.4 }}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center hover:border-cyan-400"
            >
              <div className="flex justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-cyan-400">
                {item.organization}
              </p>

              <p className="text-gray-400 mt-3">
                {item.year}
              </p>

              <div className="mt-6">
                <button className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition">
                  View Certificate
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;