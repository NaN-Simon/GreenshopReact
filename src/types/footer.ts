export interface IFooterContact {
  location: string
  email: string
  phoneNumber: string
}

export type IFooterLink = IFooterLinkBlock[]

export interface IFooterLinkBlock {
  header: string
  link: {
    title: string
    link: string
  }[]
}

export type IFooterInfoCard = IFooterInfoCardBlock[]

export interface IFooterInfoCardBlock {
  id: number
  image: string
  title: string
  description: string
}
