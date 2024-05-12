import { useAnimate } from "framer-motion";
import { LogoIcon } from "./Icons";
import { useEffect } from "react";

function NavBarRes({ inView = true, inView2 }) {

    const [scope, animate] = useAnimate();

    useEffect(() => {
        if(inView || inView2) {
            animate('.work', { scaleX: 0 })
            animate('.contact', { scaleX: 0 })
            animate('#home-link', { scaleY: 0 }, { delay: 0.3 }).then(() => {scope.current.style.display = 'flex'});
        } else {
            animate('.work', { scaleX: 1 }, { delay: 0.3 })
            animate('.contact', { scaleX: 1 }, { delay: 0.3 })
            animate('#home-link', { scaleY: 1 })
        }


    }, [inView, inView2])

    return ( 
        <nav className="navbar-responsive" ref={scope}>
            <a className="link work" data-scroll-to href=".section-folders" data-scroll-to-duration={3} data-scroll-to-offset={100} >
                Work
            </a>
            <a id="home-link" data-scroll-to href="main" data-scroll-to-duration={3} >
                <LogoIcon size={30} />
            </a>
            <a className="link contact" data-scroll-to href=".footer" data-scroll-to-duration={3} data-scroll-to-offset={1000}>
                Contact
            </a>
        </nav>
    );
}

export default NavBarRes;