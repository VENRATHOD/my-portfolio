function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-800 rounded-xl p-6">
            <h3 className="font-bold">
              Full Stack Web Development
            </h3>

            <p className="text-gray-400 mt-2">
              ExcelR Solutions
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6">
            <h3 className="font-bold">
              Web Design & Development
            </h3>

            <p className="text-gray-400 mt-2">
              ParvaM ConsulTech
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6">
            <h3 className="font-bold">
              AI / ML Engineer
            </h3>

            <p className="text-gray-400 mt-2">
              ROOMAN Technologies
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Certifications;