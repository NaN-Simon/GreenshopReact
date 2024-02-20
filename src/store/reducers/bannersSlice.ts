import { createSlice } from '@reduxjs/toolkit'

import { fetchUsers } from '../../api/users'

import { bannerAside, bannerInfo, bannerMain } from '../../mock-data/banner/banner'

import { IBannerAside, IBannerInfo, IBannerMain } from '../../types/banner'

export interface IFooterState {
  bannerInfo: IBannerInfo | null
  bannerAside: IBannerAside | null
  bannerMain: IBannerMain | null
  users: any
  status: string
  isLoading: boolean
  error: string | null
}

const initialState: IFooterState = {
  bannerInfo: null,
  bannerAside: null,
  bannerMain: null,
  users: [],
  status: '',
  isLoading: false,
  error: null,
}

export const bannersSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.isLoading = true
        state.status = 'loading'
        state.error = ''
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false
        state.status = 'resolved'
        state.error = ''
        /* для симуляции async запроса, после получения data от fake-api присваивается mock-data */
        state.users = action.payload
        state.bannerInfo = bannerInfo
        state.bannerAside = bannerAside
        state.bannerMain = bannerMain
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false
        state.status = 'error'
        state.error = String(action.payload)
      })
  },
})

export default bannersSlice.reducer