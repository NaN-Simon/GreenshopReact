import { createSlice } from '@reduxjs/toolkit'
// import { useSelector } from 'react-redux'

import { fetchUsers } from '../../api/users'

import { cards } from '../../mock-data/main/cards'

import { ICard } from '../../types/card'
// import { selectCategories } from '../selectors/selectGoods'

export interface IGoodsState {
  goods: ICard[]
  goodsCategories: Record<string, number>
  goodsSizes: Record<string, number>
  goodsMinPrice: number
  goodsMaxPrice: number
  goodsPriceRange: [number, number]
  users: any
  status: string
  isLoading: boolean
  error: string | null
}

const initialState: IGoodsState = {
  goods: [],
  users: [],
  goodsCategories: {},
  goodsSizes: {},
  goodsMinPrice: 0,
  goodsMaxPrice: 0,
  goodsPriceRange: [0, 1],
  status: '',
  isLoading: false,
  error: null,
}

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    filterProductsByCategory: (state, action) => {
      state.goods = cards.filter(
        (list: ICard) => list.category === action.payload
      )
    },
    filterProductsBySize: (state, action) => {
      state.goods = cards.filter((list: ICard) => list.size === action.payload)
    },
    filterProductsByNew: (state, action) => {
      state.goods = cards.filter((list: ICard) => list.isNew === action.payload)
    },
    filterProductsBySale: (state) => {
      state.goods = cards.filter((list: ICard) => list.prevPrice)
    },
    filterProductsByAll: (state) => {
      state.goods = cards
    },
    filterRangeByPrice: (state, action) => {
      state.goods = cards.filter(
        (list: ICard) =>
          list.price >= action.payload[0] && list.price <= action.payload[1]
      )
    },
    sortProductsByNameAZ: (state) => {
      state.goods = [...cards].sort((a, b) => (a.name > b.name ? 1 : -1))
    },
    sortProductsByNameZA: (state) => {
      state.goods = [...cards].sort((a, b) => (a.name < b.name ? 1 : -1))
    },
    sortProductsByPriceFromDownToUp: (state) => {
      state.goods = [...cards].sort((a, b) => (a.price > b.price ? 1 : -1))
    },
    sortProductsByPriceFromUpToDown: (state) => {
      state.goods = [...cards].sort((a, b) => (a.price < b.price ? 1 : -1))
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state /* action */) => {
        state.isLoading = true
        state.status = 'loading'
        state.error = ''
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        /* для симуляции async запроса, после получения data от fake-api присваивается mock-data */
        state.users = action.payload

        state.goods = cards

        state.goodsCategories = cards.reduce(
          (acc: { [key: string]: number }, card: ICard) => {
            acc[card.category] = (acc[card.category] || 0) + 1
            return acc
          },
          {}
        )

        state.goodsSizes = cards.reduce(
          (acc: { [key: string]: number }, card: ICard) => {
            acc[card.size] = (acc[card.size] || 0) + 1
            return acc
          },
          {}
        )
        const minPrice = cards.reduce(
          (minPrice: number, card: ICard) => Math.min(minPrice, card.price),
          Number.MAX_VALUE
        )
        const maxPrice = cards.reduce(
          (maxPrice: number, card: ICard) => Math.max(maxPrice, card.price),
          Number.MIN_VALUE
        )

        state.goodsMinPrice = minPrice
        state.goodsMaxPrice = maxPrice

        state.goodsPriceRange = [state.goodsMinPrice, state.goodsMaxPrice]

        state.isLoading = false
        state.status = 'resolved'
        state.error = ''
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false
        state.status = 'error'
        state.error = String(action.payload)
      })
  },
})

// Action creators are generated for each case reducer function
export const {
  filterProductsByCategory,
  filterProductsBySize,
  filterProductsByNew,
  filterProductsBySale,
  filterProductsByAll,
  filterRangeByPrice,
  sortProductsByNameAZ,
  sortProductsByNameZA,
  sortProductsByPriceFromDownToUp,
  sortProductsByPriceFromUpToDown,
} = goodsSlice.actions

export default goodsSlice.reducer
