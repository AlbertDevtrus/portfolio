import { useRef } from "react";
import { Folder } from "./Folder";
import LineProjects from "./LineProjects";
import { useEffect } from "react";
import { useState } from "react";

function Projects() {
    const folders = useRef(null)
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const scrollListener = window.addEventListener('scrollEvent', () => {
            setIsInView(true);
        });

        return window.removeEventListener('scrollEvent', scrollListener);
    })


    return ( 
        <section
            className="section-projects"
            >
            <LineProjects />
            <div 
                className="section-folders"
            >
                <div className="container-folders" data-scroll data-scroll-call="scrollEvent" ref={folders}>
                    <Folder name={'pomodoro'} isInView={isInView} />
                    <Folder name={'spaceXClone'} isInView={isInView} />
                    <Folder name={'zhumell'} isInView={isInView} />
                    <Folder name={'cs50'} isInView={isInView} />
                    <div className="cover-folders">
                        <h1>Projects</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;