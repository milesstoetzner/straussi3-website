import garden from '../assets/garden-raised-beds.jpg'
import mapWore from '../assets/map-wore.png'
import autumn from '../assets/straussi-autumn.jpg'
import Hero from '../components/Hero'
import Section from '../components/Section'
import SheetEmbed from '../components/SheetEmbed'
import { useLanguage } from '../i18n/LanguageContext'

const SHEET_ID = '1KExQoSy5_iGKYpckLgTSYfgmIyKS2-1_t_ih0w8V9es'

export default function WoRe() {
  const { t } = useLanguage()
  const w = t.wore

  return (
    <>
      <Hero title={w.title} image={autumn} />

      <div className="container">
        <Section title={w.whatIs}>
          <p>{w.whatIsText}</p>
        </Section>

        <Section title={w.whoAre} />

        {w.tutors.map((tutor) => (
          <Section key={tutor.role} title={tutor.role}>
            <p>
              {tutor.names.map((n) => (
                <span key={n}>
                  {n}
                  <br />
                </span>
              ))}
            </p>
            <h3>{tutor.contactLabel}</h3>
            <ul>
              <li>
                <a href={`mailto:${tutor.email}`}>{tutor.email}</a>
              </li>
              <li>{tutor.whatsappNote}</li>
            </ul>
            <h3>{tutor.question}</h3>
            {typeof tutor.description === 'string' ? <p>{tutor.description}</p> : tutor.description}
          </Section>
        ))}

        <Section>
          <img className="figure figure--photo" src={garden} alt="" loading="lazy" />
        </Section>

        <Section title={w.findUs}>
          <img className="figure" src={mapWore} alt={w.findUs} loading="lazy" />
        </Section>

        <Section title={w.lend}>
          <SheetEmbed sheetId={SHEET_ID} title={w.sheetTitle} />
        </Section>
      </div>
    </>
  )
}
