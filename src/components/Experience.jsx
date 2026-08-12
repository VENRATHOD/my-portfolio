import { motion } from "framer-motion";
import {
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";

const experiences = [
  {
    company: "Financial Software and Systems (FSS)",
    role: "Software Engineer",
    type: "Full-Time",
    location: "Chennai, TamilNadu, India",
    duration: "Oct 2025 – Jul 2026",
    description:
      "Worked on enterprise payment and banking applications, contributing to backend development, REST APIs, transaction processing and production issue resolution.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Hibernate",
      "JDBC",
      "Oracle SQL",
      "REST APIs",
      "Postman",
      "Git",
      "Bitbucket",
      "Maven",
    ],
    responsibilities: [
      "Developed and maintained Java-based backend applications for payment processing systems.",
      "Worked with Spring Boot and Spring MVC to develop and maintain REST APIs.",
      "Worked on payment transaction processing and merchant integration workflows.",
      "Implemented and maintained database operations using Oracle SQL, JDBC and Hibernate.",
      "Analyzed transaction flows and investigated application issues across different modules.",
      "Debugged production issues and supported application stability and reliability.",
      "Performed API testing and validation using Postman.",
      "Participated in code reviews, testing, debugging and deployment activities.",
      "Worked with cross-functional teams to understand requirements and resolve technical issues.",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 text-white py-24"
    >
      {/* Background Effects */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">
            My Professional Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Work <span className="text-cyan-400">Experience</span>
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-5 rounded-full" />

          <p className="max-w-2xl mx-auto mt-6 text-slate-400 leading-7">
            Professional experience building and supporting enterprise
            applications with Java, Spring Boot and payment technologies.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:-translate-x-1/2" />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div
                className="
                  absolute
                  left-5
                  md:left-1/2
                  top-8
                  w-4
                  h-4
                  rounded-full
                  bg-cyan-400
                  border-4
                  border-slate-950
                  shadow-lg
                  shadow-cyan-400/40
                  -translate-x-1/2
                  z-10
                "
              />

              {/* Experience Card */}
              <div className="md:grid md:grid-cols-2 md:gap-16">
                {/* Left Side */}
                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0
                      ? "md:text-right md:pr-8"
                      : "md:order-2 md:text-left md:pl-8"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold">
                    <FaCalendarAlt />

                    {experience.duration}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mt-3 text-white">
                    {experience.role}
                  </h3>

                  <p className="text-lg font-semibold text-slate-300 mt-2">
                    {experience.company}
                  </p>

                  <div
                    className={`flex items-center gap-2 text-sm text-slate-500 mt-3 ${
                      index % 2 === 0
                        ? "md:justify-end"
                        : "md:justify-start"
                    }`}
                  >
                    <FaMapMarkerAlt />
                    {experience.location}
                  </div>
                </div>

                {/* Right Side */}
                <div
                  className={`mt-8 md:mt-0 ml-12 md:ml-0 ${
                    index % 2 === 0
                      ? "md:pl-8"
                      : "md:order-1 md:pr-8"
                  }`}
                >
                  <div
                    className="
                      rounded-3xl
                      border
                      border-slate-800
                      bg-slate-900/70
                      backdrop-blur-sm
                      p-6
                      md:p-8
                      hover:border-cyan-500/40
                      hover:shadow-2xl
                      hover:shadow-cyan-500/10
                      transition-all
                      duration-300
                    "
                  >
                    {/* Company Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="
                          w-12
                          h-12
                          rounded-xl
                          bg-cyan-500/10
                          border
                          border-cyan-500/20
                          flex
                          items-center
                          justify-center
                          text-cyan-400
                          text-xl
                        "
                      >
                        <FaBuilding />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                          {experience.type}
                        </p>

                        <p className="text-sm text-slate-400">
                          Enterprise Software
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 leading-7">
                      {experience.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mt-7">
                      <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                        Key Responsibilities
                      </h4>

                      <div className="space-y-3">
                        {experience.responsibilities.map(
                          (responsibility) => (
                            <div
                              key={responsibility}
                              className="flex items-start gap-3"
                            >
                              <FaCheckCircle className="text-cyan-400 mt-1 shrink-0" />

                              <p className="text-sm text-slate-400 leading-6">
                                {responsibility}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mt-7 pt-6 border-t border-slate-800">
                      <div className="flex items-center gap-2 mb-3">
                        <FaCode className="text-cyan-400" />

                        <h4 className="text-sm font-semibold text-white">
                          Technologies
                        </h4>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="
                              px-3
                              py-1.5
                              rounded-lg
                              bg-slate-800
                              border
                              border-slate-700
                              text-xs
                              text-slate-300
                              hover:border-cyan-500/40
                              hover:text-cyan-400
                              transition-all
                              duration-300
                            "
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mt-14
            p-6
            rounded-2xl
            border
            border-cyan-500/20
            bg-cyan-500/5
            text-center
          "
        >
          <p className="text-slate-300">
            <span className="text-cyan-400 font-semibold">
              Professional Focus:
            </span>{" "}
            Backend Development • Payment Processing • REST APIs •
            Database Development • Production Support
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;