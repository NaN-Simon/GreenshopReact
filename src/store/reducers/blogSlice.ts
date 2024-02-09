import { createSlice } from '@reduxjs/toolkit'

import { fetchUsers } from '../../api/users'

import { blogCardsData } from '../../mock-data/blog/blog-cards'

import { IBlogCard } from '../../types/blogCard'

export interface IBlogState {
  blogCard: IBlogCard | null
  users: any
  status: string
  isLoading: boolean
  error: string | null
}

const initialState: IBlogState = {
  blogCard: null,
  users: [],
  status: '',
  isLoading: false,
  error: null,
}

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, /* action */) => {
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

        state.blogCard = blogCardsData
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false
        state.status = 'error'
        state.error = String(action.payload)
      })
  },
})

export default blogSlice.reducer