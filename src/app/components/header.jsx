const Header = () => {
  return (
    <header
      className="
        bg-[#1A1A1A]
        p-4 flex flex-col items-center text-center gap-4
        lg:p-10 lg:flex-row lg:justify-around lg:items-center lg:gap-0
      "
    >
      <h1 className="flex items-center gap-2 text-white text-lg lg:text-xl">
        <img
          src="/images/vb128.png"
          alt="Vinicius Berger dev Logo"
          className="h-8 w-8 lg:h-auto lg:w-auto"
        />
        <code>VINICIUS BERGER</code>
      </h1>

      <nav className="mt-0 lg:mt-4">
        <ul
          className="
            flex flex-wrap justify-center gap-4 text-base
            lg:text-lg lg:space-x-4 lg:gap-0
          "
        >
          <li>
            <a href="#Home" className="text-gray-300 hover:text-emerald-400">
              <code>Home</code>
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-300 hover:text-emerald-400">
              <code>Projects</code>
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-300 hover:text-emerald-400">
              <code>Contact</code>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
