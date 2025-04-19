import { motion, useDragControls } from "framer-motion";
import { useAnimate } from "framer-motion";

import topFolder from "/TopFolder.svg";
import "./Folder.css";
import { ArrowIcon2 } from "./Icons";
import { useEffect } from "react";

const projects = {
  spaceXClone: {
    name: "SpaceX Clone",
    num: 3,
    technologies: ["Astro", "Tailwind", "API"],
    image: "/projects-img/spacex.jpeg",
    description: [
      "This project is a recreation of the official SpaceX website using modern web development technologies, Tailwind CSS, and Astro.",
      "The main innovation lies in the use of Astro to dynamically generate pages based on data from an API, enabling a smooth and efficient user experience.",
    ],
    url: "https://space-x-clone-psi.vercel.app/",
  },
  pomodoro: {
    name: "Pomodoro AI",
    num: 1,
    technologies: [
      "JavaScript",
      "CSS",
      "HTML",
      "NodeJS",
      "ExpressJS",
      "OpenAI API",
    ],
    image: "/projects-img/pomodoro.jpeg",
    description: [
      "My portfolio project is a minimalist Pomodoro Timer developed with Vanilla JavaScript, HTML, and CSS. It integrates AI through the OpenAI API for personalized advice, helping users achieve their goals during work sessions.",
      "Additionally, it uses localStorage to track users' progress, offering a simple yet effective solution for enhancing personal productivity.",
    ],
    url: "https://pomodoro-timer-minimalist.vercel.app/",
  },
  zhumell: {
    name: "E-commerce",
    num: 4,
    technologies: [
      "React",
      "Tailwind",
      "React-Router",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Stripe",
    ],
    image: "/projects-img/zhumell.jpeg",
    description: [
      "My project represents a significant advancement in my career, combining my skills with cutting-edge technologies such as React, NodeJS, MongoDB, and Stripe. It stands out for its versatility, featuring an attractive landing page with Tailwind, a dynamic router, and a shopping cart with local storage.",
      "Additionally, it includes user authentication, showcasing not only my technical expertise but also my ability to create comprehensive and effective solutions for real-world needs.",
    ],
    url: "https://zhummell-no-official.vercel.app/",
  },
  cs50: {
    name: "CS50",
    num: 2,
    technologies: [
      "Python",
      "Flask",
      "SQLite",
      "JavaScript",
      "CSS",
      "HTML",
      "API",
    ],
    image: "/projects-img/cs50.png",
    description: [
      "This project is my final assignment for the CS50 Computer Science course by Harvard.",
      "It's a unique project because I used Python with Flask instead of JavaScript to create the web page, and SQLite for the database.",
      "The course was very interesting as I learned a lot about computers and programming languages in general, which made it easier for me to learn new things about programming.",
    ],
    url: "",
  },
};

export const Folder = ({ name, isInView }) => {
  const controls = useDragControls();
  const [folder, animate] = useAnimate();

  useEffect(() => {
    if (isInView) {
      animate(
        folder.current,
        { y: [0, -30, 0] },
        { duration: 0.6, delay: projects[name].num * 0.2 }
      );
    }
  }, [isInView]);

  const handleDrag = (_, info) => {
    if (info.offset.y > -100) {
      animate(folder.current, { y: 0 });
    } else {
      animate(folder.current, { y: -440 });
    }
  };

  return (
    <motion.div
      className="folder"
      drag={"y"}
      dragControls={controls}
      dragListener={false}
      dragConstraints={{ bottom: 0, top: -440 }}
      dragElastic={0.1}
      onDragEnd={handleDrag}
      ref={folder}
      style={{
        translate: `0px -${40 * (projects[name].num - 1)}px`,
        zIndex: `-${projects[name].num}`,
      }}
    >
      <div
        className="top-folder"
        onPointerDown={(e) => controls.start(e)}
        style={{
          translate: `${40 * (projects[name].num - 1)}px 0px`,
        }}
      >
        <img src={topFolder} className="logo react" alt="the top of a folder" />
        <span className="folder-num">00{projects[name].num}</span>
        <span className="folder-name">{projects[name].name}</span>
      </div>
      <div className="bottom-folder">
        <div className="presentation">
          <h1>{projects[name].name}</h1>
          <img
            src={projects[name].image}
            alt={`image of the project ${projects[name].name}`}
          />
          <div className="technologies">
            {projects[name].technologies.map((tech, i) => (
              <small key={i}>{tech}</small>
            ))}
          </div>
        </div>
        <div className="description-project">
          {projects[name].description.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          {projects[name].url && (
            <a
              href={projects[name].url}
              target="_blank"
              rel="noopener noreferer"
              aria-label={`Check my ${projects[name].name} project`}
            >
              Take a look <ArrowIcon2 color="black" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
