import { ProjectCard, type CardProps } from "./_components/ProjectCard/ProjectCard"
import { SubtitleProjects } from "./_components/Subtitle/SubtitleProjects"
import { TitleProjects } from "./_components/Title/TitleProjects"

import './projects.css'

const cardInfos: CardProps[] = [
  {
    title: "Aprimorar",
    description: "Landing page desenvolvida para um ambiente de reforço escolar e preparativos para vestibular",
    srcImage: "mockupAprimorar.png"
  },
  // {
  //   title: "",
  //   description: ""
  // },
  //   {
  //   title: "",
  //   description: ""
  // },
]

export function Projects() {
  return (
    <>
      <main className="projects-section" id="projects">
        <TitleProjects />
        <SubtitleProjects/>
        <div>
          {cardInfos.map((card, idx) => (
            <ProjectCard key={idx} {...card}/>
          ))}
        </div>
      </main>
    </>
  )
}
