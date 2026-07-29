import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-900 text-white flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-cyan-400 mb-12"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-slate-800 rounded-3xl p-10 shadow-lg"
        >

          <p className="text-lg text-gray-300 leading-9">

            Hi, I'm <span className="text-cyan-400 font-semibold">Anshu Pali</span>,
            a Computer Science Engineering student passionate about creating
            modern web applications, Android applications, and Python-based
            solutions.

            <br /><br />

            I enjoy learning new technologies, solving real-world problems,
            and building user-friendly applications.

            <br /><br />

            Currently, I'm enhancing my skills in React, Python,
            Networking, AI & Machine Learning and Full Stack Development while working on
            innovative academic and personal projects.

          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default About;