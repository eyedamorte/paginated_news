import { createSlice } from '@reduxjs/toolkit'

import type { FiltersStateType } from './filtersTypes'

const InitialState: FiltersStateType = {
    search: ''
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: InitialState,
  reducers: {
    updateSearch: (state, action) => {
      state.search = action.payload
    },
    refreshSearch: (state) => {
      state.search = ''
    },
    refreshFilters: (state) => {
      state = InitialState
    },
  },
})

export const { updateSearch, refreshSearch, refreshFilters } = filtersSlice.actions

export default filtersSlice.reducer