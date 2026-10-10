import { useLanguage } from '../i18n/LanguageContext'
import ConsentEmbed from './ConsentEmbed'

export default function MapEmbed({ src, title }: { src: string; title: string }) {
  const { t } = useLanguage()
  return (
    <div className="map">
      <ConsentEmbed storageKey="straussi3-consent-maps" note={t.consent.mapsNote} button={t.consent.mapsButton} className="map__consent">
        <iframe src={src} title={title} loading="lazy" allowFullScreen />
      </ConsentEmbed>
    </div>
  )
}
