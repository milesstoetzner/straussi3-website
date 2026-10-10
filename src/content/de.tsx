import { Link } from 'react-router-dom'
import type { Content } from '../i18n/types'

const SUBLET_URL = 'https://untermiete.straussi3.de/'
const WORE_MAIL = 'wore.str3@gmail.com'

const de: Content = {
  siteName: 'Straußi 3',
  siteSub: 'Wohnheim',
  apply: {
    label: 'Hier bewerben!',
    url: 'https://www.studierendenwerk-stuttgart.de/wohnen/online-bewerbung',
  },
  nav: {
    home: 'Wohnheim',
    hausmeister: 'Hausmeister',
    wore: 'Wohnheimsreferat',
    wohnen: 'Wohnen',
    untermiete: 'Untermiete',
  },
  footer: {
    about: 'Über uns',
    subletPage: 'Untermietenseite',
    sourceCode: 'Quellcode',
    impressum: 'Impressum',
    datenschutz: 'Datenschutzerklärung',
  },
  consent: {
    mapsNote: 'Die Karte wird von Google Maps geladen. Dabei werden Daten (z. B. deine IP-Adresse) an Google übertragen.',
    mapsButton: 'Karte laden',
    sheetsNote: 'Die Liste wird von Google Tabellen geladen. Dabei werden Daten (z. B. deine IP-Adresse) an Google übertragen.',
    sheetsButton: 'Liste laden',
    instagramNote: 'Die Beiträge werden von Instagram geladen. Dabei werden Daten (z. B. deine IP-Adresse) an Meta übertragen.',
    instagramButton: 'Instagram-Beiträge laden',
    privacyLink: 'Datenschutzerklärung',
  },
  search: {
    placeholder: 'Suchen',
    noResults: 'Keine Treffer',
  },
  home: {
    title: 'Das Straußi 3',
    findUs: 'Hier findest du das Straußi 3',
    address: 'Adresse',
    addressLines: ['Campus Vaihingen – Stuttgart', 'Straußäcker III', 'Allmandring 3c-i', '70569 Stuttgart'],
    about: 'Überblick',
    aboutText:
      'Im Straußi 3 gibt es sowohl 2er- als auch 4er- WGs, der Großteil der Wohnungen sind jedoch 4er-WGs. Jede Wohnung ist mit PVC-Boden und Zentralheizung ausgestattet und die 4er-WGs haben sogar den Luxus von je zwei Bädern pro Wohnung! Außerdem gibt es in jedem Block einen abschließbaren Fahrradraum und einen Waschraum mit Waschmaschine, Trockner und Wäscheleine.',
    keyData: 'Die wichtigsten Daten',
    keyDataItems: [
      '7 Blocks mit je 12 Wohnungen (zwei 2er- und zehn 4er-WGs)',
      'die 2er-WGs eignen sich auch für Familien',
      'insgesamt 304 Zimmer',
      'Zimmergröße: 12qm',
      'Baujahr: 1997',
    ],
    rent: 'Mietpreise',
    rentValue: '368–442 € (Staffelmiete)',
    internet: 'Internetanschluss',
    internetText: (
      <>
        Jedes Zimmer verfügt über einen LAN-Anschluss, über den der studentische Verein Selfnet e.V. das Internet
        betreibt. Für 9,50€ im Monat könnt ihr{' '}
        <a href="https://www.selfnet.de/" target="_blank" rel="noreferrer">
          passives Mitglied werden
        </a>{' '}
        und das Internet nutzen.
      </>
    ),
    equipment: 'Ausstattung',
    equipmentItems: [
      'Zimmer möbliert mit Bett, Schreibtisch, Stuhl, Schrank und Regal',
      'Abstell- bzw. Lagerräume in den Wohnungen',
      'eine Küche pro Wohnung',
      'ein bis zwei Bäder pro Wohnung',
      'Waschmaschinen und Trockner',
      'Fahrradräume',
      'Fahrradstellplätze',
    ],
    instagram: 'Instagram',
    instagramProfile: 'Straußi 3 auf Instagram',
  },
  hausmeister: {
    title: 'Hausmeister',
    intro:
      'Der Hausmeister ist der erste Ansprechpartner, wenn in eurer WG etwas kaputt ist, nicht richtig funktioniert oder euch sonstigen Ärger bereitet. Er kann euch dann zum Beispiel neue Glühbirnen geben, einen neuen Klodeckel montieren, neue Noppen an die Stühle schrauben, etc.. Das gilt allerdings nur für die Einrichtungsgegenstände, die vom Studierendenwerk gestellt sind!',
    listHint: 'Weiter unten findet ihr eine Liste mit allem, was man beim Hausmeister bekommt.',
    contact: 'Kontakt',
    name: 'Walter Gräfe',
    addressLines: ['Allmandring 3 C-I', '70569 Stuttgart'],
    email: 'w.graefe@sw-stuttgart.de',
    phone: '+49 711 6876129',
    mobile: '+49 179 6947590',
    fax: '+49 711 6740605',
    officeHours: 'Sprechzeiten',
    officeHoursItems: ['Mo-Do: 13:30-14:30', 'Fr: 8:00-9:00'],
    findHim: 'Hier findet ihr den Hausmeister',
    youGet: 'Das bekommt ihr alles beim Hausmeister',
    sheetTitle: 'Haushaltsartikel Hausmeister',
  },
  wore: {
    title: 'WoRe',
    whatIs: 'Was ist das WoRe?',
    whatIsText:
      'Ein sogenanntes Wohnheims-Referat, kurz WoRe o.Ä., gibt es an fast allen Wohnheimen in Stuttgart, ist aber überall ein bisschen anders. Es handelt sich um eine Gruppe von Studenten, die auch im Wohnheim wohnen und sich ehrenamtlich um verschiedene Sachen kümmern.',
    whoAre: 'Wer sind unsere WoRe-Tutoren?',
    tutors: [
      {
        role: 'Vorstand',
        names: ['Larissa Angerer', 'Alexander Schäfer'],
        contactLabel: 'Kontakt',
        email: 'vorstand.str3@gmail.com',
        whatsappNote: 'in unserer WhatsApp-Gruppe könnt ihr auch die Handynummern finden',
        question: 'Was macht man als Vorstand vom WoRe?',
        description:
          'Unsere zwei Vorstände sind die Schnittstelle zwischen dem Hausmeister / Studierendenwerk und den Studierenden. Wenn ihr Fragen, Anregungen oder Probleme habt, schreibt gerne eine Mail!',
      },
      {
        role: 'Veranstaltung',
        names: ['Duru Atanay', 'Marjan Jedi'],
        contactLabel: 'Kontakt',
        email: WORE_MAIL,
        whatsappNote: 'in unserer WhatsApp-Gruppe könnt ihr auch die Handynummern finden',
        question: 'Was macht man als Veranstaltungstutor?',
        description:
          'Wir Veranstaltungstutoren kümmern uns um alle Veranstaltungen rund ums Straußi 3. Dazu gehören das Planen und das Veranstalten von Festen und anderen Events, damit hier kein Bewohner hinter einem Bücherstapel verkümmert ;). Manchmal schwingen wir dabei auch den Kochlöffel, damit für euer leibliches Wohl gesorgt ist oder verteilen als NikoläusInnen Geschenke für die Kinder im Wohnheim. Das Veranstaltungs-Tutorium ist außerdem für die Organisation der regelmäßig stattfindenden Sperrmüllaktion (meist zum Semesterwechsel) zuständig.',
      },
      {
        role: 'Laufrunde',
        names: ['Nick Stier', 'Madeleine Reichle'],
        contactLabel: 'Kontakt',
        email: WORE_MAIL,
        whatsappNote: 'in unserer WhatsApp-Gruppe könnt ihr auch die Handynummern finden',
        question: 'Was macht man als Laufrundentutor?',
        description:
          'Die Aufgabe unserer Laufrundentutoren ist es, die Laufrunden zu organisieren, durchzuführen und auszuwerten. Vielleicht hast du sogar schon selbst an einer unserer Laufrunden teilgenommen und bist so in der WG deiner Wahl gelandet.',
      },
      {
        role: 'Untermiete',
        names: ['Michael Großkopf', 'Priyosmita Kar'],
        contactLabel: 'Kontakt',
        email: WORE_MAIL,
        whatsappNote: 'in unserer WhatsApp-Gruppe könnt ihr auch die Handynummern finden',
        question: 'Was macht man als Sprechstundentutor?',
        description: (
          <>
            <p>
              Die Sprechstundentutoren sind für die Untermiete im Straußäcker 3 zuständig. Wir schließen mit dir die
              Untermietverträge ab und helfen dir bei der Suche nach einem Hauptmieter*in bzw. einem Untermieter*in. Wenn
              du dein Zimmer untervermieten möchtest oder ein Zimmer zur Untermiete suchst, dann registriere dich auf
              unserer{' '}
              <a href={SUBLET_URL} target="_blank" rel="noreferrer">
                Untermietenseite
              </a>
              . Dort findest du auch alle wichtigen Informationen zum Ablauf und den Rahmenbedingungen.
            </p>
            <p>Falls du Fragen hast oder direkt einen Untermietvertrag abschließen möchtest, melde dich bei uns!</p>
          </>
        ),
      },
      {
        role: 'IT',
        names: ['Maxim Beller'],
        contactLabel: 'Kontakt',
        email: WORE_MAIL,
        whatsappNote: 'in unserer WhatsApp-Gruppe könnt ihr auch die Handynummer finden',
        question: 'Was macht man als IT-Tutor?',
        description: (
          <>
            <p>
              Die Hauptaufgabe der IT ist es, sich um unsere zwei Websites, die <Link to="/">Homepage</Link> und die{' '}
              <a href={SUBLET_URL} target="_blank" rel="noreferrer">
                Untermietenseite
              </a>
              , zu kümmern und hier dafür zu sorgen, dass alles rund läuft und die Websites auf dem aktuellen Stand sind.
              Außerdem ist die IT für die Kommunikation mit Selfnet zuständig.
            </p>
            <p>
              Ihr habt euer Passwort und den Benutzernamen von der{' '}
              <a href={SUBLET_URL} target="_blank" rel="noreferrer">
                Untermietenseite
              </a>{' '}
              vergessen?
              <br />
              Eine unserer Websites ist down?
              <br />
              Dann kontaktiert gerne unseren aktuellen IT-Tutor!
            </p>
          </>
        ),
      },
      {
        role: 'Inventar',
        names: ['Aaron Mesfine'],
        contactLabel: 'Kontakt',
        email: WORE_MAIL,
        whatsappNote: 'in unserer WhatsApp-Gruppe könnt ihr auch die Handynummer finden',
        question: 'Was macht man als Inventartutor?',
        description:
          'Wir als Wohnheim bieten euch die Möglichkeit, Sachen von uns auszuleihen. Vom Bügelbrett über Bierpong-Tische bis zur Popcorn-Maschine haben wir alles da. Wenn ihr etwas ausleihen möchtet, könnt ihr gerne auf unseren Inventartutor Stefan zukommen. Bitte meldet euch mindestens 3 Tage vorher wenn Ihr etwas ausleihen wollt. Wenn ihr euch zu spät meldet, können wir nicht garantieren, dass sich rechtzeitig jemamd bei euch zurückmeldet.',
      },
      {
        role: 'Garten',
        names: ['Maximilian Kemmer', 'Sandra Löffler'],
        contactLabel: 'Kontakt',
        email: WORE_MAIL,
        whatsappNote: 'in unserer WhatsApp-Gruppe könnt ihr auch die Handynummern finden',
        question: 'Was macht man als Gartentutor?',
        description: (
          <>
            <p>
              Die Gartentutoren kümmern sich um die fünf Hochbete im mittleren Straußi-Gang bei Block E. Wir sähen,
              pflanzen, gießen und versorgen somit die Straußi-3-Bewohner saisonabhängig mit frischem Salat, Kräutern,
              Gemüse und Obst.
            </p>
            <p>
              Du möchtest selbst gärtnern? Kein Problem, in den Hochbeeten ist immer ein Plätzchen frei. Am besten
              kennzeichnest du deine Pflanzen als Privat und informierst uns kurz darüber.
            </p>
          </>
        ),
      },
    ],
    findUs: 'Hier findet ihr das WoRe',
    lend: 'Das könnt ihr beim WoRe ausleihen',
    sheetTitle: 'Inventory List - public',
  },
  wohnen: {
    title: 'Wohnen',
    residents: 'Bewohner',
    residentsNote: (
      <>
        Achtet darauf, dass ihr eure aktuelle Studienbescheinigung im{' '}
        <a
          href="https://www.studierendenwerk-stuttgart.de/wohnen/mieterportal/login-bereich-mieterportal"
          target="_blank"
          rel="noreferrer"
        >
          Mieterportal
        </a>{' '}
        hochladet!
      </>
    ),
    residentsText: (
      <>
        Das Straußi 3 wird vom Studierendenwerk Stuttgart verwaltet, die zuständige Sachbearbeiterin ist{' '}
        <a
          href="https://www.studierendenwerk-stuttgart.de/wohnen/wohnanlagen/straussaecker-iii#panel-4969-2"
          target="_blank"
          rel="noreferrer"
        >
          Amelie Hochmuth
        </a>
        . An sie könnt ihr euch wenden, wenn ihr z.B. euren Vertrag verlängern wollt oder ähnliches.
      </>
    ),
    importantInfo: 'Wichtige Infos',
    emergency: 'Notfallnummer des Studierendenwerks bei technischen Störungen: +49711 955918-950',
    application: 'Bewerbung und Laufrunde',
    applicationLead: 'Du suchst ein Zimmer im Straußi 3? Gute Entscheidung!',
    applicationText: (
      <>
        Falls du dauerhaft (bzw. bis deine Wohnzeit vom drei Jahren vorbei ist) im Straußi 3 einziehen willst, dann
        bewirb dich{' '}
        <a href="https://www.studierendenwerk-stuttgart.de/wohnen/online-bewerbung" target="_blank" rel="noreferrer">
          hier beim Studierendenwerk
        </a>
        .
      </>
    ),
    laufrundeText:
      'Als eines der wenigen Wohnheime bietet das Straußi 3 eine Laufrunde an. Sobald du sicher einen Platz bei uns hast, bekommst du eine E-Mail, in der wir dich zu unserer Laufrunde einladen. Während der Laufrunde haben sowohl die WGs, bei denen ein Zimmer neu besetzt wird, als auch die Menschen, die neu einziehen, die Möglichkeit, sich ein bisschen kennenzulernen. Du läufst also von WG zu WG - daher der Name "Laufrunde". Am Ende der Laufrunde könne sowohl die WGs als auch du einen Zettel mit Ranking abgeben. Das WoRe wertet die Ergebnisse aus, um sicherzustellen, dass jede WG passende neue Bewohner*innen bekommt.',
    sublet: 'Untermiete',
    subletText: (
      <>
        Falls du nur temporär ein Zimmer suchst, kommst du{' '}
        <a href={SUBLET_URL} target="_blank" rel="noreferrer">
          hier zu unserer Untermietenseite
        </a>{' '}
        oder du schreibst unseren Tutoren eine E-Mail, <a href={`mailto:${WORE_MAIL}`}>{WORE_MAIL}</a>.
      </>
    ),
  },
}

export default de
