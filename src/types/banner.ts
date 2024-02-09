export type IBannerInfo = IBannerInfoBlock[]

export interface IBannerInfoBlock {
  id: number
  header: string
  title: string
  image: string
  link: string
}[]

export interface IBannerAside {
  header: string
  title: string
  image: string
  link: string
}
