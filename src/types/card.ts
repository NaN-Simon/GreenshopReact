export interface ICard {
  id: number
  image?: string
  name: string
  category: string
  size: string
  price: number
  currency: string
  prevPrice?: number
  tags?: string[]
  isNew?: boolean
}
