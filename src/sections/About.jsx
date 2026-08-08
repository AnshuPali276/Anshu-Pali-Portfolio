import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-12"
        >
          <span className="text-cyan-400">About</span>{" "}
          <span className="text-white">Me</span>
        </motion.h2>

        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 30px rgba(34,211,238,0.25)",
          }}
          className="bg-white/5 backdrop-blur-lg border border-cyan-500/20 rounded-3xl p-10 shadow-xl hover:border-cyan-400 transition"
        >
          <p className="text-lg text-gray-300 leading-9">

            Hi, I'm{" "}
            <span className="text-cyan-400 font-semibold">
              Anshu Pali
            </span>
            , a Computer Science Engineering student passionate about
            developing modern web applications, Android applications, and
            Python-based solutions.

            <br /><br />

            I enjoy learning new technologies, solving real-world problems,
            and building user-friendly, efficient, and scalable applications.

            <br /><br />

            Currently, I am enhancing my skills in{" "}
            <span className="text-cyan-400">
              React, Python, Networking, Artificial Intelligence,
              Machine Learning, and Full Stack Development
            </span>{" "}
            while working on innovative academic and personal projects.

            <br /><br />

            My goal is to become a skilled Software Developer who builds
            impactful applications that solve real-world problems through
            technology and innovation.

          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default About;