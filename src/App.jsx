import useSmoothScroll from "./hooks/useSmoothScroll"

import About from "./components/About"
import NavBar from "./components/NavBar"
import { ArrowIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "./components/Icons"
import Draw from "./components/Draw";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import NavBarRes from "./components/NavBarRes";
import { useInView } from "framer-motion";
import { useRef } from "react";

function App() {

  useSmoothScroll();

  const home = useRef(null);
  const contact = useRef(null);
  const inView = useInView(home);
  const inViewContact = useInView(contact, { margin: "0% 0% -50% 0%" })

  return (
    <>
      <main>
        <NavBar />
        <NavBarRes inView={inView} inView2={inViewContact} />
        <section className="presentation-container" ref={home}>
          <div>
            <h1 className="title">
              Hello, I'm Luis.
            </h1>
            <span className="description">
              Passionate web <strong>developer</strong> and web <strong>designer</strong>
            </span>
          </div>
          <div className="icons">
            <a href="https://www.linkedin.com/in/luis-guzman-bautista/" target="_blank" rel="noopener noreferer">
              <LinkedinIcon speed={0.1} />
            </a>
            <a href="https://github.com/TimmyElTaco" target="_blank" rel="noopener noreferer">
              <GithubIcon speed={0.04} />
            </a>
            <a href="https://twitter.com/TimmyElTaco" target="_blank" rel="noopener noreferer" >
              <TwitterIcon speed={0.07} />
            </a>
          </div>
          <div className="arrow" data-scroll data-scroll-speed={-0.1} >
            <ArrowIcon />
          </div>
        </section>
        <section className="draw">
          <Draw />
        </section>
        <About />
        <Projects />
      </main>
      <div ref={contact}>
        <Footer />
      </div>
    </>
  )
}

export default App
