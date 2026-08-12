function Navbar() {
  return (
    // <nav className="bg-slate-900 text-white shadow-lg">
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-cyan-400">
          VR
        </h1>

        {/* Navigation */}
        <ul className="flex gap-8 font-medium">
          <li>
            <a href="#home" className="hover:text-cyan-400 transition duration-300">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-400 transition duration-300">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400 transition duration-300">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400 transition duration-300">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400 transition duration-300">
              Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;