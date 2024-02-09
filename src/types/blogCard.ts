export type IBlogCard = IBlogCardBlock[]
export interface IBlogCardBlock {
  id: number,
  image: string,
  time: string,
  readTime: string,
  title: string,
  purpose: string,
  description: string,
  url: string
}