import { Link } from 'react-router-dom'
import type { Content } from '../i18n/types'

const SUBLET_URL = 'https://untermiete.straussi3.de/'
const WORE_MAIL = 'wore.str3@gmail.com'

const en: Content = {
  siteName: 'Straußi 3',
  siteSub: 'Dormitory',
  nav: {
    home: 'Dormitory',
    hausmeister: 'Janitor',
    wore: 'Wohnheimsreferat',
    wohnen: 'Living',
    untermiete: 'Subtenancy',
  },
  footer: {
    about: 'About Us',
    subletPage: 'Subletting page',
    sourceCode: 'Source code',
    impressum: 'Impressum',
    datenschutz: 'Datenschutzerklärung',
  },
  consent: {
    mapsNote: 'The map is loaded from Google Maps. This transfers data (e.g. your IP address) to Google.',
    mapsButton: 'Load map',
    sheetsNote: 'The list is loaded from Google Sheets. This transfers data (e.g. your IP address) to Google.',
    sheetsButton: 'Load list',
    instagramNote: 'The posts are loaded from Instagram. This transfers data (e.g. your IP address) to Meta.',
    instagramButton: 'Load Instagram posts',
    privacyLink: 'Privacy policy',
  },
  search: {
    placeholder: 'Search',
    noResults: 'No results',
  },
  home: {
    title: 'Straußi 3',
    apply: 'Apply here!',
    applyUrl: 'https://www.studierendenwerk-stuttgart.de/en/accommodation/online-application',
    findUs: 'You can find the Straußi 3 here',
    address: 'Adress',
    addressLines: ['Campus Vaihingen – Stuttgart', 'Straußäcker III', 'Allmandring 3c-i', '70569 Stuttgart'],
    about: 'Overview',
    aboutText:
      'In Straußi 3 there are both 2-person and 4-person flatshares, but the majority of the apartments are 4-person flatshares. Each apartment is equipped with PVC flooring and central heating, and the 4-person flatshares even have the luxury of two bathrooms per apartment! There is also a lockable bike room in each block and a laundry room with washing machine, dryer and clothesline.',
    keyData: 'Key data',
    keyDataItems: [
      '7 blocks with 12 apartments each (two 2-person and ten 4-person shared apartments)',
      'the 2-person shared flats are also suitable for families',
      '304 rooms in total',
      'room size: 12sqm',
      'Year of construction: 1997',
    ],
    rent: 'Rental prices',
    rentValue: '368–442 € (graduated rent)',
    internet: 'Internet connection',
    internetText: (
      <>
        Each room has a LAN connection, through which the student association Selfnet e.V. operates the internet. For
        7€ a month you can become a{' '}
        <a href="https://www.selfnet.de/" target="_blank" rel="noreferrer">
          passive member
        </a>{' '}
        and use the internet.
      </>
    ),
    equipment: 'Equipment',
    equipmentItems: [
      'room furnished with bed, desk, chair, wardrobe and shelves.',
      'storage rooms in the apartments',
      'one kitchen per apartment',
      'one or two bathrooms per apartment',
      'washing machines and dryers',
      'bicycle rooms',
      'bicycle parking spaces',
    ],
    instagram: 'Instagram',
    instagramProfile: 'Straußi 3 on Instagram',
  },
  hausmeister: {
    title: 'Janitor',
    intro:
      'The janitor is the first contact person if something in your flat-share is broken, does not work properly or causes you other trouble. He can, for example, give you new light bulbs, install a new toilet lid, screw new knobs on the chairs, etc.. However, this only applies to the furnishings that are provided by the Studierendenwerk!',
    listHint: 'Below you will find a list of everything you can get from the janitor.',
    contact: 'Contact',
    name: 'Walter Gräfe',
    addressLines: ['Allmandring 3 C-I', '70569 Stuttgart'],
    email: 'w.graefe@sw-stuttgart.de',
    phone: '+49 711 6876129',
    mobile: '+49 179 6947590',
    fax: '+49 711 6740605',
    officeHours: 'Office hours',
    officeHoursItems: ['Monday-Thursday: 13:30-14:30', 'Friday: 8:00-9:00'],
    findHim: 'You can find the janitor here',
    sheetTitle: 'Haushaltsartikel Hausmeister',
  },
  wore: {
    title: 'WoRe',
    whatIs: 'What is the WoRe?',
    whatIsText:
      'The so called "Wohnheims-Referat" short WoRe can somehow be translated to "dormitory department". It\'s a group of students, also living in Straußi 3, who are voluntarily responsible to offer some special things for our dormitory community. Most dormitories got their own WoRe.',
    whoAre: 'Who are our WoRe tutors?',
    tutors: [
      {
        role: 'Board Members',
        names: ['Larissa Angerer', 'Alexander Schäfer'],
        contactLabel: 'contact',
        email: 'vorstand.str3@gmail.com',
        whatsappNote: 'you can also find their phone numbers in the description of the WhatsApp group',
        question: 'What do the board members of the WoRe do?',
        description:
          'Our two board members are the interface between the janitor / Studierendenwerk and the students. If you have questions, suggestions or problems, feel free to write an email!',
      },
      {
        role: 'Events',
        names: ['Duru Atanay', 'Marjan Jedi'],
        contactLabel: 'contact',
        email: WORE_MAIL,
        whatsappNote: 'you can also find their phone numbers in the description of the WhatsApp group',
        question: 'What do the event tutors do?',
        description:
          'The event tutors take care of all events around Straußi 3. This includes planning and organizing parties and other events, so that no resident wastes away behind a pile of books ;). Sometimes we also swing the wooden spoon, so that your physical well-being is taken care of or we distribute presents for the children in the dormitory as Santa Clauses. The event tutorial is also responsible for organizing the regular bulky waste collection (usually at the end of the semester).',
      },
      {
        role: 'Laufrunde',
        names: ['Nick Stier', 'Madeleine Reichle'],
        contactLabel: 'contact',
        email: WORE_MAIL,
        whatsappNote: 'you can also find their phone numbers in the description of the WhatsApp group',
        question: 'What do the "Laufrunde" tutors do?',
        description:
          'The task of our Laufrunde tutors is to organize, carry out and evaluate the Laufrunde. Maybe you have already participated in one of these and ended up in the WG of your choice.',
      },
      {
        role: 'Sublet',
        names: ['Michael Großkopf', 'Priyosmita Kar'],
        contactLabel: 'contact',
        email: WORE_MAIL,
        whatsappNote: 'you can also find their phone numbers in the description of the WhatsApp group',
        question: 'What do the sublet tutors do?',
        description: (
          <>
            <p>
              The sublet tutors are responsible for the sublease in Straußäcker 3. We will conclude sublease contracts
              with you and help you to find a main tenant or a subtenant. If you want to sublet your room or if you are
              looking for a room for subletting, please register on our{' '}
              <a href={SUBLET_URL} target="_blank" rel="noreferrer">
                subletting page
              </a>
              . There you will find all important information about the process and the general conditions.
            </p>
            <p>If you have any questions or would like to sign a sublease directly, please contact us!</p>
          </>
        ),
      },
      {
        role: 'IT',
        names: ['Maxim Beller'],
        contactLabel: 'contact',
        email: WORE_MAIL,
        whatsappNote: 'you can also find her phone number in the description of the WhatsApp group',
        question: 'What does the IT tutor do?',
        description: (
          <>
            <p>
              The main task of the IT tutor is to take care of our two websites, the <Link to="/">homepage</Link> and the{' '}
              <a href={SUBLET_URL} target="_blank" rel="noreferrer">
                sublease page
              </a>
              , and to make sure that everything runs smoothly and that the websites are up to date. In addition, IT is
              responsible for communicating with Selfnet.
            </p>
            <p>
              Forgot your password and username from the{' '}
              <a href={SUBLET_URL} target="_blank" rel="noreferrer">
                sublease site
              </a>
              ?
              <br />
              One of our websites is down?
              <br />
              Then feel free to contact our current IT tutor!
            </p>
          </>
        ),
      },
      {
        role: 'Inventory',
        names: ['Aaron Mesfine'],
        contactLabel: 'contact',
        email: WORE_MAIL,
        whatsappNote: 'you can also find his phone number in the description of the WhatsApp group',
        question: 'What does the inventory tutor do?',
        description:
          'We as a dormitory offer you the possibility to borrow things from us. From ironing boards to beer pong tables to popcorn machines, we have it all. If you want to borrow something you can come to me.',
      },
      {
        role: 'Garden',
        names: ['Maximilian Kemmer', 'Sandra Löffler'],
        contactLabel: 'contact',
        email: WORE_MAIL,
        whatsappNote: 'you can also find their phone numbers in the description of the WhatsApp group',
        question: 'What do the garden tutors do?',
        description: (
          <>
            <p>
              The garden tutors take care of the five raised beds in the middle Straußi aisle near Block E. We sow,
              plant, water and thus provide the Straußi 3 residents with fresh lettuce, herbs, vegetables and fruit
              seasonally.
            </p>
            <p>
              You want to garden yourself? No problem, there is always a free space in the raised beds. The best thing
              is to mark your plants as private and inform us briefly about it.
            </p>
          </>
        ),
      },
    ],
    findUs: 'You can find the WoRe here',
    lend: 'Things to lend',
    sheetTitle: 'Inventory List - public',
  },
  wohnen: {
    title: 'Living',
    apply: 'Apply here!',
    applyUrl: 'https://www.studierendenwerk-stuttgart.de/en/accommodation/online-application',
    residents: 'Residents',
    residentsNote: (
      <>
        Be sure to upload your current academic transcript to the{' '}
        <a
          href="https://www.studierendenwerk-stuttgart.de/wohnen/mieterportal/login-bereich-mieterportal"
          target="_blank"
          rel="noreferrer"
        >
          tenant portal
        </a>
        !
      </>
    ),
    residentsText: (
      <>
        The Straußi 3 is administered by the Studierendenwerk Stuttgart, the responsible person is{' '}
        <a
          href="https://www.studierendenwerk-stuttgart.de/en/accommodation/dormitories/straussaecker-iii#panel-7877-2"
          target="_blank"
          rel="noreferrer"
        >
          Amelie Hochmuth
        </a>
        . You can contact her if you want to extend your contract or something similar.
      </>
    ),
    importantInfo: 'Important info',
    emergency: 'Emergency number of the Studierendenwerk for technical faults: +49711 955918-950',
    application: 'Application and "Laufrunde"',
    applicationLead: 'Looking for a room in Straußi 3? Good decision!',
    applicationText: (
      <>
        If you want to move into Straußi 3 permanently (until your residency period of three years is over), then apply{' '}
        <a
          href="https://www.studierendenwerk-stuttgart.de/en/accommodation/online-application"
          target="_blank"
          rel="noreferrer"
        >
          here at Studierendenwerk
        </a>
        .
      </>
    ),
    laufrundeText:
      'Straußi 3 is one of the few dorms to offer a Laufrunde. Once you are sure you have a place with us, you will receive an email inviting you to join our Laufrunde. During the Laufrunde, both the WGs where a room is newly occupied and the people who are newly moving in have the opportunity to get to know each other a bit. So you walk from WG to WG - hence the name "Laufrunde". At the end of the Laufrunde, both the WGs and you can hand in a piece of paper with a ranking. The WoRe evaluates the results to make sure that each WG gets suitable new residents.',
    sublet: 'Sublet',
    subletText: (
      <>
        If you are only looking for a temporary room, please visit our subletting page{' '}
        <a href={SUBLET_URL} target="_blank" rel="noreferrer">
          here
        </a>{' '}
        or send an email to our tutors, <a href={`mailto:${WORE_MAIL}`}>{WORE_MAIL}</a>.
      </>
    ),
  },
}

export default en
