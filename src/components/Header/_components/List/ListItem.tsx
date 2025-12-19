import './ListItem.css'

export function ListItem({ children, href }: { children: string, href?: string }) {
  return <a href={href} className='list-item'>{children}</a>
}
