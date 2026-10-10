import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

interface ConsentEmbedProps {
  /** localStorage key under which the visitor's consent is remembered */
  storageKey: string
  note: string
  button: string
  className?: string
  children: ReactNode
}

function remembered(key: string): boolean {
  try {
    return window.localStorage.getItem(key) === '1'
  } catch {
    return false
  }
}

/** Third-party embed (Google Maps, Google Sheets) that only loads after the visitor agrees. */
export default function ConsentEmbed({ storageKey, note, button, className = '', children }: ConsentEmbedProps) {
  const { t } = useLanguage()
  const [allowed, setAllowed] = useState(() => remembered(storageKey))

  const allow = () => {
    setAllowed(true)
    try {
      window.localStorage.setItem(storageKey, '1')
    } catch {
      /* storage unavailable */
    }
  }

  if (allowed) return <>{children}</>

  return (
    <div className={`consent ${className}`.trim()}>
      <p>{note}</p>
      <button type="button" className="btn" onClick={allow}>
        {button}
      </button>
      <Link to="/datenschutz" className="consent__privacy">
        {t.consent.privacyLink}
      </Link>
    </div>
  )
}
