import { ArrowIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "./components/Icons"
import NavBar from "./components/NavBar"

function App() {

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
            <LinkedinIcon />
          </a>
          <a href="#">
            <GithubIcon />
          </a>
          <a href="#">
            <TwitterIcon />
          </a>
        </div>
        <div className="arrow" >
          <ArrowIcon />
        </div>
      </section>
    </main>
  )
}

export default App
