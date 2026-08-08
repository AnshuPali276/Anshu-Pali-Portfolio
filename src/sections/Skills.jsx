import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa";
import { TbBrain } from "react-icons/tb";
import {
  FaPython,
  FaAndroid,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNetworkWired,
} from "react-icons/fa";

import { SiJavascript, SiMysql, SiTailwindcss } from "react-icons/si";

const skills = [
  {
    name: "Java",
    icon: <FaJava size={45} className="text-red-500" />,
  },
  {
    name: "Python",
    icon: <FaPython size={45} className="text-yellow-400" />,
  },
  {
    name: "Android Development",
    icon: <FaAndroid size={45} className="text-green-500" />,
  },
  {
    name: "Frontend Development",
    icon: <FaReact size={45} className="text-cyan-400" />,
  },
  {
    name: "Networking",
    icon: <FaNetworkWired size={45} className="text-purple-400" />,
  },
  {
    name: "HTML5",
    icon: <FaHtml5 size={45} className="text-orange-500" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt size={45} className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={45} className="text-yellow-300" />,
  },
  {
    name: "React",
    icon: <FaReact size={45} className="text-cyan-400" />,
  },
  {
    name: "Artificial Intelligence",
    icon: <FaBrain size={45} className="text-pink-400" />,
  },
  {
    name: "Machine Learning",
    icon: <TbBrain size={45} className="text-violet-400" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={45} className="text-sky-400" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql size={45} className="text-blue-400" />,
  },
];

function Skills() {
  return (
    <section
      id="skills"
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
          <span className="text-white">Skills</span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 35px rgba(34,211,238,0.35)",
              }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-8 text-center hover:border-cyan-400 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex justify-center mb-5">
                {skill.icon}
              </div>

              <h3 className="text-lg font-semibold">
                {skill.name}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;