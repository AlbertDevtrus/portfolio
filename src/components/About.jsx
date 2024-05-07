import { useRef } from "react";
import Paragraph from "./Paragraph";

function About() {

    const element = useRef(null);

    const paragraph1 = "My name is Luis and I'm studying web Development"
    const paragraph2 = "My focus is on front-end technologies such as HTML, CSS, JavaScript, React, and Framer Motion. Additionally, I have a strong interest in delving into the world of UX/UI design for the web.";
    const paragraph3 = "I'm eager to collaborate on interesting projects and bring creative ideas to life!";

    return ( 
        <section className="about" ref={element}>
            <div className="left">
                <h2 className="title">/ABOUT</h2>
                <div className="text">
                    <Paragraph value={paragraph1} element={element} />
                    <Paragraph value={paragraph2} element={element} />
                    <Paragraph value={paragraph3} element={element} />
                </div>
            </div>
        </section>
     )
}

export default About;