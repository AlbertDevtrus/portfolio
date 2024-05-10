import useSmoothScroll from "./hooks/useSmoothScroll"

import About from "./components/About"
import NavBar from "./components/NavBar"
import { ArrowIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "./components/Icons"
import Draw from "./components/Draw";
import Footer from "./components/Footer";

function App() {

  useSmoothScroll();

  return (
    <>
      <main>
        <NavBar />
        <section className="presentation-container">
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
              <LinkedinIcon speed={0} />
            </a>
            <a href="https://github.com/TimmyElTaco" target="_blank" rel="noopener noreferer">
              <GithubIcon speed={0.0} />
            </a>
            <a href="https://twitter.com/TimmyElTaco" target="_blank" rel="noopener noreferer" >
              <TwitterIcon speed={0.0} />
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
      </main>
      <Footer />
    </>
  )
}

export default App
