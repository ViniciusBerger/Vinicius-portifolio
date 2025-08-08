

const Header = () => {
    return (
        <header className="p-10 flex text-center justify-around items-center bg-[#1A1A1A]"> 
           <h1 className="flex items-center gap-2 text-xl text-white">
                <img src="/images/vb128.png" alt="Vinicius Berger dev Logo" />
                <code>VINICIUS BERGER</code>
            </h1>
            <nav className="mt-4">
                <ul className="flex text-lg space-x-4">
                    <li><a href="#Home" className="text-gray-300 hover:text-emerald-400"><code>Home</code></a></li>
                    <li><a href="#projects" className="text-gray-300 hover:text-emerald-400"><code>Projects</code></a></li>
                    <li><a href="#contact" className="text-gray-300 hover:text-emerald-400"><code>Contact</code></a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;