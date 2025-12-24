import { TextAbout } from "./_components/Text/TextAbout";
import { TitleAbout } from "./_components/Title/TitleAbout";
import './about.css'

export function About() {
  return (
    <main className="about-section" id="about">
    <TitleAbout/>
    <div>
    <TextAbout/> 
    <img src=""/>
    </div>
    </main>
  )
}