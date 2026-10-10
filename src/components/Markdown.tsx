import { Fragment, type ReactNode } from 'react'
import { slug } from '../search/slug'

const URL_RE = /(https?:\/\/[^\s]+?)([.,;:)]*)(?=\s|$)/g

function inline(text: string): ReactNode[] {
  const out: ReactNode[] = []
  let last = 0
  let i = 0
  for (const m of text.matchAll(URL_RE)) {
    const idx = m.index ?? 0
    if (idx > last) out.push(text.slice(last, idx))
    out.push(
      <a key={i++} href={m[1]} target="_blank" rel="noreferrer">
        {m[1]}
      </a>,
    )
    if (m[2]) out.push(m[2])
    last = idx + m[0].length
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}

function lines(block: string): ReactNode[] {
  return block.split(/ {2}\n|\n/).map((l, i, arr) => (
    <Fragment key={i}>
      {inline(l)}
      {i < arr.length - 1 && <br />}
    </Fragment>
  ))
}

/** Minimal renderer for the legal pages: headings, paragraphs, hard breaks, bullets, autolinks. */
export default function Markdown({ source }: { source: string }) {
  const blocks = source.trim().split(/\n\s*\n/)
  return (
    <div className="prose">
      {blocks.map((block, i) => {
        const h = block.match(/^(#{1,4}) (.+)$/s)
        if (h) {
          const Tag = `h${h[1].length}` as 'h1' | 'h2' | 'h3' | 'h4'
          return (
            <Tag key={i} id={slug(h[2])}>
              {h[2]}
            </Tag>
          )
        }
        if (/^- /m.test(block)) {
          return (
            <ul key={i}>
              {block
                .split(/\n(?=- )/)
                .map((item) => item.replace(/^- /, ''))
                .map((item, j) => (
                  <li key={j}>{inline(item.replace(/\n/g, ' '))}</li>
                ))}
            </ul>
          )
        }
        return <p key={i}>{lines(block)}</p>
      })}
    </div>
  )
}
