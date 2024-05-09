import { Suspense, useRef } from "react";
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';

import Cube from '../../public/Cube'
import Paragraph from "./Paragraph";

function About() {

    const element = useRef(null);

    const paragraph = "My name is Luis and I'm studying web Development. My focus is on front-end technologies such as HTML, CSS, JavaScript, React, and Framer Motion, I have a strong interest in delving into the world of UX/UI design for the web. I'm eager to collaborate on interesting projects and bring creative ideas to life!"

    return ( 
        <section className="about" ref={element}>
            <div className="left">
                <h2 className="title">/ABOUT</h2>
                <div className="text">
                    <Paragraph value={paragraph} element={element} />
                </div>
                <div className="right">
                    {/* <Canvas>
                        <ambientLight />
                        <OrbitControls enableZoom={false} enablePan={false} />
                        <Suspense fallback={null}>
                            <Cube />
                        </Suspense>
                        <Environment preset='park' />
                    </Canvas> */}
                </div>
            </div>
        </section>
     )
}

export default About;