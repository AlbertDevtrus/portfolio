import { useState, useRef } from "react";
import { ArrowIcon, ArrowIcon2, GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import { motion, useScroll, useTransform } from "framer-motion";

function Footer() {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    })

    const y = useTransform(scrollYProgress, [0, 1], [-1000, 0]);
    


    return ( 
        <motion.footer className="footer" id="contact" style={{ y }} >
            <div className="text">
                <h1>
                    /LET'S WORK TOGETHER
                </h1>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/luis-guzman-bautista/" target="_blank" rel="noopener noreferer">
                        <LinkedinIcon speed={0} />
                    </a>
                    <a href="https://github.com/TimmyElTaco" target="_blank" rel="noopener noreferer">
                        <GithubIcon speed={0.0} />
                    </a>
                    <a href="https://twitter.com/TimmyElTaco" target="_blank" rel="noopener noreferer" >
                        <TwitterIcon speed={0.0} />
                    </a>
                </div>
            </div>
            <div className="form">
                <p>
                    Make your ideas come to life, contact me!
                </p>
                <div className="icons-in-form">
                    <a href="https://www.linkedin.com/in/luis-guzman-bautista/" target="_blank" rel="noopener noreferer">
                        <LinkedinIcon speed={0} color="white" />
                    </a>
                    <a href="https://github.com/TimmyElTaco" target="_blank" rel="noopener noreferer">
                        <GithubIcon speed={0.0} color="white" />
                    </a>
                    <a href="https://twitter.com/TimmyElTaco" target="_blank" rel="noopener noreferer" >
                        <TwitterIcon speed={0.0} color="white" />
                    </a>
                </div>
                <form action={`mailto:albertpatrsu@gmail.com?subject=Contact portfolio from ${name}&body=${message}`} method="post">
                    <input className="form-inputs" type="text" name="name" id="name" placeholder="Name" required onChange={(e) => setName(e.target.value)} />
                    <textarea className="form-inputs" name="message" id="message" placeholder="Your message" onChange={(e) => setMessage(e.target.value)} required></textarea>
                    <button>
                        Send
                        <ArrowIcon color={'white'} size="20" />
                    </button>
                </form>
                <a data-scroll-to href="main" data-scroll-to-duration={3}>
                    Back top
                    <ArrowIcon2 />
                </a>
            </div>
            
        </motion.footer>
     );
}


export default Footer;