import { useState } from "react";
function Navbar(){
    const [menuOpen,setMenuOpen] = useState(false);

    return(
        <nav className="navbar">
            <h2 className="logo">JS</h2>
            <div className="menu-icon"
            onClick={()=>setMenuOpen(!menuOpen)}>
            ☰
            </div>
            <ul className={menuOpen ? "nav-links active":"nav-links"}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Project</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}
export default Navbar;