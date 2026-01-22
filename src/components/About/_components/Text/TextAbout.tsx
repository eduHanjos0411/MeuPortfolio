import { EmailLink } from "../../../Links/childrens/EmailLink"
import { GithubLink } from "../../../Links/childrens/GithubLink"
import { LinkedinLink } from "../../../Links/childrens/LinkedinLink"
import "./textAbout.css"

export function TextAbout() {
  return (
    <article className="text-about">
      <div className="top-content">
        <img src="eu.png" alt=""  className="eu-pic"/>
        <div className="right-side">
          <div className="texts">
            <p>
              Olá! Meu nome é <strong>Eduardo Henrique Vieira dos Anjos</strong>
              , sou um <strong>Desenvolvedor Fullstack</strong> entusiasta por
              tecnologia e inovação. Desde a minha primeira linha de código,
              fiquei fascinado pelo fato de poder{" "}
              <strong>criar um mundo inteiro da forma que se imaginar</strong>.
              E desde então, venho me aperfeiçoando para poder criar o mundo que
              os <strong>outros imaginam</strong>. Procuro constantemente{" "}
              <strong>aperfeiçoar</strong> minhas habilidades e para alcançar a{" "}
              <strong>excelência</strong> nos meus serviços.
            </p>

            <p>
              Atualmente, estou no 4º semestre de Tecnologia em Sistemas para
              Internet, atuando como estagiário em{" "}
              <strong>desenvolvimento web</strong>. Tenho experiência com
              diversas tecnologias, sendo a atual que mais utilizo:{" "}
              <strong>React com Typescript e Node</strong>, porém possuo
              conhecimentos em outras linguagens e tecnologias como{" "}
              <strong>Java com Spring e Angular</strong>. Fora isso, estou
              sempre procurando aprender mais sobre novas tecnologias e e
              continuar <strong>evoluindo como desenvolvedor</strong>.
            </p>

            <p>
              Fora dos códigos, sou apaixonado por videogames, música e animes.
              Acredito que meus hobbies me ajudam a manter a criatividade e a
              inspiração para criar novas soluções tecnológicas.
            </p>

            <p>
              Estou sempre aberto a novas oportunidades e desafios, então se te
              interessei pelo meu perfil, <strong>não hesite em entrar em contato!</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="actions">
        <EmailLink />
        <LinkedinLink />
        <GithubLink />
      </div>
    </article>
  )
}
