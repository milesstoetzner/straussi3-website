import type { ReactNode } from 'react'

export type Lang = 'de' | 'en'

export interface Tutor {
  role: string
  names: string[]
  contactLabel: string
  email: string
  whatsappNote: string
  question: string
  description: ReactNode
}

export interface Content {
  siteName: string
  siteSub: string
  nav: {
    home: string
    hausmeister: string
    wore: string
    wohnen: string
    untermiete: string
  }
  footer: {
    about: string
    subletPage: string
    impressum: string
    datenschutz: string
  }
  consent: {
    mapsNote: string
    mapsButton: string
    sheetsNote: string
    sheetsButton: string
    instagramNote: string
    instagramButton: string
    privacyLink: string
  }
  search: {
    placeholder: string
    noResults: string
  }
  home: {
    title: string
    apply: string
    applyUrl: string
    findUs: string
    address: string
    addressLines: string[]
    about: string
    aboutText: string
    keyData: string
    keyDataItems: string[]
    rent: string
    rentValue: string
    internet: string
    internetText: ReactNode
    equipment: string
    equipmentItems: string[]
    instagram: string
    instagramProfile: string
  }
  hausmeister: {
    title: string
    intro: string
    listHint: string
    contact: string
    name: string
    addressLines: string[]
    email: string
    phone: string
    mobile: string
    fax: string
    officeHours: string
    officeHoursItems: string[]
    findHim: string
    youGet?: string
    sheetTitle: string
  }
  wore: {
    title: string
    whatIs: string
    whatIsText: string
    whoAre: string
    tutors: Tutor[]
    findUs: string
    lend: string
    sheetTitle: string
  }
  wohnen: {
    title: string
    apply: string
    applyUrl: string
    residents: string
    residentsNote: ReactNode
    residentsText: ReactNode
    importantInfo: string
    emergency: string
    application: string
    applicationLead: string
    applicationText: ReactNode
    laufrundeText: string
    sublet: string
    subletText: ReactNode
  }
}
