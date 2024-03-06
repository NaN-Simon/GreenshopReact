import { createSlice } from '@reduxjs/toolkit'

import { fetchPhotos } from '../../api/photos'

import { IRegisterData } from '../../forms/register/type'

export interface IAuthState {
  auth: Omit<IRegisterData, 'passwordConfirmation'>
  photos: any
  status: string
  isLoading: boolean
  error: string | null
}

const initialState: IAuthState = {
  auth: { username: '', email: '', password: '' },
  photos: [],
  status: '',
  isLoading: false,
  error: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload
      console.log(state.auth);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state /* action */) => {
        state.isLoading = true
        state.status = 'loading'
        state.error = ''
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        /* для симуляции async запроса, после получения data от fake-api присваивается mock-data */
        state.photos = action.payload
        state.isLoading = false
        state.status = 'resolved'
        state.error = ''
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.isLoading = false
        state.status = 'error'
        state.error = String(action.payload)
      })
  },
})

// Action creators are generated for each case reducer function
export const { setAuth } = authSlice.actions

export default authSlice.reducer
