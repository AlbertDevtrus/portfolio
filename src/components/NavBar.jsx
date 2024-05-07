import { LogoIcon } from "./Icons";

function NavBar() {
    return ( 
        <nav className="navbar">
            <a href="#">
                <span>Work</span>
            </a>
            <a href="#">
                <LogoIcon />
            </a>
            <a href="#">
                <span>Contact</span>
            </a>
        </nav>
     )
}

export default NavBar;