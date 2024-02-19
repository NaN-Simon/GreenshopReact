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
  rate: number
  countReview: number
}

export interface IPriceOfCard {
  price: ICard['price'];
  currency: ICard['currency'];
  prevPrice?: ICard['prevPrice'];
}

export interface IRateOfCard {
  rate: ICard['rate'];
  countReview: ICard['countReview'];
}

