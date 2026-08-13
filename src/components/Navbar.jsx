import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full max-w-full overflow-hidden backdrop-blur-lg bg-slate-900/70 border-b border-slate-700 z-50">
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-bold text-cyan-400 cursor-pointer whitespace-nowrap">
          Anshu<span className="text-white"> Pali</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-white font-medium">

          <li>
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#education" className="hover:text-cyan-400 transition">
              Education
            </a>
          </li>

          <li>
            <a
              href="#certifications"
              className="hover:text-cyan-400 transition"
            >
              Certifications
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden flex-shrink-0 text-white text-2xl p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden w-full bg-slate-900 border-t border-slate-700 px-6 py-5 space-y-4 text-white">

          <a
            href="#home"
            className="block hover:text-cyan-400"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>

          <a
            href="#about"
            className="block hover:text-cyan-400"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <a
            href="#skills"
            className="block hover:text-cyan-400"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>

          <a
            href="#education"
            className="block hover:text-cyan-400"
            onClick={() => setMenuOpen(false)}
          >
            Education
          </a>

          <a
            href="#certifications"
            className="block hover:text-cyan-400"
            onClick={() => setMenuOpen(false)}
          >
            Certifications
          </a>

          <a
            href="#projects"
            className="block hover:text-cyan-400"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>

          <a
            href="#contact"
            className="block hover:text-cyan-400"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>

        </div>
      )}
    </nav>
  );
}

export default Navbar;