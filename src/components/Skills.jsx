import skills from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skillCategory) => (

            <div
              key={skillCategory.category}
              className="bg-slate-800 rounded-xl p-6 shadow-lg hover:scale-105 transition"
            >

              <h3 className="text-2xl font-semibold mb-5 text-cyan-300">
                {skillCategory.category}
              </h3>

              <div className="flex flex-wrap gap-3">

                {skillCategory.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="bg-cyan-500/20 text-cyan-300 px-3 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;