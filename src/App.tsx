import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import { LanguageProvider, useLanguage } from './i18n/LanguageContext'
import Hausmeister from './pages/Hausmeister'
import Home from './pages/Home'
import { Datenschutz, Impressum } from './pages/Legal'
import WoRe from './pages/WoRe'
import Wohnen from './pages/Wohnen'

/** Old Google Sites URLs: /english-version/* switches to English and maps to the shared routes. */
const LEGACY: Record<string, string> = {
  '/english-version': '/',
  '/english-version/janitor': '/hausmeister',
  '/english-version/wore': '/wore',
  '/english-version/living': '/wohnen',
}

function LegacyEnglishRedirect() {
  const { pathname } = useLocation()
  const { setLang } = useLanguage()
  useEffect(() => setLang('en'), [setLang])
  return <Navigate to={LEGACY[pathname.replace(/\/$/, '')] ?? '/'} replace />
}

function PageTitle() {
  const { t } = useLanguage()
  const { pathname } = useLocation()
  useEffect(() => {
    const titles: Record<string, string> = {
      '/': t.home.title,
      '/hausmeister': t.hausmeister.title,
      '/wore': t.wore.title,
      '/wohnen': t.wohnen.title,
      '/impressum': t.footer.impressum,
      '/datenschutz': t.footer.datenschutz,
    }
    const page = titles[pathname]
    document.title = page && pathname !== '/' ? `${t.siteName} – ${page}` : t.siteName
  }, [pathname, t])
  return null
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <PageTitle />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="hausmeister" element={<Hausmeister />} />
            <Route path="wore" element={<WoRe />} />
            <Route path="wohnen" element={<Wohnen />} />
            <Route path="impressum" element={<Impressum />} />
            <Route path="datenschutz" element={<Datenschutz />} />
            <Route path="das-straußi-3" element={<Navigate to="/" replace />} />
            <Route path="english-version/*" element={<LegacyEnglishRedirect />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
