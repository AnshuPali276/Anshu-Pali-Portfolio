import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import resume from "../assets/resume/MY(Anshu_Pali)_Resume.pdf";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPython,
  FaAndroid,
} from "react-icons/fa";
import { SiReact, SiHtml5, SiCss } from "react-icons/si";
import profile from "../assets/images/profile.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center justify-center pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 text-lg mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold">
            Anshu <span className="text-cyan-400">Pali</span>
          </h1>

          <div className="mt-6 text-2xl md:text-4xl font-semibold h-16">
            <TypeAnimation
              sequence={[
                "Android App Developer",
                2000,
                "Python Developer",
                2000,
                "Frontend Developer",
                2000,
                "Networking Enthusiast",
                2000,
                "AI & ML Learner",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 text-gray-400 leading-8 text-lg">
            Passionate Computer Science Engineering student with a strong
            foundation in Python, Android Development, Frontend Development,
            Networking and Modern Web Technologies. Currently expanding my
            skills in Artificial Intelligence and Machine Learning by building
            real-world projects.
          </p>

          {/* Buttons + Social Icons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">

            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-500 rounded-xl hover:bg-cyan-600 transition font-semibold"
            >
              📂 View Projects
            </a>

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-green-400 text-green-400 rounded-xl hover:bg-green-400 hover:text-black transition font-semibold"
            >
              👁 View Resume
            </a>

            <a
              href={resume}
              download="MY(Anshu_Pali)_Resume.pdf"
              className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black transition font-semibold"
            >
              ⬇ Download Resume
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-5 ml-2 text-3xl">

              <a
                href="https://github.com/AnshuPali276"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 hover:scale-110 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/anshu-pali-24b933225/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:anshupali0676@gmail.com"
                className="hover:text-cyan-400 hover:scale-110 transition"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="absolute w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>

          <img
            src={profile}
            alt="Anshu Pali"
            className="relative w-80 h-80 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_40px_#22d3ee]"
          />

          <FaPython className="absolute top-0 left-8 text-yellow-400 text-5xl animate-bounce" />

          <FaAndroid className="absolute bottom-0 right-5 text-green-500 text-5xl animate-bounce" />

          <SiReact className="absolute top-5 right-0 text-cyan-400 text-5xl animate-spin" />

          <SiHtml5 className="absolute bottom-16 left-0 text-orange-500 text-5xl animate-bounce" />

          <SiCss className="absolute bottom-2 right-24 text-blue-500 text-5xl animate-bounce" />

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;