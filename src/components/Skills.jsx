import { motion } from "framer-motion";
import { Database } from "lucide-react";

import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiHibernate,
  SiPostgresql,
  SiMysql,
  SiPostman,
  SiApachemaven,
  SiApachetomcat,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Backend & Java",
    description: "Enterprise backend development",
    skills: [
      {
        name: "Java",
        level: "Advanced",
        icon: <FaJava />,
      },
      {
        name: "Spring Boot",
        level: "Advanced",
        icon: <SiSpringboot />,
      },
      {
        name: "Spring MVC",
        level: "Advanced",
        icon: <SiSpringboot />,
      },
      {
        name: "Spring Data JPA",
        level: "Intermediate",
        icon: <SiSpringboot />,
      },
      {
        name: "Hibernate",
        level: "Intermediate",
        icon: <SiHibernate />,
      },
      {
        name: "Microservices",
        level: "Intermediate",
        icon: <FaServerIcon />,
      },
    ],
  },

  {
    title: "Database",
    description: "Data persistence & SQL",
    skills: [
      {
        name: "Oracle SQL",
        level: "Advanced",
        icon: <Database />,
      },
      {
        name: "PostgreSQL",
        level: "Intermediate",
        icon: <SiPostgresql />,
      },
      {
        name: "MySQL",
        level: "Intermediate",
        icon: <SiMysql />,
      },
      {
        name: "JDBC",
        level: "Advanced",
        icon: <Database />,
      },
    ],
  },

  {
    title: "Frontend",
    description: "Modern web development",
    skills: [
      {
        name: "HTML5",
        level: "Advanced",
        icon: <FaHtml5 />,
      },
      {
        name: "CSS3",
        level: "Intermediate",
        icon: <FaCss3Alt />,
      },
      {
        name: "JavaScript",
        level: "Intermediate",
        icon: <FaJs />,
      },
      {
        name: "React",
        level: "Basic",
        icon: <FaReact />,
      },
    ],
  },

  {
    title: "Tools & APIs",
    description: "Development & integration",
    skills: [
      {
        name: "REST APIs",
        level: "Advanced",
        icon: <FaApiIcon />,
      },
      {
        name: "Postman",
        level: "Advanced",
        icon: <SiPostman />,
      },
      {
        name: "Maven",
        level: "Advanced",
        icon: <SiApachemaven />,
      },
      {
        name: "Git",
        level: "Advanced",
        icon: <FaGitAlt />,
      },
      {
        name: "GitHub",
        level: "Advanced",
        icon: <FaGithub />,
      },
      {
        name: "Tomcat",
        level: "Intermediate",
        icon: <SiApachetomcat />,
      },
    ],
  },

  {
    title: "DevOps & Practices",
    description: "Modern engineering practices",
    skills: [
      {
        name: "Docker",
        level: "Basic",
        icon: <FaDocker />,
      },
      {
        name: "Agile / SDLC",
        level: "Advanced",
        icon: <FaCodeIcon />,
      },
      {
        name: "Jira",
        level: "Intermediate",
        icon: <FaJiraIcon />,
      },
      {
        name: "Code Reviews",
        level: "Advanced",
        icon: <FaCodeIcon />,
      },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 text-white py-24"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">
            What I Work With
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-5 rounded-full" />

          <p className="max-w-2xl mx-auto mt-6 text-slate-400 leading-7">
            Technologies and tools I use to design, develop, test and
            maintain enterprise applications.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.1,
              }}
              className="
                group
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/70
                backdrop-blur-sm
                p-6
                hover:border-cyan-500/40
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-cyan-500/10
                transition-all
                duration-300
              "
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  {category.description}
                </p>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      flex
                      items-center
                      justify-between
                      p-3
                      rounded-xl
                      bg-slate-800/60
                      border
                      border-slate-700/70
                      hover:border-cyan-500/40
                      hover:bg-slate-800
                      transition-all
                      duration-300
                    "
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="
                          w-10
                          h-10
                          rounded-lg
                          bg-slate-900
                          border
                          border-slate-700
                          flex
                          items-center
                          justify-center
                          text-cyan-400
                          text-lg
                        "
                      >
                        {skill.icon}
                      </div>

                      <span className="font-medium text-slate-200">
                        {skill.name}
                      </span>
                    </div>

                    <span
                      className="
                        text-xs
                        px-2.5
                        py-1
                        rounded-full
                        bg-cyan-500/10
                        text-cyan-400
                        border
                        border-cyan-500/20
                      "
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Skill Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mt-12
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
              Core Focus:
            </span>{" "}
            Java • Spring Boot • REST APIs • Microservices • SQL • React
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ========================================================= */
/* Simple fallback icons                                     */
/* ========================================================= */

function FaServerIcon() {
  return <span>⚙️</span>;
}

function FaApiIcon() {
  return <span>🔌</span>;
}

function FaCodeIcon() {
  return <span>💻</span>;
}

function FaJiraIcon() {
  return <span>📋</span>;
}

export default Skills;