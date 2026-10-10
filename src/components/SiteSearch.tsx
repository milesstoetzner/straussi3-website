import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { buildIndex, search } from '../search'

export default function SiteSearch() {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const index = useMemo(() => buildIndex(t), [t])
  const hits = useMemo(() => search(index, query), [index, query])

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  const go = (path: string, id: string) => {
    setOpen(false)
    setQuery('')
    navigate(`${path}#${id}`)
  }

  return (
    <div className="search" ref={ref}>
      <input
        type="search"
        className="search__input"
        placeholder={t.search.placeholder}
        aria-label={t.search.placeholder}
        autoComplete="off"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          setOpen(true)
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') setOpen(false)
          if (e.key === 'Enter' && hits[0]) go(hits[0].path, hits[0].id)
        }}
      />
      {open && query.trim().length >= 2 && (
        <div className="search-panel" role="listbox">
          {hits.length === 0 && <p className="search-panel__empty">{t.search.noResults}</p>}
          {hits.map((hit) => (
            <button
              key={`${hit.path}#${hit.id}`}
              type="button"
              role="option"
              aria-selected="false"
              className="search-panel__hit"
              onClick={() => go(hit.path, hit.id)}
            >
              <span className="search-panel__title">
                {hit.page} · {hit.heading}
              </span>
              <span className="search-panel__snippet">{hit.snippet}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
