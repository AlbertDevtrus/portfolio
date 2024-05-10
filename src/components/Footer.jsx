import { useState } from "react";
import { ArrowIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";

function Footer() {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    return ( 
        <footer className="footer" id="contact">
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
                <a href="tel:8848438432">
                    +52 884 843 8432
                </a>
            </div>
            <div className="form">
                <p>
                    Make your ideas come to life, contact me!
                </p>
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
                    <svg width="18" height="20" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.9142 0.585785C16.1332 -0.195264 14.8668 -0.195264 14.0858 0.585785L1.35786 13.3137C0.576816 14.0948 0.576816 15.3611 1.35786 16.1421C2.13891 16.9232 3.40524 16.9232 4.18629 16.1421L15.5 4.82843L26.8137 16.1421C27.5948 16.9232 28.8611 16.9232 29.6421 16.1421C30.4232 15.3611 30.4232 14.0948 29.6421 13.3137L16.9142 0.585785ZM17.5 32.0167L17.5 2H13.5L13.5 32.0167H17.5Z" fill="white"/>
                    </svg>
                </a>
            </div>
            
        </footer>
     );
}


export default Footer;