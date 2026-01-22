import "./App.css"
import { About } from "./components/About"
import { BackgroundParticles } from "./components/BackgroundParticles/BackgroundParticles"
import { BackToTopBtn } from "./components/BackToTopButton/BackToTopBtn"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"

function App() {
  return <>
  <BackgroundParticles/>
  <Header/>
  <Hero/>
  <About/>
  <Projects/>
  <BackToTopBtn/>
  </>
}

export default App
