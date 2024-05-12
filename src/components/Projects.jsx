import { useRef } from "react";
import { Folder } from "./Folder";
import LineProjects from "./LineProjects";
import { useInView } from "framer-motion";

function Projects() {
    const folders = useRef(null)

    const isInView = useInView(folders, {margin: "-60% 0px 0px 0px", once: true});

    return ( 
        <section
            className="section-projects"
            >
            <LineProjects />
            <div 
                className="section-folders"
            >
                <div className="container-folders" ref={folders}>
                    <Folder name={'pomodoro'} isInView={isInView} />
                    <Folder name={'spaceXClone'} isInView={isInView} />
                    <Folder name={'zhumell'} isInView={isInView} />
                    <div className="cover-folders">
                        <h1>Projects</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;