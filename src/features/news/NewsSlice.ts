import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";


import type { NewsStateType } from './newsTypes'

const ReducerName = 'news'

const InitialState: NewsStateType = {
  news: [],
  isPending: false
}

export const getNewsThunk = createAsyncThunk(`${ReducerName}/getNews`, async (params: any) => {
  const response = await axios.get(
    'https://newsapi.org/v2/everything', {
      params: {
        ...params, sortBy: 'publishedAt',
        apiKey: 'eed81886b1b8427d8f75b1aec5837517'
      }
    }
  )
  return response.data.articles
})

export const newsSlice = createSlice({
  name: ReducerName,
  initialState: InitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getNewsThunk.pending, (state, action) => {
      state.isPending = true
    })
    builder.addCase(getNewsThunk.fulfilled, (state, action) => {
      state.news = action.payload
      state.isPending = false
    })
    builder.addCase(getNewsThunk.rejected, (state, action) => {
      state.isPending = false
    })
  }
})


export default newsSlice.reducer