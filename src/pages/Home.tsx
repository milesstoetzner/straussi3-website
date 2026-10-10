import autumn from '../assets/straussi-autumn.jpg'
import Hero from '../components/Hero'
import InstagramFeed from '../components/InstagramFeed'
import MapEmbed from '../components/MapEmbed'
import Section from '../components/Section'
import { useLanguage } from '../i18n/LanguageContext'

const MAP_SRC =
  'https://maps-api-ssl.google.com/maps?hl=en-US&ll=48.742791,9.101084&output=embed&q=48.742825,9.100833+(Stra%C3%9Fi+3)&z=17'

export default function Home() {
  const { t } = useLanguage()
  const h = t.home

  return (
    <>
      <Hero title={h.title} image={autumn} />

      <div className="container">
        <div className="actions">
          <a className="btn btn--block" href={h.applyUrl} target="_blank" rel="noreferrer">
            {h.apply}
          </a>
        </div>

        <Section title={h.address}>
          <address>
            {h.addressLines.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </address>
        </Section>

        <Section title={h.findUs}>
          <MapEmbed src={MAP_SRC} title={h.findUs} />
        </Section>

        <Section title={h.about}>
          <p>{h.aboutText}</p>
        </Section>

        <Section title={h.keyData}>
          <ul>
            {h.keyDataItems.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </Section>

        <Section title={h.rent}>
          <p>{h.rentValue}</p>
        </Section>

        <Section title={h.internet}>
          <p>{h.internetText}</p>
        </Section>

        <Section title={h.equipment}>
          <ul>
            {h.equipmentItems.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </Section>

        <Section title={h.instagram}>
          <InstagramFeed />
        </Section>
      </div>
    </>
  )
}
