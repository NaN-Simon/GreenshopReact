import { createSlice } from '@reduxjs/toolkit'

import { fetchPhotos } from '../../api/photos'

import { IRegisterData } from '../../types/auth'

import { userList } from '../../mock-data/auth/userList'

export interface IAuthState {
  authData: IRegisterData | null
  registeredUsers: IRegisterData[]
  photos: any
  status: string
  isAuthorized: boolean
  isLoading: boolean
  isValidLogin: boolean | null
  isValidRegister: boolean | null
  error: string | null
  temp?: any
}

const initialState: IAuthState = {
  authData: null,
  registeredUsers: userList,
  photos: [],
  status: '',
  isAuthorized: false,
  isLoading: false,
  isValidLogin: null,
  isValidRegister: null,
  error: null,
  temp: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerValidation: (state, action) => {
      state.authData = action.payload
      const username = action.payload.username

      const isUsernameInRegisteredUsers = state.registeredUsers.some(
        (user) => user.username === username
      )

      if (isUsernameInRegisteredUsers) {
        state.error = 'User already exists'
      } else {
        state.registeredUsers.push(action.payload)
        localStorage.setItem('authData', JSON.stringify(action.payload))
        state.isValidRegister = true
      }
    },
    registerAuth: (state) => {
      state.isAuthorized = true
      state.isValidRegister = null
      state.error = null
    },
    loginValidation: (state, action) => {
      const authData = action.payload
      const email = authData.email
      const password = authData.password

      const registeredUsers = state.registeredUsers

      for (let i = 0; i < registeredUsers.length; i++) {
        const item = registeredUsers[i]
        const isExist = item.email === email && item.password === password
        if (isExist) {
          authData.username = item.username
          state.authData = authData
          localStorage.setItem('authData', JSON.stringify(authData))
          state.isValidLogin = true
          break
        }
        if (!isExist) {
          state.error = 'User is not found'
        }
      }
      // return true
    },
    loginAuth: (state) => {
      state.isAuthorized = true
      state.isValidLogin = null
      state.error = null
    },
    removeAuth: (state) => {
      state.authData = null
      localStorage.removeItem('authData')
      state.isAuthorized = false
    },
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

        /* авторизация активного пользователя */
        const data = localStorage.getItem('authData')
        state.authData = data ? JSON.parse(data) : {}
        state.isAuthorized = data ? true : false

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
export const {
  registerValidation,
  registerAuth,
  removeAuth,
  loginValidation,
  loginAuth,
} = authSlice.actions

export default authSlice.reducer
