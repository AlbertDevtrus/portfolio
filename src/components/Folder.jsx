import {motion, useDragControls} from 'framer-motion';
import { useAnimate } from 'framer-motion';

import topFolder from '/public/TopFolder.svg'
import './Folder.css'
import { ArrowIcon2 } from './Icons';

const projects = {
    spaceXClone: {
        name: 'SpaceX Clone',
        num: '001',
        technologies: [
            'Astro', 
            'Tailwind',
            'API'
        ],
        image: '/public/projects-img/spacex.jpeg',
        description: [
            'This project is a recreation of the official SpaceX website using modern web development technologies, Tailwind CSS, and Astro.',
            'The main innovation lies in the use of Astro to dynamically generate pages based on data from an API, enabling a smooth and efficient user experience.'
        ] 
        ,
        url: 'https://space-x-clone-psi.vercel.app/'
    }
}

export const Folder = ({name}) => {
    const controls = useDragControls();
    const [folder, animate] = useAnimate();

    const handleDrag = (event, info) => {
        if(info.offset.y > -100) {
            animate(document.querySelector('.folder'), {y: 0})
        } else {
            animate(document.querySelector('.folder'), {y: -400})
        } 
    }

    return (
        <motion.div
            className='folder'
            drag={'y'}
            dragControls={controls}
            dragListener={false}
            dragConstraints={{bottom: 0, top: -400}}
            dragElastic={0.1}
            onDragEnd={handleDrag}
            ref={folder}
        >
            <div 
                className='top-folder'
                onPointerDown={e => controls.start(e)}
            >
                <img
                    src={topFolder} 
                    className="logo react" 
                    alt="React logo"
                />
                <span className='folder-num'>
                    {projects[name].num}
                </span>
                <span className='folder-name'>
                    {projects[name].name}
                </span>
            </div>
            <div className='bottom-folder'>
                <div className='presentation'>
                    <h1>{projects[name].name}</h1>
                    <img src={projects[name].image} />
                    <div className='technologies'>
                        {
                            projects[name].technologies.map((tech, i) => (
                                <small key={i}>{tech}</small>
                            ))
                        }
                    </div>
                </div>
                <div className='description-project'>
                    {
                        projects[name].description.map((paragraph, i) => (
                            <p key={i}>
                                {paragraph}
                            </p>
                        ))
                    }
                    <a href={projects[name].url} target='_blank' rel='noopener noreferer'>
                        Take a look <ArrowIcon2 color='black' /> 
                    </a>
                </div>
            </div>
        </motion.div>
    )
}