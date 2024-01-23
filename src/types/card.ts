export interface ICard {
  id: number
  image?: string
  name: string
  category: string
  size: string
  price: string
  currency: string
  prevPrice?: string
  tags?: string[]
}
