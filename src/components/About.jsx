import { motion } from "framer-motion";
import {
  FaUserTie,
  FaCode,
  FaServer,
  FaDatabase,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaCode />,
    title: "Backend Development",
    description: "Java, Spring Boot, Spring MVC and REST API development.",
  },
  {
    icon: <FaServer />,
    title: "Microservices",
    description:
      "Building modular services with clean API communication and separation of responsibilities.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Development",
    description:
      "Working with Oracle, PostgreSQL, MySQL, SQL, JDBC and Hibernate.",
  },
  {
    icon: <FaRocket />,
    title: "Payment Technology",
    description:
      "Experience working with payment processing, transaction workflows and enterprise systems.",
  },
];

const strengths = [
  "Strong foundation in Java and object-oriented programming",
  "Experience developing Spring Boot and REST API applications",
  "Understanding of microservices architecture",
  "Experience with SQL and relational databases",
  "Payment gateway and transaction processing experience",
  "Production debugging and issue analysis",
  "API testing using Postman",
  "Git, Maven and Agile development practices",
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 text-white py-24"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

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
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-5 rounded-full" />
        </motion.div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="
                relative
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/70
                backdrop-blur-sm
                p-8
                md:p-10
                overflow-hidden
              "
            >
              {/* Decorative Icon */}
              <div
                className="
                  absolute
                  -top-10
                  -right-10
                  w-40
                  h-40
                  rounded-full
                  bg-cyan-500/10
                  blur-2xl
                "
              />

              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-cyan-500/10
                  border
                  border-cyan-500/20
                  flex
                  items-center
                  justify-center
                  text-cyan-400
                  text-2xl
                  mb-6
                "
              >
                <FaUserTie />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold">
                Java Full Stack Developer
              </h3>

              <p className="text-slate-400 leading-8 mt-6">
                I am a Java Full Stack Developer with professional experience
                building and supporting enterprise applications using Java,
                Spring Boot, Spring MVC, Hibernate, JDBC, Oracle and REST APIs.
              </p>

              <p className="text-slate-400 leading-8 mt-4">
                My professional experience includes working on payment gateway
                systems, transaction processing, merchant integrations and
                enterprise backend applications.
              </p>

              <p className="text-slate-400 leading-8 mt-4">
                I enjoy solving backend problems, understanding business
                requirements and building reliable applications that can handle
                real-world transaction workflows.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-800">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-black text-cyan-400">
                    9+
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    Months Experience
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-black text-cyan-400">
                    3+
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    Major Projects
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-black text-cyan-400">
                    10+
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    Technologies
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
              What I Bring
            </p>

            <h3 className="text-3xl md:text-4xl font-black mt-3">
              Building reliable software with{" "}
              <span className="text-cyan-400">real-world experience.</span>
            </h3>

            <p className="text-slate-400 leading-7 mt-5">
              I focus on backend development while continuously expanding my
              full-stack and cloud-native skills.
            </p>

            {/* Strengths */}
            <div className="mt-8 space-y-4">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="text-cyan-400 mt-1 shrink-0" />

                  <p className="text-slate-300 text-sm leading-6">
                    {strength}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
                group
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/60
                p-6
                hover:border-cyan-500/40
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-cyan-500/10
                transition-all
                duration-300
              "
            >
              <div
                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-slate-800
                  border
                  border-slate-700
                  flex
                  items-center
                  justify-center
                  text-cyan-400
                  text-xl
                  group-hover:bg-cyan-500/10
                  group-hover:border-cyan-500/30
                  transition-all
                "
              >
                {item.icon}
              </div>

              <h4 className="text-lg font-bold mt-5">{item.title}</h4>

              <p className="text-sm text-slate-500 leading-6 mt-2">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;