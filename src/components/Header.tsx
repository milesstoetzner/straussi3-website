import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { useLanguage } from '../i18n/LanguageContext'
import BrandStripe from './BrandStripe'
import LanguageMenu from './LanguageMenu'
import SiteSearch from './SiteSearch'

export default function Header() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/', label: t.nav.home, end: true },
    { to: '/hausmeister', label: t.nav.hausmeister },
    { to: '/wore', label: t.nav.wore },
    { to: '/wohnen', label: t.nav.wohnen },
  ]

  return (
    <header className="header">
      <BrandStripe />
      <div className="container header__top">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="" width="36" height="36" />
          <span>
            <span className="brand__name">{t.siteName}</span>
            <span className="brand__sub">{t.siteSub}</span>
          </span>
        </NavLink>

        <div className="header__right">
          <SiteSearch />
          <a className="btn header__apply" href={t.apply.url} target="_blank" rel="noreferrer">
            {t.apply.label}
          </a>
        </div>
        <button
          type="button"
          className="nav-link header__toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <nav id="site-nav" className={`nav${open ? ' nav--open' : ''}`}>
        <div className="container nav__inner">
          <ul className="nav__list">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a className="nav-link" href="https://untermiete.straussi3.de/" target="_blank" rel="noreferrer">
                {t.nav.untermiete}
                <svg viewBox="0 0 20 20" width="12" height="12" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M11 3h6v6M17 3l-8 8M15 11v5H4V5h5" />
                </svg>
              </a>
            </li>
          </ul>
          <a
            className="nav-link nav-link--icon"
            href="https://www.instagram.com/straussi_3/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.3" cy="6.7" r="1.3" fill="currentColor" />
            </svg>
          </a>
          <LanguageMenu />
        </div>
      </nav>
    </header>
  )
}
