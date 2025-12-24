import { TextHero } from "./_components/Text/TextHero";
import { TitleHero } from "./_components/Title/TitleHero";
import './hero.css'

export function Hero() {
  return (
    <main className="hero-section" id="hero">
      <TitleHero/>
      <TextHero/>
    </main>
  )
}