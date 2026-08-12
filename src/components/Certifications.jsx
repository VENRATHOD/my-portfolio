import { motion } from "framer-motion";
import {
  FaCertificate,
  FaExternalLinkAlt,
} from "react-icons/fa";

const certifications = [
  {
    title: "Full Stack Web Development",
    organization: "ExcelR Solutions",
    location: "Bengaluru",
    description:
      "Training focused on Java, Spring Boot, databases, REST APIs and modern web development.",
    skills: [
      "Java",
      "Spring Boot",
      "MySQL",
      "REST API",
      "React",
    ],
  },

  {
    title: "Web Design and Development",
    organization: "ParvaM ConsulTech Pvt. Ltd.",
    location: "Bengaluru",
    description:
      "Training covering frontend web development and responsive web design fundamentals.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
    ],
  },

  {
    title: "AI / ML Engineer",
    organization: "ROOMAN Technologies",
    location: "Bengaluru",
    description:
      "Training program covering foundational concepts in Artificial Intelligence and Machine Learning.",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Python",
    ],
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-slate-950 text-white py-24"
    >
      {/* Background */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">
            Continuous Learning
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Certifications &{" "}
            <span className="text-cyan-400">
              Training
            </span>
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-5 rounded-full" />

          <p className="max-w-2xl mx-auto mt-6 text-slate-400 leading-7">
            Professional training and certifications that helped
            strengthen my software development skills.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {certifications.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="
                group
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/70
                backdrop-blur-sm
                p-6
                hover:border-cyan-500/40
                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-cyan-500/10
                transition-all
                duration-500
              "
            >

              {/* Icon */}

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-cyan-500/10
                  border
                  border-cyan-500/20
                  flex
                  items-center
                  justify-center
                  text-cyan-400
                  text-xl
                  group-hover:bg-cyan-500
                  group-hover:text-slate-950
                  transition-all
                  duration-300
                "
              >
                <FaCertificate />
              </div>

              {/* Organization */}

              <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wider mt-6">
                {certificate.organization}
              </p>

              {/* Title */}

              <h3 className="text-xl font-bold mt-2">
                {certificate.title}
              </h3>

              {/* Location */}

              <p className="text-slate-500 text-sm mt-2">
                {certificate.location}
              </p>

              {/* Description */}

              <p className="text-slate-400 text-sm leading-6 mt-5">
                {certificate.description}
              </p>

              {/* Skills */}

              <div className="flex flex-wrap gap-2 mt-6">

                {certificate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-2.5
                      py-1
                      rounded-full
                      bg-slate-800
                      border
                      border-slate-700
                      text-slate-400
                      text-xs
                      group-hover:border-cyan-500/20
                      transition-all
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>

              {/* Certificate Button */}

              <div className="mt-6 pt-5 border-t border-slate-800">

                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    text-slate-500
                  "
                >
                  <FaExternalLinkAlt size={11} />
                  Certificate details available on request
                </span>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;