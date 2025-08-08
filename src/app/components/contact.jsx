import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = ()=> {
    const contacts = [
    {
      name: "GitHub",
      url: "https://github.com/ViniciusBerger",
      icon: <FaGithub className="text-4xl text-white" />,
      info: "github.com/ViniciusBerger",
      border: "border-t-4 border-emerald-400",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="text-4xl text-white" />,
      info: "viniciuscla2015@gmail.com",
      border: "border-t-4 border-blue-400",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/marcos-vinicius-berger-gilles/",
      icon: <FaLinkedin className="text-4xl text-white" />,
      info: "www.linkedin.com/in/marcos-vinicius-berger-gilles",
      border: "border-t-4 border-blue-600",
    },
  ];
    
    return (
        <section id="contact" className="bg-[#121212] py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-xl font-bold text-white mb-16"><code>CONTACT</code></h2>
                
                <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          
          
                {contacts.map(({ name, url, icon, info, border }, index) => (
                    <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-xl bg-[#1a1a1a] p-8 text-white hover:scale-105 transform transition duration-300 ${border}`}
                    >
                        <div className="flex flex-col items-center space-y-4">
                            <div className="bg-[#0e0e0e] p-4 rounded-lg">{icon}</div>
                            <h3 className="text-xl font-semibold">{name}</h3>
                            <p className="text-sm text-gray-400">{info}</p>
                        </div>
                    </a>
                ))}


                </div>
            </div>
        </section>
    )
}

export default Contact