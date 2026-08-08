import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import bgImage from "../assets/images/background.png";

function Projects() {
  const projects = [
    {
      title: "AI Based Cyber Threat Detection System",
      status: "✅ Completed",
      progress: 100,
      description:
        "An AI-powered cybersecurity project that monitors system activities in real time, detects suspicious behaviour using Machine Learning, and provides alerts through an interactive dashboard.",
      tech: [
        "Python",
        "Machine Learning",
        "Flask",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      github: "https://github.com/AnshuPali276",
    },
    {
      title: "Library Management System",
      status: "✅ Completed",
      progress: 100,
      description:
        "A desktop-based application developed using Java, JDBC and MySQL to manage books, students, issue and return records efficiently.",
      tech: ["Java", "JDBC", "MySQL"],
      github: "https://github.com/AnshuPali276/Library-management-sytem-",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 text-white bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-16"
        >
          <span className="text-cyan-400">My</span>{" "}
          <span className="text-white">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.04,
                y: -8,
                boxShadow: "0 0 35px rgba(34,211,238,0.35)",
              }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 backdrop-blur-lg border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              <span className="inline-block bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-4 py-1 rounded-full text-sm mb-5">
                {project.status}
              </span>

              <p className="text-gray-300 leading-7 mb-6">
                {project.description}
              </p>

              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span>Project Progress</span>
                  <span>{project.progress}%</span>
                </div>

                <div className="w-full bg-slate-700/60 rounded-full h-3">
                  <div
                    className="bg-cyan-400 h-3 rounded-full transition-all duration-700"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full text-sm text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-xl transition font-semibold"
              >
                <FaGithub />
                View on GitHub
              </a>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;