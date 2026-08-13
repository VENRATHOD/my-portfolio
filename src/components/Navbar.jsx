import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import resumeFile from "../assets/resume/Venkatesh_Rathod_Resume.pdf";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href) => {
    setIsOpen(false);

    const target = document.querySelector(href);

    if (target) {
      setTimeout(() => {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-500 text-slate-950 flex items-center justify-center font-black shadow-lg shadow-cyan-500/20">
              VR
            </div>

            <div className="hidden sm:block text-left">
              <p className="font-bold text-white">
                Venkatesh Rathod
              </p>

              <p className="text-xs text-slate-500">
                Java Full Stack Developer
              </p>
            </div>
          </button>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-8">

            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition"
              >
                {item.name}
              </button>
            ))}

          </div>

          {/* Desktop Right */}

          <div className="hidden lg:flex items-center gap-3">

            <a
              href="https://github.com/VENRATHOD"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl border border-slate-700 bg-slate-900 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/venkatesh-rathod-91176b330"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl border border-slate-700 bg-slate-900 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href={resumeFile}
              download="Venkatesh_Rathod_Resume.pdf"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition"
            >
              <FaDownload />
              Resume
            </a>

          </div>

          {/* Mobile Toggle */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 rounded-xl border border-slate-700 bg-slate-900 flex items-center justify-center text-slate-300"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-800 bg-slate-950"
          >

            <div className="px-6 py-5 space-y-2">

              {navItems.map((item) => (

                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-900 hover:text-cyan-400 transition"
                >
                  {item.name}
                </button>

              ))}

              <a
                href={resumeFile}
                download="Venkatesh_Rathod_Resume.pdf"
                onClick={() => setIsOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold"
              >
                <FaDownload />
                Download Resume
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>
  );
}

export default Navbar;