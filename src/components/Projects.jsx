import { motion } from "framer-motion";
import { Database } from "lucide-react";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaJava,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiPostgresql,
  SiDocker,
  SiJsonwebtokens,
  SiHibernate,
  SiJavascript,
  SiReact,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Online Banking Microservices",
    category: "Full Stack / Microservices",
    featured: true,

    description:
      "A banking application built using Spring Boot microservices architecture for user authentication, account management and financial transactions.",

    details:
      "The application separates authentication, account and transaction responsibilities into independent services communicating through REST APIs.",

    technologies: [
      {
        name: "Java",
        icon: <FaJava />,
      },
      {
        name: "Spring Boot",
        icon: <SiSpringboot />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
      },
      {
        name: "JWT",
        icon: <SiJsonwebtokens />,
      },
      {
        name: "Hibernate",
        icon: <SiHibernate />,
      },
      {
        name: "Docker",
        icon: <SiDocker />,
      },
    ],

    features: [
      "JWT-based authentication",
      "User registration and login",
      "Bank account management",
      "Deposit and transfer operations",
      "Microservice communication",
      "PostgreSQL persistence",
    ],

    github: "https://github.com/VENRATHOD",
    live: "#",
  },

  {
    id: 2,
    title: "Payment Gateway System",
    category: "FinTech / Backend",
    featured: false,

    description:
      "Backend payment gateway modules designed to support secure payment transaction processing and communication between merchants, gateways and banking systems.",

    details:
      "Worked on payment processing workflows involving merchant integration, authorization, 3D Secure authentication and ISO 8583 message handling.",

    technologies: [
      {
        name: "Java",
        icon: <FaJava />,
      },
      {
        name: "Spring MVC",
        icon: <SiSpringboot />,
      },
      {
        name: "Oracle",
        icon: <Database />,
      },
      {
        name: "REST API",
        icon: <FaExternalLinkAlt />,
      },
    ],

    features: [
      "Merchant integration",
      "Payment authorization",
      "3D Secure authentication",
      "ISO 8583 processing",
      "Transaction request/response handling",
      "Production issue analysis",
    ],

    github: "#",
    live: "#",
  },

  {
    id: 3,
    title: "Extraction & Reconciliation System",
    category: "Enterprise Application",
    featured: false,

    description:
      "Enterprise application modules supporting transaction extraction, reconciliation and business approval workflows.",

    details:
      "Developed backend services and REST APIs for transaction processing, data extraction, reconciliation and communication between business modules.",

    technologies: [
      {
        name: "Java",
        icon: <FaJava />,
      },
      {
        name: "Spring Boot",
        icon: <SiSpringboot />,
      },
      {
        name: "Oracle",
        icon: <Database />,
      },
      {
        name: "React",
        icon: <SiReact />,
      },
    ],

    features: [
      "Transaction extraction",
      "Reconciliation processing",
      "REST API integration",
      "Approval workflow",
      "Pagination",
      "SQL query optimization",
    ],

    github: "#",
    live: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 text-white py-24"
    >
      {/* ========================= */}
      {/* BACKGROUND EFFECTS */}
      {/* ========================= */}

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* ========================= */}
        {/* SECTION HEADER */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">
            What I've Built
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-5 rounded-full" />

          <p className="max-w-2xl mx-auto mt-6 text-slate-400 leading-7">
            Selected projects demonstrating my experience with Java,
            Spring Boot, Microservices, databases and modern web
            technologies.
          </p>
        </motion.div>

        {/* ========================= */}
        {/* PROJECT GRID */}
        {/* ========================= */}

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className={`
                group
                relative
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/70
                backdrop-blur-sm
                overflow-hidden
                hover:border-cyan-500/40
                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-cyan-500/10
                transition-all
                duration-500
                ${project.featured ? "lg:col-span-2" : ""}
              `}
            >
              {/* ========================= */}
              {/* PROJECT TOP VISUAL */}
              {/* ========================= */}

              <div
                className="
                  relative
                  h-48
                  md:h-56
                  bg-gradient-to-br
                  from-slate-800
                  to-slate-950
                  overflow-hidden
                "
              >
                {/* Decorative Grid */}

                <div
                  className="
                    absolute
                    inset-0
                    opacity-20
                    bg-[linear-gradient(rgba(34,211,238,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.15)_1px,transparent_1px)]
                    bg-[size:32px_32px]
                  "
                />

                {/* Glow */}

                <div
                  className="
                    absolute
                    w-48
                    h-48
                    rounded-full
                    bg-cyan-500/20
                    blur-3xl
                    top-10
                    left-1/2
                    -translate-x-1/2
                    group-hover:bg-cyan-400/30
                    transition-all
                    duration-500
                  "
                />

                {/* Project Icon */}

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                  "
                >
                  <div
                    className="
                      w-20
                      h-20
                      rounded-2xl
                      bg-slate-900/90
                      border
                      border-cyan-500/30
                      flex
                      items-center
                      justify-center
                      shadow-xl
                      shadow-cyan-500/10
                      group-hover:scale-110
                      group-hover:border-cyan-400
                      transition-all
                      duration-500
                    "
                  >
                    <FaJava className="text-cyan-400 text-4xl" />
                  </div>
                </div>

                {/* Featured Badge */}

                {project.featured && (
                  <div
                    className="
                      absolute
                      top-5
                      left-5
                      px-3
                      py-1.5
                      rounded-full
                      bg-cyan-500
                      text-slate-950
                      text-xs
                      font-bold
                    "
                  >
                    ⭐ Featured Project
                  </div>
                )}
              </div>

              {/* ========================= */}
              {/* PROJECT CONTENT */}
              {/* ========================= */}

              <div className="p-6 md:p-8">
                {/* Category */}

                <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">
                  {project.category}
                </p>

                {/* Title */}

                <h3 className="text-2xl md:text-3xl font-bold mt-2">
                  {project.title}
                </h3>

                {/* Description */}

                <p className="text-slate-400 leading-7 mt-4">
                  {project.description}
                </p>

                <p className="text-slate-500 text-sm leading-6 mt-3">
                  {project.details}
                </p>

                {/* ========================= */}
                {/* FEATURES */}
                {/* ========================= */}

                <div className="mt-6">
                  <p className="text-sm font-semibold text-slate-200 mb-3">
                    Key Features
                  </p>

                  <div className="grid sm:grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="
                          flex
                          items-center
                          gap-2
                          text-sm
                          text-slate-400
                        "
                      >
                        <span className="text-cyan-400">✓</span>

                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* ========================= */}
                {/* TECHNOLOGIES */}
                {/* ========================= */}

                <div className="flex flex-wrap gap-2 mt-7">
                  {project.technologies.map((technology) => (
                    <div
                      key={technology.name}
                      className="
                        flex
                        items-center
                        gap-2
                        px-3
                        py-2
                        rounded-lg
                        bg-slate-800
                        border
                        border-slate-700
                        text-slate-300
                        text-xs
                        hover:border-cyan-500/40
                        hover:text-cyan-400
                        transition-all
                        duration-300
                      "
                    >
                      <span className="text-cyan-400">
                        {technology.icon}
                      </span>

                      {technology.name}
                    </div>
                  ))}
                </div>

                {/* ========================= */}
                {/* PROJECT ACTIONS */}
                {/* ========================= */}

                <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-slate-800">
                  {project.github !== "#" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex
                        items-center
                        gap-2
                        px-5
                        py-2.5
                        rounded-lg
                        bg-cyan-500
                        text-slate-950
                        font-bold
                        text-sm
                        hover:bg-cyan-400
                        hover:scale-105
                        transition-all
                        duration-300
                      "
                    >
                      <FaGithub />
                      View GitHub
                    </a>
                  ) : (
                    <span
                      className="
                        flex
                        items-center
                        gap-2
                        px-5
                        py-2.5
                        rounded-lg
                        bg-slate-800
                        border
                        border-slate-700
                        text-slate-500
                        text-sm
                        cursor-not-allowed
                      "
                    >
                      <FaGithub />
                      Private Project
                    </span>
                  )}

                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex
                        items-center
                        gap-2
                        px-5
                        py-2.5
                        rounded-lg
                        border
                        border-slate-700
                        text-slate-300
                        text-sm
                        hover:border-cyan-400
                        hover:text-cyan-400
                        transition-all
                        duration-300
                      "
                    >
                      <FaExternalLinkAlt size={13} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ========================= */}
        {/* GITHUB CTA */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/VENRATHOD"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-3
              px-6
              py-3
              rounded-xl
              border
              border-slate-700
              bg-slate-900
              text-slate-200
              font-semibold
              hover:border-cyan-400
              hover:text-cyan-400
              transition-all
              duration-300
            "
          >
            <FaGithub />

            View More on GitHub

            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;