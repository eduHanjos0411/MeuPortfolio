import { ListItem } from "./ListItem"
import './ListGroup.css'

export function ListGroup() {
  return (
    <ul className="list-group">
      <ListItem>O que faço</ListItem>
      <ListItem>Quem sou</ListItem>
      <ListItem>Projetos</ListItem>
    </ul>
  )
}