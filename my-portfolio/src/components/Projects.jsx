function Projects() {
    const projects = [
        {
            title: "Brew Haven",
            description: `Brew Haven – Coffee Shop Website. Developed a responsive coffee shop website using React, HTML, CSS, and JavaScript Built reusable React components for Home, About, Products, Contact, and Payment pages. Designed a mobile-friendly UI with responsive layouts and modern styling. Used Git and GitHub for version control.`,
            tech: "HTML, CSS, JavaScript, React",
            github: "https://jakirsharief.github.io/hotel-website/",
            live: ""
        },
        {
            title: "Python Alarm Clock",
            description: "Developed a simple alarm clock application using Python and the datetime module. The application continuously checks the current system time and triggers an alarm message when the specified alarm time is reached",
            tech: "Python , datetime module",
            github: "https://github.com/Jakirsharief/Python-Alarm-Clock/blob/main/alarm.py",
            live: ""
        },
    ];

    return (
        <section className="projects" id="projects">
            <h2>My Projects</h2>
            <div className="project-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <strong>{project.tech}</strong>
                        <div className="contact-buttons">
                            <a href={project.github} target="_blank" rel="noreferrer">
                                <button>GitHub</button>
                            </a>
                            {project.live && (
                                <a href={project.live} target="_blank" rel="noreferrer">
                                    <button>Live Demo</button>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;