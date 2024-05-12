import {motion, useDragControls} from 'framer-motion';
import { useAnimate } from 'framer-motion';

import topFolder from '/public/TopFolder.svg'
import './Folder.css'
import { ArrowIcon2 } from './Icons';

const projects = {
    spaceXClone: {
        name: 'SpaceX Clone',
        num: 2,
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
    },
    pomodoro: {
        name: 'Pomodoro AI',
        num: 1,
        technologies: [
            'JavaScript', 
            'CSS',
            'HTML',
            'NodeJS',
            'ExpressJS',
            'OpenAI API'
        ],
        image: '/public/projects-img/pomodoro.jpeg',
        description: [
            "My portfolio project is a minimalist Pomodoro Timer, developed entirely with Vanilla JavaScript, HTML, and CSS.", 
            "It stands out for its integration with artificial intelligence through the OpenAI API, which provides personalized advice to help users achieve their goals during work sessions.",  
            "Additionally, it utilizes localStorage to keep track of users' progress, offering a simple yet effective solution for enhancing personal productivity."
        ] 
        ,
        url: 'https://pomodoro-timer-minimalist.vercel.app/'
    },
    zhumell: {
        name: 'E-commerce',
        num: 3,
        technologies: [
            'React',
            'Tailwind', 
            'React-Router',
            'NodeJS',
            'ExpressJS',
            'MongoDB',
            'Stripe'
        ],
        image: '/public/projects-img/zhumell.jpeg',
        description: [
            "My project represents a significant advancement in my career, where I combined my skills with cutting-edge technologies such as React, NodeJS, MongoDB, and Stripe.", 
            "It stands out for its versatility, featuring an attractive landing page with Tailwind, a dynamic router, and a shopping cart with local storage.", 
            "Additionally, it includes user authentication. This project not only showcases my technical expertise but also my ability to create comprehensive and effective solutions for real-world needs."
        ] 
        ,
        url: 'https://zhummellclone.vercel.app/'
    },
}

export const Folder = ({name, isInView}) => {
    const controls = useDragControls();
    const [folder, animate] = useAnimate();

    if(isInView) {
        animate(folder.current, {y: [0, -30, 0]}, { duration: 0.6, delay: (projects[name].num * 0.2) })    
    }

    const handleDrag = (_, info) => {
        if(info.offset.y > -100) {
            animate(folder.current, {y: 0})
        } else {
            animate(folder.current, {y: -440})
        } 
    }

    return (
        <motion.div
            className='folder'
            drag={'y'}
            dragControls={controls}
            dragListener={false}
            dragConstraints={{bottom: 0, top: -440}}
            dragElastic={0.1}
            onDragEnd={handleDrag}
            ref={folder}
            style={{
                translate: `0px -${40 * (projects[name].num - 1)}px`,
                zIndex: `-${projects[name].num}`
            }}
        >
            <div 
                className='top-folder'
                onPointerDown={e => controls.start(e)}
                style={{
                    translate: `${40 * (projects[name].num - 1)}px 0px`
                }}
            >
                <img
                    src={topFolder} 
                    className="logo react" 
                    alt="React logo"
                />
                <span className='folder-num'>
                    00{projects[name].num}
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