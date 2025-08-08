import projectsData from './projects.json'; // Assuming you have a JSON file with project data

const Projects = () => {
    return (
        <section id="projects" className="bg-[#0F0F0F] shadow-md text-white py-20">
            
            <div className="container mx-auto px-4">
                <h2 className="text-xl font-bold mb-16 text-center"><code>PROJECTS</code></h2>
                
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Map through projects data and display each project */}
                        {projectsData.projects.map((project, index) => (
                            <div
                                key={index}
                                className={`min-w-full bg-[#1A1A1A] p-6 rounded-lg hover:scale-105 transform transition duration-300 w-full ${project.border} ${project.shadow}`}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover rounded mb-4"
                                />
                                
                                <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
                                <p className="text-gray-400 mb-4 text-justify">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-emerald-400 hover:underline block text-center">
                                        View Project
                            </a>
                        </div>
                       ))}
                    </div>

                    {/* Repeat for more projects */}
                </div>
        </section>
    )
}


export default Projects;