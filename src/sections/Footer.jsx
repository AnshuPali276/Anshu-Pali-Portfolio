import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-cyan-400">
          Anshu Pali
        </h2>

        <p className="text-gray-400 mt-3">
          Computer Science Engineering Student | Python Developer | Android App Developer | Frontend Developer
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6 text-3xl">

          <a
            href="https://github.com/AnshuPali276"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/anshu-pali-24b933225/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:anshupali0676@gmail.com"
            className="hover:text-cyan-400 transition hover:scale-110"
          >
            <FaEnvelope />
          </a>

        </div>

        <p className="text-gray-500 mt-8 text-sm">
          © {new Date().getFullYear()} Anshu Pali. All Rights Reserved.
        </p>

        <p className="text-gray-500 mt-2 flex justify-center items-center gap-2 text-sm">
          Made with <FaHeart className="text-red-500" /> using React & Tailwind CSS
        </p>

      </div>
    </footer>
  );
}

export default Footer;