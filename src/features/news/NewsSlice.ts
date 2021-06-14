import { createSlice } from '@reduxjs/toolkit'

import type { NewsStateType } from './newsTypes'

const InitialState: NewsStateType = []

export const newsSlice = createSlice({
  name: 'news',
  initialState: InitialState,
  reducers: {
    setNews: (state, action) => {
      state = action.payload
    },
  },
})

export const { setNews } = newsSlice.actions

export default newsSlice.reducer