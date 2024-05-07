import { LogoIcon } from "./Icons";

function NavBar() {
    return ( 
        <nav className="navbar">
            <span>Work</span>
            <a href="#">
                <LogoIcon />
            </a>
            <span>Contact</span>
        </nav>
     )
}

export default NavBar;