import "./App.css"
import { About } from "./components/About"
import { BackgroundParticles } from "./components/BackgroundParticles/BackgroundParticles"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"

function App() {
  return <>
  <BackgroundParticles/>
  <Header/>
  <Hero/>
  <About/>
  </>
}

export default App
