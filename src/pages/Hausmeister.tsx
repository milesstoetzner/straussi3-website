import mapHausmeister from '../assets/map-hausmeister.png'
import autumn from '../assets/straussi-autumn.jpg'
import Hero from '../components/Hero'
import Section from '../components/Section'
import SheetEmbed from '../components/SheetEmbed'
import { useLanguage } from '../i18n/LanguageContext'

const SHEET_ID = '17ZNt_VSSQdkl8narP7ttZxruEzSXotpXiZWwJSuut5w'

export default function Hausmeister() {
  const { t } = useLanguage()
  const h = t.hausmeister

  return (
    <>
      <Hero title={h.title} image={autumn} />

      <div className="container">
        <Section>
          <p>{h.intro}</p>
          <p>{h.listHint}</p>
        </Section>

        <Section title={h.contact}>
          <p>
            {h.name}
            <br />
            {h.addressLines.map((l) => (
              <span key={l}>
                {l}
                <br />
              </span>
            ))}
            E-Mail: <a href={`mailto:${h.email}`}>{h.email}</a>
            <br />
            Telefon: <a href={`tel:${h.phone.replace(/\s/g, '')}`}>{h.phone}</a>
            <br />
            Mobil: <a href={`tel:${h.mobile.replace(/\s/g, '')}`}>{h.mobile}</a>
            <br />
            Fax: {h.fax}
          </p>
        </Section>

        <Section title={h.officeHours}>
          <p>
            {h.officeHoursItems.map((i) => (
              <span key={i}>
                {i}
                <br />
              </span>
            ))}
          </p>
        </Section>

        <Section title={h.findHim}>
          <img className="figure" src={mapHausmeister} alt={h.findHim} loading="lazy" />
        </Section>

        <Section title={h.youGet}>
          <SheetEmbed sheetId={SHEET_ID} title={h.sheetTitle} />
        </Section>
      </div>
    </>
  )
}
