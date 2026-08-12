import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import resumeFile from "../assets/resume/Venkatesh_Rathod_Resume.pdf";
import profileImage from "../assets/images/profile.jpg";
import portfolio from "../data/portfolio";

function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        bg-slate-950
        text-white
        flex
        items-center
        pt-24
        overflow-hidden
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          lg:px-8
          grid
          lg:grid-cols-2
          gap-16
          items-center
          w-full
        "
      >

        {/* ========================= */}
        {/* LEFT SIDE */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <p className="text-cyan-400 font-semibold text-lg">
            👋 Hello, I'm
          </p>

          {/* Name */}
          <h1
            className="
              text-5xl
              lg:text-7xl
              font-black
              mt-4
              leading-tight
            "
          >
            {portfolio.name}
          </h1>

          {/* Role */}
          <h2 className="text-2xl text-gray-300 mt-6">
            {portfolio.role}
          </h2>

          {/* Animated Roles */}
          <div
            className="
              mt-6
              text-cyan-400
              text-xl
              font-semibold
              min-h-[40px]
            "
          >
            <TypeAnimation
              sequence={[
                "Spring Boot Developer",
                2000,
                "Microservices Developer",
                2000,
                "Backend Engineer",
                2000,
                "FinTech Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Introduction */}
          <p className="mt-8 text-gray-400 leading-8 max-w-xl">
            {portfolio.tagline}
          </p>

          {/* ========================= */}
          {/* STATS */}
          {/* ========================= */}

          <div className="flex flex-wrap gap-10 mt-10">

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                {portfolio.stats.experience}
              </h3>

              <p className="text-gray-400">
                Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                {portfolio.stats.technologies}
              </h3>

              <p className="text-gray-400">
                Technologies
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                {portfolio.stats.projects}
              </h3>

              <p className="text-gray-400">
                Projects
              </p>
            </div>

          </div>

          {/* ========================= */}
          {/* BUTTONS */}
          {/* ========================= */}

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#projects"
              className="
                bg-cyan-500
                hover:bg-cyan-400
                text-slate-950
                px-6
                py-3
                rounded-lg
                font-semibold
                transition-all
                duration-300
                hover:scale-105
              "
            >
              View Projects
            </a>

           <a
  href={resumeFile}
  download="Venkatesh_Rathod_Resume.pdf"
  className="
    border
    border-cyan-400
    px-6
    py-3
    rounded-lg
    text-cyan-400
    hover:bg-cyan-500
    hover:text-slate-950
    transition-all
    duration-300
    hover:scale-105
  "
>
  Download Resume
</a>

          </div>

          {/* ========================= */}
          {/* SOCIAL ICONS */}
          {/* ========================= */}

          <div className="flex gap-5 mt-10">

            <a
              href={portfolio.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="
                text-2xl
                text-gray-400
                hover:text-cyan-400
                hover:scale-110
                transition-all
              "
            >
              <FaGithub />
            </a>

            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="
                text-2xl
                text-gray-400
                hover:text-cyan-400
                hover:scale-110
                transition-all
              "
            >
              <FaLinkedin />
            </a>

            <a
              href={`mailto:${portfolio.email}`}
              aria-label="Email"
              className="
                text-2xl
                text-gray-400
                hover:text-cyan-400
                hover:scale-110
                transition-all
              "
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
          className="flex justify-center"
        >

          <div className="relative">

            {/* Outer Glow */}
            <div
              className="
                absolute
                -inset-6
                rounded-full
                bg-cyan-500
                blur-3xl
                opacity-20
              "
            />

            {/* Secondary Glow */}
            <div
              className="
                absolute
                -inset-2
                rounded-full
                bg-blue-500
                blur-2xl
                opacity-20
              "
            />

            {/* Image Border */}
            <div
              className="
                relative
                w-72
                h-72
                md:w-80
                md:h-80
                lg:w-96
                lg:h-96
                rounded-full
                p-1
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-cyan-400
                shadow-2xl
                shadow-cyan-500/20
              "
            >

              {/* Image */}
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

            {/* Available Badge */}
            <div
              className="
                absolute
                bottom-4
                left-1/2
                -translate-x-1/2
                px-4
                py-2
                rounded-full
                bg-slate-900
                border
                border-cyan-500/40
                shadow-xl
                whitespace-nowrap
              "
            >
              <span className="flex items-center gap-2 text-sm text-slate-300">

                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />

                Open to Opportunities

              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;