import { useParticles } from '../../hooks/useParticles'
import './background.css'

export function BackgroundParticles() {
    useParticles()

  return <canvas id="particles-canvas" />
}