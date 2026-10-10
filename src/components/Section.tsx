import type { ReactNode } from 'react'
import { slug } from '../search/slug'

/** A titled block; the id derived from the title is what search results link to. */
export default function Section({ title, children }: { title?: string; children?: ReactNode }) {
  return (
    <section className="section" id={title ? slug(title) : undefined}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  )
}
