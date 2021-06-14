import { combineReducers, configureStore } from '@reduxjs/toolkit'
import filtersReducer from './features/filters/FiltersSlice'
import newsReducer from './features/news/NewsSlice'

const RootReducer = combineReducers({
    filters: filtersReducer,
    news: newsReducer
})

export type RootReducerType = ReturnType<typeof RootReducer>

const Store = configureStore({
  reducer: RootReducer
})

export default Store