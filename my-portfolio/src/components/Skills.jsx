function TechnicalStack() {
    const stackData = [
        {
            category: "Programming Languages",
            color: "#378ADD",
            skills: [
                { name: "JavaScript", level: 80 },
                { name: "Python", level: 70 },
                { name: "HTML", level: 95 },
                { name: "CSS", level: 90 },
            ],
        },
        {
            category: "Libraries and Frameworks",
            color: "#1D9E75",
            skills: [
                { name: "React", level: 75 },
            ],
        },
        {
            category: "Tools",
            color: "#D85A30",
            skills: [
                { name: "Git", level: 90 }
            ],
        },
    ];

    return (
        <section className="tech-stack" id="skills">
            <h2>Skills</h2>
            {stackData.map((group, gIndex) => (
                <div className="stack-group" key={gIndex}>
                    <h3 className="stack-category">{group.category}</h3>
                    <div className="stack-bars">
                        {group.skills.map((skill, sIndex) => (
                            <div className="stack-item" key={sIndex}>
                                <div className="stack-label">
                                    <span>{skill.name}</span>
                                    <span className="stack-percent">{skill.level}%</span>
                                </div>
                                <div className="stack-bar-bg">
                                    <div
                                        className="stack-bar-fill"
                                        style={{ width: `${skill.level}%`, background: group.color }}
                                    ></div>
                                </div>
                            </div>
                            
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default TechnicalStack;