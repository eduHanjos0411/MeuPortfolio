import { ListItem } from "./ListItem"
import './ListGroup.css'

export function ListGroup() {
  return (
    <ul className="list-group">
      <ListItem href="#hero">Início</ListItem>
      <ListItem href="#about">Sobre mim</ListItem>
      <ListItem href="#projects">Projetos</ListItem>
      <ListItem href="#contact">Contato</ListItem>
    </ul>
  )
}