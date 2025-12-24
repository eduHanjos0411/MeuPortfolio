import type React from 'react';
import './baseLink.css'

export function BaseLink({ href, children }: { href?: string; children?: React.ReactNode }) {
  return <a className='base-link' href={href}>{children}</a>
}