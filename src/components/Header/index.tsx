import { useParticle } from "../BackgroundParticles/useParticles";
import { ListGroup } from "./_components/List/ListGroup";
import './header.css'

export function Header() {
  useParticle()
  
  return(
    <main>
      <header className="header-container">
        <img src="Logo.png"/>
        <nav>
          <ListGroup/>
        </nav>
      </header>
    </main>
  )
}