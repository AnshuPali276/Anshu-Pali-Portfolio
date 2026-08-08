import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";
import bgImage from "../assets/images/background.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="relative bg-cover bg-center bg-fixed text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/85"></div>

      {/* Top Border */}
      <div className="relative h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-12 text-center">

        <h2 className="text-4xl font-bold text-cyan-400">
          Anshu Pali
        </h2>

        <p className="text-gray-300 mt-4 max-w-3xl mx-auto leading-8">
          Computer Science Engineering Student | Python Developer |
          Android App Developer | Frontend Developer |
          Networking Enthusiast | AI & Machine Learning Learner
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-8 text-3xl">

          <a
            href="https://github.com/AnshuPali276"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 hover:scale-125 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/anshu-pali-24b933225/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 hover:scale-125 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:anshupali0676@gmail.com"
            className="hover:text-cyan-400 hover:scale-125 transition duration-300"
          >
            <FaEnvelope />
          </a>

        </div>

        {/* Divider */}
        <div className="w-40 h-[1px] bg-cyan-500 mx-auto my-8 opacity-60"></div>

        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Anshu Pali. All Rights Reserved.
        </p>

        <p className="mt-3 flex justify-center items-center gap-2 text-gray-400 text-sm">
          Made with
          <FaHeart className="text-red-500 animate-pulse" />
          using React & Tailwind CSS
        </p>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 transition font-semibold"
        >
          <FaArrowUp />
          Back to Top
        </button>

      </div>
    </footer>
  );
}

export default Footer;