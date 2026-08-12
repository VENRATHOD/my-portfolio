import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">

        <div className="grid md:grid-cols-3 gap-10 items-center">

          {/* Logo / About */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3"
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
                "
              >
                VR
              </div>

              <div>
                <p className="font-bold">
                  Venkatesh Rathod
                </p>

                <p className="text-xs text-slate-500">
                  Java Full Stack Developer
                </p>
              </div>
            </a>

            <p className="text-sm text-slate-500 leading-6 mt-4 max-w-sm">
              Building reliable backend systems, REST APIs and
              modern full-stack applications.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:text-center">

            <p className="text-sm font-semibold text-slate-300 mb-4">
              Quick Links
            </p>

            <div className="flex flex-wrap md:justify-center gap-x-5 gap-y-3">

              <a
                href="#about"
                className="text-sm text-slate-500 hover:text-cyan-400"
              >
                About
              </a>

              <a
                href="#skills"
                className="text-sm text-slate-500 hover:text-cyan-400"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="text-sm text-slate-500 hover:text-cyan-400"
              >
                Projects
              </a>

              <a
                href="#experience"
                className="text-sm text-slate-500 hover:text-cyan-400"
              >
                Experience
              </a>

              <a
                href="#education"
                className="text-sm text-slate-500 hover:text-cyan-400"
              >
                Education
              </a>

              <a
                href="#contact"
                className="text-sm text-slate-500 hover:text-cyan-400"
              >
                Contact
              </a>

            </div>
          </div>

          {/* Social */}
          <div className="md:flex md:justify-end">

            <div className="flex gap-3">

              <a
                href="https://github.com/VENRATHOD"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-slate-900
                  border
                  border-slate-700
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
                  w-11
                  h-11
                  rounded-xl
                  bg-slate-900
                  border
                  border-slate-700
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
                href="#home"
                aria-label="Back to top"
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-cyan-500
                  text-slate-950
                  flex
                  items-center
                  justify-center
                  hover:bg-cyan-400
                  transition-all
                "
              >
                <FaArrowUp />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div
          className="
            mt-10
            pt-6
            border-t
            border-slate-800
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-3
          "
        >

          <p className="text-xs text-slate-600">
            © {currentYear} Venkatesh Rathod. All rights reserved.
          </p>

          <p className="text-xs text-slate-600">
            Built with React, Tailwind CSS & Framer Motion
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;