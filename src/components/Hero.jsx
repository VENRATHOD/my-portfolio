import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
} from "react-icons/fa";

import resumeFile from "../assets/resume/Venkatesh_Rathod_Resume.pdf";
import profileImage from "../assets/images/profile.jpg";
import portfolio from "../data/portfolio";

function Hero() {
  return (
    <section
  id="home"
  className="
    relative
    min-h-screen
    bg-slate-950
    text-white
    flex
    justify-center
    overflow-hidden
    pt-28
  "
>
      {/* Background Blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          w-full
          px-6
          lg:px-8
          grid
          grid-cols-1
          md:grid-cols-2
          gap-16
          items-center
        "
      >
        {/* LEFT SIDE */}

        <motion.div
        className="mt-10 lg:mt-0"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 font-semibold text-lg">
            👋 Hello, I'm
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            {portfolio.name}
          </h1>

          <h2 className="mt-5 text-2xl text-slate-300 font-semibold">
            {portfolio.role}
          </h2>

          <div className="mt-6 h-10 flex items-center">
            <TypeAnimation
              sequence={[
                "Java React Developer",
                2000,
                 "Spring Boot Developer",
                2000,
                "Microservices Developer",
                2000,
                "FinTech Software Engineer",
                2000,
                 "Java Software Engineer",
                2000,
                "REST API Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-cyan-400 text-xl md:text-2xl font-bold"
            />
          </div>

          <p className="mt-8 text-slate-400 leading-8 max-w-xl">
            {portfolio.tagline}
          </p>

          {/* Stats */}

          <div className="mt-10 grid grid-cols-3 gap-6">

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                {portfolio.stats.experience}
              </h3>

              <p className="text-slate-400 text-sm mt-2">
                Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                {portfolio.stats.technologies}
              </h3>

              <p className="text-slate-400 text-sm mt-2">
                Technologies
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                {portfolio.stats.projects}
              </h3>

              <p className="text-slate-400 text-sm mt-2">
                Projects
              </p>
            </div>

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#projects"
              className="
                px-7
                py-3.5
                rounded-xl
                bg-cyan-500
                text-slate-950
                font-bold
                hover:bg-cyan-400
                transition
                duration-300
              "
            >
              View Projects
            </a>

            <a
              href={resumeFile}
              download="Venkatesh_Rathod_Resume.pdf"
              className="
                px-7
                py-3.5
                rounded-xl
                border
                border-cyan-400
                text-cyan-400
                font-bold
                hover:bg-cyan-500
                hover:text-slate-950
                transition
                duration-300
              "
            >
              Download Resume
            </a>

          </div>

          {/* Social Icons */}

          <div className="flex gap-5 mt-10">

            <a
              href={portfolio.github}
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-slate-400 hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-slate-400 hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href={`mailto:${portfolio.email}`}
              className="text-2xl text-slate-400 hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>
          </motion.div>
                  {/* ========================= */}
        {/* RIGHT SIDE - PROFILE IMAGE */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">

            {/* Glow */}

            <div className="absolute -inset-8 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />

            <div className="absolute -inset-2 rounded-full bg-blue-500/20 blur-2xl" />

            {/* Profile Border */}

            <div
              className="
                relative
                w-72
                h-72
                sm:w-80
                sm:h-80
                lg:w-[450px]
                lg:h-[450px]
                rounded-full
                p-1
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-cyan-400
                shadow-2xl
                shadow-cyan-500/30
              "
            >
              <img
                src={profileImage}
                alt="Venkatesh Rathod"
                className="
                  w-full
                  h-full
                  rounded-full
                  object-cover
                  object-center
                  border-4
                  border-slate-950
                "
              />
            </div>

            {/* Badge */}

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="
                absolute
                bottom-6
                left-1/2
                -translate-x-1/2
                px-5
                py-2.5
                rounded-full
                bg-slate-900/90
                backdrop-blur
                border
                border-cyan-500/30
                shadow-xl
              "
            >
              <span className="flex items-center gap-2 text-sm">

                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />

                Open to Work

              </span>
            </motion.div>

          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
          hidden
          md:flex
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          flex-col
          items-center
          text-slate-400
          hover:text-cyan-400
          transition
        "
      >
        <span className="text-sm mb-2">
          Scroll Down
        </span>

        <FaArrowDown />
      </motion.a>
    </section>
  );
}

export default Hero;