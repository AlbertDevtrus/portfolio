import { Folder } from "./Folder";

function Projects() {
    return ( 
        <section
            className="section-projects"
        >
            <div className="section-folders">
                <div className="container-folders">
                    <Folder name={'spaceXClone'} />
                    <div className="cover-folders">
                        <h1>Projects</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;