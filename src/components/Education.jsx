import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBookOpen,
  FaTrophy,
} from "react-icons/fa";

const education = [
  {
    degree: "Bachelor's Degree",
    title: "Bachelor of Engineering (BE)",
    field: "Computer Science & Engineering (SCE)",
    institution: "Government Engineering College / VTU-Belgav",
    duration: "2021 – 2025",
    location: "Raichur, Karnataka, India",
    description:
      "Completed undergraduate studies with a focus on computer science, software development, programming fundamentals and database technologies.",
    highlights: [
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Web Technologies",
      "Software Engineering",
    ],
  },
];

const academicFocus = [
  {
    icon: <FaCodeIcon />,
    title: "Programming",
    description:
      "Strong foundation in Java, object-oriented programming and problem solving.",
  },
  {
    icon: <FaBookOpen />,
    title: "Computer Science",
    description:
      "Understanding of databases, data structures, software engineering and web technologies.",
  },
  {
    icon: <FaTrophy />,
    title: "Continuous Learning",
    description:
      "Continuously improving backend, full-stack and cloud development skills.",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-slate-950 text-white py-24"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">
            Academic Background
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Education <span className="text-cyan-400">& Learning</span>
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-5 rounded-full" />

          <p className="max-w-2xl mx-auto mt-6 text-slate-400 leading-7">
            My academic foundation and continuous learning journey in
            computer science and software development.
          </p>
        </motion.div>

        {/* Main Education Card */}
        <div className="max-w-5xl mx-auto">

          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="
                relative
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/70
                backdrop-blur-sm
                overflow-hidden
                hover:border-cyan-500/40
                hover:shadow-2xl
                hover:shadow-cyan-500/10
                transition-all
                duration-300
              "
            >

              {/* Top Accent */}
              <div className="h-1 bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500" />

              <div className="p-8 md:p-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

                  <div className="flex items-start gap-5">

                    {/* Graduation Icon */}
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
                        shrink-0
                      "
                    >
                      <FaGraduationCap />
                    </div>

                    <div>

                      <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">
                        {item.degree}
                      </p>

                      <h3 className="text-2xl md:text-3xl font-bold mt-2">
                        {item.title}
                      </h3>

                      <p className="text-slate-300 mt-1">
                        {item.field}
                      </p>

                    </div>

                  </div>

                  {/* Duration */}
                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      rounded-xl
                      bg-slate-800
                      border
                      border-slate-700
                      text-sm
                      text-slate-300
                      w-fit
                    "
                  >
                    <FaCalendarAlt className="text-cyan-400" />

                    {item.duration}
                  </div>

                </div>

                {/* Institution */}
                <div className="flex flex-wrap items-center gap-5 mt-8">

                  <div className="flex items-center gap-2 text-slate-300">
                    <FaUniversity className="text-cyan-400" />

                    <span>{item.institution}</span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-500">
                    <FaMapMarkerAlt className="text-cyan-400" />

                    <span>{item.location}</span>
                  </div>

                </div>

                {/* Description */}
                <p className="text-slate-400 leading-7 mt-7 max-w-4xl">
                  {item.description}
                </p>

                {/* Academic Highlights */}
                <div className="mt-8 pt-7 border-t border-slate-800">

                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                    Academic Focus
                  </h4>

                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">

                    {item.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="
                          flex
                          items-center
                          gap-3
                          p-3
                          rounded-xl
                          bg-slate-800/70
                          border
                          border-slate-700/70
                          text-sm
                          text-slate-300
                          hover:border-cyan-500/30
                          hover:text-cyan-400
                          transition-all
                          duration-300
                        "
                      >
                        <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />

                        {highlight}
                      </div>
                    ))}

                  </div>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Academic Focus Cards */}
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto mt-10">

          {academicFocus.map((item, index) => (
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

              <h4 className="text-lg font-bold mt-5">
                {item.title}
              </h4>

              <p className="text-sm text-slate-500 leading-6 mt-2">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            max-w-5xl
            mx-auto
            mt-10
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
              Learning Philosophy:
            </span>{" "}
            Build strong fundamentals, work on real-world projects and
            continuously improve engineering skills.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

/* Simple fallback icon */
function FaCodeIcon() {
  return <span>💻</span>;
}

export default Education;