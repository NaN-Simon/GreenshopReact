import { createSelector } from 'reselect'
import { RootState } from '../store'
import { ICard } from '../../types/card'

// export const selectCategories = createSelector(
//   (state: RootState) => state.goodsReducer.goods,
//   (goods: ICard[]) => {
//     return goods.reduce((acc: { [key: string]: number }, card: ICard) => {
//       acc[card.category] = (acc[card.category] || 0) + 1
//       return acc
//     }, {})
//   }
// )

// export const selectSizes = createSelector(
//   (state: RootState) => state.goodsReducer.goods,
//   (goods: ICard[]) => {
//     return goods.reduce((acc: { [key: string]: number }, card: ICard) => {
//       acc[card.size] = (acc[card.size] || 0) + 1
//       return acc
//     }, {})
//   }
// )
