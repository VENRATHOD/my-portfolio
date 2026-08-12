import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import portfolio from "../data/portfolio";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-100 flex items-center"
    >
      {/* <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center"> */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <p className="text-cyan-600 font-semibold text-lg">
            👋 Hello, I'm
          </p>

          {/* <h1 className="text-5xl font-bold mt-3 text-slate-800">
            Venkatesh Rathod
          </h1>

          <h2 className="text-2xl font-semibold text-slate-600 mt-4">
            Java Full Stack Developer
          </h2>

          <p className="mt-6 text-slate-600 leading-7">
            Passionate about developing scalable backend applications
            using Java, Spring Boot, Microservices, Hibernate,
            PostgreSQL, and modern frontend technologies.
          </p> */}
          <h1 className="text-5xl font-bold mt-3 text-slate-800">
  {portfolio.name}
</h1>

<h2 className="text-2xl font-semibold text-slate-600 mt-4">
  {portfolio.role}
</h2>

<p className="mt-6 text-slate-600 leading-7">
  {portfolio.tagline}
</p>

          {/* <div className="mt-8 flex gap-4">
            <a
  href="#projects"
  className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg"
>
  View Projects
</a>

            <button className="border border-cyan-500 text-cyan-600 px-6 py-3 rounded-lg hover:bg-cyan-50">
              Download Resume
            </button>
          </div> */}
{/* 
            <div className="mt-8 flex gap-4">
  <button className="bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-lg font-semibold shadow-lg">
    View Projects
  </button>

  <button className="border border-cyan-400 hover:bg-cyan-500 hover:text-white transition px-6 py-3 rounded-lg font-semibold">
    Download Resume
  </button>
</div> */}
<Button href="#projects">
    View Projects
</Button>
<Button variant="outline">
    Download Resume
</Button>


        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-full bg-cyan-200 flex items-center justify-center text-8xl">
            👨‍💻
          </div>
        </div>

        <div className="mt-8 flex gap-6 text-3xl">
  <a
    href="https://github.com/YOUR_GITHUB_USERNAME"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-700 hover:text-cyan-500 transition"
  >
    <FaGithub />
  </a>

  <a
    href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-700 hover:text-cyan-500 transition"
  >
    <FaLinkedin />
  </a>

  <a
    href="mailto:your@email.com"
    className="text-slate-700 hover:text-cyan-500 transition"
  >
    <FaEnvelope />
  </a>
</div>

      </div>
    </section>
  );
}

export default Hero;