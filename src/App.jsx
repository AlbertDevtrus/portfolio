import useSmoothScroll from "./hooks/useSmoothScroll"

import About from "./components/About"
import NavBar from "./components/NavBar"
import { ArrowIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "./components/Icons"
import Draw from "./components/Draw";

function App() {

  useSmoothScroll();

  return (
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
          <a href="#">
            <LinkedinIcon speed={0.1} />
          </a>
          <a href="#">
            <GithubIcon speed={0.04} />
          </a>
          <a href="#">
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
    </main>
  )
}

export default App
