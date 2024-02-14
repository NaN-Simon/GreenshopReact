import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IPhotos } from './types'

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message
  return String(error)
}

export const fetchPhotos = createAsyncThunk(
  'photos/fetchPhotos',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IPhotos[]>(
        'https://jsonplaceholder.typicode.com/photos?_limit=19'
      )
      return response.data
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(getErrorMessage(error))
    }
  }
)
