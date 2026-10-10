import { useLanguage } from '../i18n/LanguageContext'
import ConsentEmbed from './ConsentEmbed'

interface SheetEmbedProps {
  sheetId: string
  title: string
}

export default function SheetEmbed({ sheetId, title }: SheetEmbedProps) {
  const { t } = useLanguage()
  const viewUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/edit`
  const embedUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/htmlembed`
  return (
    <div className="sheet">
      <ConsentEmbed storageKey="straussi3-consent-sheets" note={t.consent.sheetsNote} button={t.consent.sheetsButton} className="sheet__consent">
        <iframe className="sheet__frame" src={embedUrl} title={title} loading="lazy" />
      </ConsentEmbed>
      <a className="sheet__link" href={viewUrl} target="_blank" rel="noreferrer">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 12h8v2H8zm0 4h8v2H8z"
          />
        </svg>
        {title}
      </a>
    </div>
  )
}
