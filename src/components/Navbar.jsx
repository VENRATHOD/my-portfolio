import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import resumeFile from "../assets/resume/Venkatesh_Rathod_Resume.pdf";
import {
  FaBars,
  FaTimes,
  FaDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        border-b
        border-slate-800/70
        bg-slate-950/80
        backdrop-blur-xl
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3"
            onClick={closeMenu}
          >
            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-cyan-500
                text-slate-950
                flex
                items-center
                justify-center
                font-black
                text-lg
                shadow-lg
                shadow-cyan-500/20
              "
            >
              VR
            </div>

            <div className="hidden sm:block">
              <p className="font-bold text-white">
                Venkatesh Rathod
              </p>

              <p className="text-xs text-slate-500">
                Java Full Stack Developer
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  text-sm
                  font-medium
                  text-slate-400
                  hover:text-cyan-400
                  transition-colors
                  duration-300
                "
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">

            <a
              href="https://github.com/VENRATHOD"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                w-10
                h-10
                rounded-xl
                border
                border-slate-700
                bg-slate-900
                flex
                items-center
                justify-center
                text-slate-300
                hover:text-cyan-400
                hover:border-cyan-400
                transition-all
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                w-10
                h-10
                rounded-xl
                border
                border-slate-700
                bg-slate-900
                flex
                items-center
                justify-center
                text-slate-300
                hover:text-cyan-400
                hover:border-cyan-400
                transition-all
              "
            >
              <FaLinkedin />
            </a>

            <a
              href={resumeFile}
            download="Venkatesh_Rathod_Resume.pdf"
              className="
                flex
                items-center
                gap-2
                px-4
                py-2.5
                rounded-xl
                bg-cyan-500
                text-slate-950
                text-sm
                font-bold
                hover:bg-cyan-400
                hover:scale-105
                transition-all
                duration-300
              "
            >
              <FaDownload />
              Resume
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              lg:hidden
              w-10
              h-10
              rounded-xl
              border
              border-slate-700
              bg-slate-900
              flex
              items-center
              justify-center
              text-slate-300
              hover:text-cyan-400
              transition-all
            "
            aria-label="Toggle navigation"
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
            className="
              lg:hidden
              border-t
              border-slate-800
              bg-slate-950
            "
          >
            <div className="px-6 py-5 space-y-2">

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="
                    block
                    px-4
                    py-3
                    rounded-xl
                    text-slate-300
                    hover:bg-slate-900
                    hover:text-cyan-400
                    transition-all
                  "
                >
                  {item.name}
                </a>
              ))}

              <div className="pt-3 border-t border-slate-800">

                <a
                  href="/resume/resume.pdf"
                  download
                  onClick={closeMenu}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    bg-cyan-500
                    text-slate-950
                    font-bold
                  "
                >
                  <FaDownload />
                  Download Resume
                </a>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;