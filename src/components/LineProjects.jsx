import { useInView } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";

function LineProjects() {
    
    const draw = useRef(null);
    const isInView = useInView(draw, {margin: "-50% 0px 0px 0px", once: true});

    if(isInView) {
        document.querySelector('.line-projects path').classList.add('animate-path')
    }
    
    useEffect(() => {
        let path = document.querySelector('.line-projects path');
        let pathLength = path.getTotalLength();
    
        document.documentElement.style.setProperty('--LINE_PATH_LENGTH', Math.floor(pathLength));
    }, [])

    return (
        <svg ref={draw} className="line-projects" width="280" height="536" viewBox="0 0 280 536" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 1C92.6378 32.5021 221.297 23 184.648 140C148 257 202 296.5 262.5 335.5C323 374.5 206.919 403.01 148 420C92.6208 449.009 77.5171 474.581 76 535" stroke="rgba(0, 0, 0, 0.8)"/>
        </svg>
     );
}

export default LineProjects;