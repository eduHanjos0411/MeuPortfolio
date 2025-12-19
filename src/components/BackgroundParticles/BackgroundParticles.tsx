import { useParticle } from '../../hooks/useParticles'
import './background.css'

export function BackgroundParticles() {
    useParticle()

  return <canvas id="particles-canvas" />
}