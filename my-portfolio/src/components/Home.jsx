function Home(){
    return(
        <section className="home" id="home">
            <div className="home-content">
                
                <h1>Hi, I'm Jakir Sharief</h1>
                <h2>Fronted Developer</h2>
                <p>I am a frontend developer dedicated to crafting responsive, 
                    user-friendly web applications with HTML, CSS, JavaScript,
                     and React. I combine engineering principles with a passion
                      for clean code and intuitive design to deliver digital products
                       that solve real-world problems. Committed to continuous growth,
                        I regularly explore emerging technologies and industry best practices
                         to build fast, accessible, and engaging web experiences.
                </p>
                <div className="contact-buttons">
                       <a href="/js.pdf" download target="_blank" rel="noreferrer">
                        <button>Download Resume</button>
                    </a>
                    <a href="#contact">
                    <button >Contact Me</button>
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Home;