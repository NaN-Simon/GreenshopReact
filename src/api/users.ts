import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ICard } from '../types/card'

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message
  return String(error)
}

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<ICard[]>(
        'https://jsonplaceholder.typicode.com/users'
      )
      return response.data
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(getErrorMessage(error))
    }
  }
)
