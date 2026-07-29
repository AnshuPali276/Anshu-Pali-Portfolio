import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech) - Computer Science & Engineering",
    institute: "Dr. K.N. Modi Institute of Engineering & Technology, Modinagar",
    duration: "2024 - Present",
    desc: "Currently pursuing B.Tech in Computer Science & Engineering with a strong interest in Software Development, Frontend Development, Android Development, AI/ML and Networking.",
  },
  {
    degree: "Diploma in Computer Science & Engineering",
    institute: "KMGGP Badalpur, Gautam Buddha Nagar",
    duration: "2020 - 2023",
    desc: "Completed Diploma in Computer Science & Engineering Successfully, and gained practical knowlegedge.",
  },
  {
    degree: "Intermediate (12th)",
    institute: "Irrigation Inter College Kalkatti Narora Bulandshahr,Uttar Pradesh",
    duration: "2020",
    desc: "Completed Intermediate with a strong academic foundation.",
  },
  {
    degree: "High School (10th)",
    institute: "Irrigation Inter College Kalkatti Narora Bulandshahr,Uttar Pradesh",
    duration: "2018",
    desc: "Completed High School with a strong academic foundation.",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          Education
        </motion.h2>

        <div className="space-y-8">

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 transition"
            >
              <div className="flex items-start gap-5">

                <FaGraduationCap
                  size={35}
                  className="text-cyan-400 mt-1"
                />

                <div>

                  <h3 className="text-2xl font-semibold">
                    {item.degree}
                  </h3>

                  <p className="text-cyan-400 mt-1">
                    {item.institute}
                  </p>

                  <p className="text-gray-400 text-sm mt-1">
                    {item.duration}
                  </p>

                  <p className="text-gray-300 mt-4 leading-7">
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