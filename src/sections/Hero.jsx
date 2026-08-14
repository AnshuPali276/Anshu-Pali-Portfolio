import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import resume from "../assets/resume/MY(Anshu_Pali)_Resume.pdf";
import heroBg from "../assets/images/background.png";

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
      className="
        relative
        w-full
        max-w-full
        min-h-screen
        bg-cover
        bg-center
        bg-no-repeat
        overflow-x-hidden
      "
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          py-24
          md:py-0
          min-h-screen
          grid
          grid-cols-1
          md:grid-cols-2
          gap-12
          md:gap-16
          items-center
          overflow-x-hidden
        "
      >
        {/* ================= LEFT CONTENT ================= */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full min-w-0 max-w-full overflow-hidden"
        >
          {/* Hello */}
          <p className="text-cyan-400 text-base sm:text-lg mb-3">
            👋 Hello, I'm
          </p>

          {/* Name */}
          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-7xl
              font-bold
              text-white
              break-words
            "
          >
            Anshu <span className="text-cyan-400">Pali</span>
          </h1>

          {/* Typing Animation */}
          <div
            className="
              mt-5
              w-full
              max-w-full
              min-h-[70px]
              text-xl
              sm:text-2xl
              md:text-4xl
              font-semibold
              text-white
              break-words
              overflow-hidden
            "
          >
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
              wrapper="div"
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Description */}
          <p
            className="
              mt-5
              sm:mt-6
              w-full
              max-w-2xl
              text-gray-300
              leading-7
              sm:leading-8
              text-base
              sm:text-lg
              break-words
            "
          >
            Passionate Computer Science Engineering student with a strong
            foundation in Python, Android Development, Frontend Development,
            Networking and Modern Web Technologies. Currently expanding my
            skills in Artificial Intelligence and Machine Learning by building
            real-world projects.
          </p>

          {/* ================= BUTTONS ================= */}

          <div
            className="
              mt-8
              sm:mt-10
              w-full
              max-w-full
              flex
              flex-wrap
              items-center
              gap-3
              sm:gap-4
            "
          >
            {/* View Projects */}
            <a
              href="#projects"
              className="
                px-5
                sm:px-6
                py-3
                bg-cyan-500
                rounded-xl
                hover:bg-cyan-600
                transition
                font-semibold
                text-sm
                sm:text-base
              "
            >
              📂 View Projects
            </a>

            {/* View Resume */}
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-5
                sm:px-6
                py-3
                border
                border-green-400
                text-green-400
                rounded-xl
                hover:bg-green-400
                hover:text-black
                transition
                font-semibold
                text-sm
                sm:text-base
              "
            >
              👁 View Resume
            </a>

            {/* Download Resume */}
            <a
              href={resume}
              download="MY(Anshu_Pali)_Resume.pdf"
              className="
                px-5
                sm:px-6
                py-3
                border
                border-cyan-400
                text-cyan-400
                rounded-xl
                hover:bg-cyan-400
                hover:text-black
                transition
                font-semibold
                text-sm
                sm:text-base
              "
            >
              ⬇ Download Resume
            </a>
          </div>

          {/* ================= SOCIAL ICONS ================= */}

          <div
            className="
              flex
              items-center
              gap-5
              sm:gap-6
              mt-7
              sm:mt-8
              text-3xl
              text-white
            "
          >
            {/* GitHub */}
            <a
              href="https://github.com/AnshuPali276"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hover:text-cyan-400
                hover:scale-110
                transition
              "
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/anshu-pali-24b933225/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hover:text-cyan-400
                hover:scale-110
                transition
              "
            >
              <FaLinkedin />
            </a>

            {/* Email */}
            <a
              href="mailto:anshupali0676@gmail.com"
              className="
                hover:text-cyan-400
                hover:scale-110
                transition
              "
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* ================= RIGHT PROFILE ================= */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="
            relative
            flex
            justify-center
            items-center
            w-full
            min-w-0
            max-w-full
            mt-8
            md:mt-0
            px-4
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              w-56
              h-56
              sm:w-72
              sm:h-72
              md:w-80
              md:h-80
              bg-cyan-500
              rounded-full
              blur-3xl
              opacity-30
            "
          ></div>

          {/* Profile Image */}
          <img
            src={profile}
            alt="Anshu Pali"
            className="
              relative
              w-56
              h-56
              sm:w-72
              sm:h-72
              md:w-80
              md:h-80
              max-w-full
              rounded-full
              object-cover
              border-4
              border-cyan-400
              shadow-[0_0_40px_#22d3ee]
            "
          />

          {/* Python */}
          <FaPython
            className="
              absolute
              top-0
              left-[12%]
              sm:left-[15%]
              md:left-8
              text-yellow-400
              text-4xl
              sm:text-5xl
              animate-bounce
            "
          />

          {/* Android */}
          <FaAndroid
            className="
              absolute
              bottom-0
              right-[12%]
              sm:right-[15%]
              md:right-5
              text-green-500
              text-4xl
              sm:text-5xl
              animate-bounce
            "
          />

          {/* React */}
          <SiReact
            className="
              absolute
              top-5
              right-[5%]
              sm:right-[10%]
              md:right-0
              text-cyan-400
              text-4xl
              sm:text-5xl
              animate-spin
            "
          />

          {/* HTML */}
          <SiHtml5
            className="
              absolute
              bottom-16
              left-[5%]
              sm:left-[10%]
              md:left-0
              text-orange-500
              text-4xl
              sm:text-5xl
              animate-bounce
            "
          />

          {/* CSS */}
          <SiCss
            className="
              absolute
              bottom-2
              right-[28%]
              sm:right-[30%]
              md:right-24
              text-blue-500
              text-4xl
              sm:text-5xl
              animate-bounce
            "
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;