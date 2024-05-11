import useSmoothScroll from "../hooks/useSmoothScroll";
import { LogoIcon } from "./Icons";

function NavBar() {

    return ( 
        <nav className="navbar">
            <a className="link" data-scroll-to href=".section-folders" data-scroll-to-duration={3} data-scroll-to-offset={100} >
                <span>Work</span>
            </a>
            <a id="home-link" data-scroll-to href="main" data-scroll-to-duration={3} >
                <LogoIcon />
            </a>
            <a className="link" data-scroll-to href=".footer" data-scroll-to-duration={3} data-scroll-to-offset={1000}>
                <span>Contact</span>
            </a>
        </nav>
     )
}

export default NavBar;