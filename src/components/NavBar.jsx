import useSmoothScroll from "../hooks/useSmoothScroll";
import { LogoIcon } from "./Icons";

function NavBar() {

    return ( 
        <nav className="navbar">
            <a className="link" data-scroll-to href=".section-folders" data-scroll-to-duration={3} data-scroll-to-offset={100} aria-label="Go to the projects section">
                <span>Work</span>
            </a>
            <a className="home-link" data-scroll-to href="main" data-scroll-to-duration={3} aria-label="Go to the home" >
                <LogoIcon />
            </a>
            <a className="link" data-scroll-to href=".footer" data-scroll-to-duration={3} data-scroll-to-offset={1000} aria-label="Go to the contact section">
                <span>Contact</span>
            </a>
        </nav>
     )
}

export default NavBar;