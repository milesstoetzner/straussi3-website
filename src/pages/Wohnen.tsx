import winter from '../assets/straussi-winter.jpg'
import Hero from '../components/Hero'
import Section from '../components/Section'
import { useLanguage } from '../i18n/LanguageContext'

export default function Wohnen() {
  const { t } = useLanguage()
  const w = t.wohnen

  return (
    <>
      <Hero title={w.title} image={winter} />

      <div className="container">
        <div className="actions">
          <a className="btn btn--block" href={w.applyUrl} target="_blank" rel="noreferrer">
            {w.apply}
          </a>
        </div>

        <Section title={w.residents}>
          <p className="notice">{w.residentsNote}</p>
          <p>{w.residentsText}</p>
        </Section>

        <Section title={w.importantInfo}>
          <p>{w.emergency}</p>
        </Section>

        <Section title={w.application}>
          <p>{w.applicationLead}</p>
          <p>{w.applicationText}</p>
          <p>{w.laufrundeText}</p>
        </Section>

        <Section title={w.sublet}>
          <p>{w.subletText}</p>
        </Section>
      </div>
    </>
  )
}
