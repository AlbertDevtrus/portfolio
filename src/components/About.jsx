import { useRef } from "react";

import Paragraph from "./Paragraph";
import { useState } from "react";
import { useEffect } from "react";
import { LogoIcon } from "./Icons";
import ThreeCanvas from "./ThreeCanvas";

function About() {
  const element = useRef(null);

  const [isWebGL2Supported, setIsWebGL2Supported] = useState(true);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2");
    setIsWebGL2Supported(gl);
  }, []);

  const paragraph =
    "My name is Luis and I'm a web Developer. My focus is on Front-End technologies such as HTML, CSS, JavaScript, React, and Framer Motion, I have a strong interest in delving into the world of UX/UI design for the web. I'm eager to collaborate on interesting projects and bring creative ideas to life!";

  return (
    <section className="about" ref={element}>
      <div className="left">
        <h2 className="title">/ABOUT</h2>
        <div className="text">
          <Paragraph value={paragraph} element={element} />
        </div>
        <div className="right">
          {isWebGL2Supported ? (
            <ThreeCanvas />
          ) : (
            <div>
              <LogoIcon />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
