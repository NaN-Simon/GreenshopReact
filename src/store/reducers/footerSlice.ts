import { createSlice } from '@reduxjs/toolkit'

import { fetchUsers } from '../../api/users'

import  {footerContactMock, footerInfoCardMock, footerLinkMock }  from '../../mock-data/footer/footer'

import { IFooterContact, IFooterInfoCard, IFooterLink } from '../../types/footer'

export interface IFooterState {
  footerInfoCard: IFooterInfoCard | null
  footerContact: IFooterContact | null
  footerLink: IFooterLink | null
  users: any
  status: string
  isLoading: boolean
  error: string | null
}

const initialState: IFooterState = {
  footerInfoCard: null,
  footerContact: null,
  footerLink: null,
  users: [],
  status: '',
  isLoading: false,
  error: null,
}

export const footerSlice = createSlice({
  name: 'footer',
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

        state.footerInfoCard = footerInfoCardMock
        state.footerContact = footerContactMock
        state.footerLink = footerLinkMock
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false
        state.status = 'error'
        state.error = String(action.payload)
      })
  },
})

export default footerSlice.reducer
