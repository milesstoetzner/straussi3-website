import { INSTAGRAM_POSTS, INSTAGRAM_PROFILE } from '../content/instagram'
import { useLanguage } from '../i18n/LanguageContext'
import ConsentEmbed from './ConsentEmbed'

/** Instagram's official post embeds for the posts listed in src/content/instagram.ts, behind a consent button. */
export default function InstagramFeed() {
  const { t } = useLanguage()
  return (
    <>
      {INSTAGRAM_POSTS.length > 0 && (
        <ConsentEmbed
          storageKey="straussi3-consent-instagram"
          note={t.consent.instagramNote}
          button={t.consent.instagramButton}
        >
          <div className="instagram">
            {INSTAGRAM_POSTS.map((code) => (
              <iframe
                key={code}
                className="instagram__post"
                src={`https://www.instagram.com/p/${code}/embed/`}
                title={`Instagram ${code}`}
                loading="lazy"
                allow="encrypted-media"
              />
            ))}
          </div>
        </ConsentEmbed>
      )}
      <p>
        <a href={INSTAGRAM_PROFILE} target="_blank" rel="noreferrer">
          {t.home.instagramProfile}
        </a>
      </p>
    </>
  )
}
