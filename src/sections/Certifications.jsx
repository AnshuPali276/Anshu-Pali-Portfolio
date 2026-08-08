import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaAndroid,
  FaNetworkWired,
} from "react-icons/fa";
import { FaJava, FaCode } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { TbBrain } from "react-icons/tb";

import android from "../assets/images/android.jpeg";
import network from "../assets/images/network.jpeg";
import ml from "../assets/images/ml.jpeg";
import javascript from "../assets/images/javascript.png";
import python from "../assets/images/python.jpeg";
import webwar from "../assets/images/webwar.jpeg";
import corejava from "../assets/images/corejava.jpeg";

const certifications = [
  {
    title: "Android with Core Java",
    organization: "Netcamp Solutions Pvt. Ltd.",
    year: "2026",
    icon: <FaAndroid className="text-green-500 text-5xl" />,
    image: android,
  },
  {
    title: "Network Management & Web Development with Ethical Hacking",
    organization: "Netcamp Solutions Pvt. Ltd.",
    year: "2026",
    icon: <FaNetworkWired className="text-purple-500 text-5xl" />,
    image: network,
  },
  {
    title: "Workshop on Machine Learning",
    organization: "Softpro India Computer Technologies (P) Ltd.",
    year: "2025",
    icon: <TbBrain className="text-pink-500 text-5xl" />,
    image: ml,
  },
  {
    title: "Workshop on JavaScript",
    organization: "Softpro India Computer Technologies (P) Ltd.",
    year: "2025",
    icon: <SiJavascript className="text-yellow-400 text-5xl" />,
    image: javascript,
  },
  {
    title: "Python with Django Summer Training",
    organization: "Softpro India Computer Technologies (P) Ltd.",
    year: "2022",
    icon: <FaPython className="text-blue-400 text-5xl" />,
    image: python,
  },
  {
    title: "Web War - The War of Web Designing",
    organization: "Softpro India Computer Technologies (P) Ltd.",
    year: "2022",
    icon: <FaCode className="text-cyan-400 text-5xl" />,
    image: webwar,
  },
  {
    title: "Core Java Training",
    organization: "Arcane Programming Infotech Pvt. Ltd.",
    year: "2022",
    icon: <FaJava className="text-orange-500 text-5xl" />,
    image: corejava,
  },
];

function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="certifications"
      className="py-24 bg-gradient-to-b from-black via-slate-950 to-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16"
        >
          <span className="text-cyan-400">My</span>{" "}
          <span className="text-white">Certifications</span>
        </motion.h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {certifications.map((item, index) => (
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

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-cyan-400">
                {item.organization}
              </p>

              <p className="text-gray-400 mt-2">
                {item.year}
              </p>

              <button
                onClick={() => setSelectedImage(item.image)}
                className="mt-6 px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-semibold"
              >
                View Certificate
              </button>

            </motion.div>
          ))}

        </div>

      </div>

            {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white rounded-xl p-3 max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 w-9 h-9 rounded-full bg-gray-800 hover:bg-black text-white text-lg transition"
            >
              ✕
            </button>

            {/* Certificate Image */}
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;