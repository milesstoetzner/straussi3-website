import { isValidElement, type ReactNode } from 'react'
import datenschutz from '../content/datenschutz.md?raw'
import impressum from '../content/impressum.md?raw'
import type { Content } from '../i18n/types'
import { slug } from './slug'

export interface SearchEntry {
  path: string
  page: string
  heading: string
  id: string
  text: string
}

/** Text content of a ReactNode: strings as they are, elements by their children. */
function plain(node: ReactNode): string {
  if (node == null || typeof node === 'boolean') return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(plain).join('')
  if (isValidElement<{ children?: ReactNode }>(node)) return plain(node.props.children)
  return ''
}

function markdownSections(path: string, page: string, source: string): SearchEntry[] {
  const out: SearchEntry[] = []
  let heading = page
  let buf: string[] = []
  const flush = () => {
    if (buf.length) out.push({ path, page, heading, id: slug(heading), text: buf.join(' ') })
    buf = []
  }
  for (const line of source.split('\n')) {
    const h = line.match(/^#{1,4} (.+)$/)
    if (h) {
      flush()
      heading = h[1]
    } else if (line.trim()) buf.push(line.trim())
  }
  flush()
  return out
}

/** Flattens the page content of one language into searchable sections. */
export function buildIndex(t: Content): SearchEntry[] {
  const e = (path: string, page: string, heading: string, ...parts: ReactNode[]): SearchEntry => ({
    path,
    page,
    heading,
    id: slug(heading),
    text: parts.map(plain).join(' '),
  })
  const h = t.home
  const hm = t.hausmeister
  const w = t.wore
  const wo = t.wohnen
  return [
    e('/', t.nav.home, h.address, ...h.addressLines),
    e('/', t.nav.home, h.about, h.aboutText),
    e('/', t.nav.home, h.keyData, ...h.keyDataItems),
    e('/', t.nav.home, h.rent, h.rentValue),
    e('/', t.nav.home, h.internet, h.internetText),
    e('/', t.nav.home, h.equipment, ...h.equipmentItems),
    e('/hausmeister', t.nav.hausmeister, hm.title, hm.intro, hm.listHint),
    e('/hausmeister', t.nav.hausmeister, hm.contact, hm.name, ...hm.addressLines, hm.email, hm.phone, hm.mobile, hm.fax),
    e('/hausmeister', t.nav.hausmeister, hm.officeHours, ...hm.officeHoursItems),
    e('/wore', t.nav.wore, w.whatIs, w.whatIsText),
    ...w.tutors.map((tu) =>
      e('/wore', t.nav.wore, tu.role, ...tu.names, tu.email, tu.whatsappNote, tu.question, tu.description),
    ),
    e('/wohnen', t.nav.wohnen, wo.residents, wo.residentsNote, wo.residentsText),
    e('/wohnen', t.nav.wohnen, wo.importantInfo, wo.emergency),
    e('/wohnen', t.nav.wohnen, wo.application, wo.applicationLead, wo.applicationText, wo.laufrundeText),
    e('/wohnen', t.nav.wohnen, wo.sublet, wo.subletText),
    ...markdownSections('/impressum', t.footer.impressum, impressum),
    ...markdownSections('/datenschutz', t.footer.datenschutz, datenschutz),
  ]
}

export interface SearchHit extends SearchEntry {
  snippet: string
}

export function search(index: SearchEntry[], query: string, limit = 8): SearchHit[] {
  const q = query.trim().toLowerCase()
  if (q.length < 2) return []
  const hits: SearchHit[] = []
  for (const entry of index) {
    const inHeading = entry.heading.toLowerCase().includes(q)
    const pos = entry.text.toLowerCase().indexOf(q)
    if (!inHeading && pos < 0) continue
    const start = Math.max(0, pos - 40)
    const snippet = pos < 0 ? entry.text.slice(0, 90) : (start > 0 ? '…' : '') + entry.text.slice(start, pos + q.length + 50)
    hits.push({ ...entry, snippet: snippet.trim() + (entry.text.length > snippet.length ? '…' : '') })
    if (hits.length >= limit) break
  }
  return hits
}
