import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

const SUBLET_URL = 'https://untermiete.straussi3.de/'

export default function Footer() {
  const { t } = useLanguage()
  const pages = [
    { to: '/', label: t.nav.home },
    { to: '/hausmeister', label: t.nav.hausmeister },
    { to: '/wore', label: t.nav.wore },
    { to: '/wohnen', label: t.nav.wohnen },
  ]

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <h6>{t.siteName}</h6>
          <ul>
            {pages.map((p) => (
              <li key={p.to}>
                <Link to={p.to}>{p.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h6>{t.nav.untermiete}</h6>
          <ul>
            <li>
              <a href={SUBLET_URL} target="_blank" rel="noreferrer">
                {t.footer.subletPage}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6>{t.footer.about}</h6>
          <ul>
            <li>
              <a href="https://www.instagram.com/straussi_3/" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <Link to="/impressum">{t.footer.impressum}</Link>
            </li>
            <li>
              <Link to="/datenschutz">{t.footer.datenschutz}</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
