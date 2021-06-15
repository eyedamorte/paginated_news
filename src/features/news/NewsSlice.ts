import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";


import type { NewsStateType } from './newsTypes'

const ReducerName = 'news'

const InitialState: NewsStateType = {
  news: []
}

export const getNewsThunk = createAsyncThunk(`${ReducerName}/getNews`, async (params: any) => {
  const response = await axios.get(
    'https://newsapi.org/v2/everything', { params }
  )
  return response.data.articles
})

export const newsSlice = createSlice({
  name: ReducerName,
  initialState: InitialState,

  reducers: {
    setNews: (state, action) => {
      state.news = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getNewsThunk.fulfilled, (state, action) => {
      state.news = action.payload
    })
  }
})

export const { setNews } = newsSlice.actions

export default newsSlice.reducer