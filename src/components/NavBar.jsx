import useSmoothScroll from "../hooks/useSmoothScroll";
import { LogoIcon } from "./Icons";

function NavBar() {

    return ( 
        <nav className="navbar">
            <a data-scroll-to href="#" data-scroll-to-duration={3} >
                <span>Work</span>
            </a>
            <a data-scroll-to href="/" data-scroll-to-duration={3} >
                <LogoIcon />
            </a>
            <a data-scroll-to href="#contact" data-scroll-to-duration={3}>
                <span>Contact</span>
            </a>
        </nav>
     )
}

export default NavBar;