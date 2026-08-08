import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech) - Computer Science & Engineering",
    institute:
      "Dr. K.N. Modi Institute of Engineering & Technology, Modinagar",
    duration: "2024 - Present",
    desc: "Currently pursuing B.Tech in Computer Science & Engineering with a strong interest in Software Development, Frontend Development, Android Development, Artificial Intelligence, Machine Learning and Networking.",
  },
  {
    degree: "Diploma in Computer Science & Engineering",
    institute: "KMGGP Badalpur, Gautam Buddha Nagar",
    duration: "2020 - 2023",
    desc: "Completed Diploma in Computer Science & Engineering successfully and gained practical knowledge in programming, databases, networking and software development.",
  },
  {
    degree: "Intermediate (12th)",
    institute:
      "Irrigation Inter College, Kalkatti Narora, Bulandshahr, Uttar Pradesh",
    duration: "2020",
    desc: "Completed Intermediate with a strong academic foundation.",
  },
  {
    degree: "High School (10th)",
    institute:
      "Irrigation Inter College, Kalkatti Narora, Bulandshahr, Uttar Pradesh",
    duration: "2018",
    desc: "Completed High School with a strong academic foundation.",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16"
        >
          <span className="text-cyan-400">My</span>{" "}
          <span className="text-white">Education</span>
        </motion.h2>

        <div className="space-y-8">

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px rgba(34,211,238,0.25)",
              }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-lg border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-300"
            >
              <div className="flex items-start gap-5">

                <div className="bg-cyan-500/10 p-4 rounded-full">
                  <FaGraduationCap
                    size={35}
                    className="text-cyan-400"
                  />
                </div>

                <div>

                  <h3 className="text-2xl font-semibold">
                    {item.degree}
                  </h3>

                  <p className="text-cyan-400 mt-2">
                    {item.institute}
                  </p>

                  <p className="text-gray-400 text-sm mt-2">
                    {item.duration}
                  </p>

                  <p className="text-gray-300 mt-5 leading-7">
                    {item.desc}
                  </p>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;