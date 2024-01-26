import { createSlice } from '@reduxjs/toolkit'
import { fetchUsers } from '../../api/users'
import { ICard } from '../../types/card'

import { cards } from '../../mock-data/cards'

export interface IGoodsState {
  goods: ICard[],
  users: any
  status: string
  isLoading: boolean
  error: string | null
}

const initialState: IGoodsState = {
  goods: [],
  users: [],
  status: '',
  isLoading: false,
  error: null,
}

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    test: (state) => {
      console.log(state)
    },
    filterProductsByCategory: (state, action) => {
      state.goods = state.goods.filter((list: ICard) => list.category === action.payload);
    },
    filterProductsBySize: (state, action) => {
      state.goods = state.goods.filter((list: ICard) => list.size === action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.isLoading = true;
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = 'resolved';
        state.error = '';
        /* для симуляции async запроса, после получения data от fake-api присваивается mock-data */
        state.users = action.payload;
        state.goods = cards;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.status = 'error';
        state.error = String(action.payload);
      })
  },
})

// Action creators are generated for each case reducer function
export const { test, filterProductsByCategory, filterProductsBySize } = goodsSlice.actions

export default goodsSlice.reducer

// https://redux-toolkit.js.org/tutorials/quick-start
// https://redux-toolkit.js.org/api/createAsyncThunk#examples
// https://redux-toolkit.js.org/tutorials/rtk-query
// https://redux-toolkit.js.org/api/createslice
// https://redux-toolkit.js.org/usage/migrating-rtk-2
