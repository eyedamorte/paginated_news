import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice';
import usersReducer from './features/layout/usersSlice';

const RootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer
})

export type RootReducerType = ReturnType<typeof RootReducer>

const Store = configureStore({
  reducer: RootReducer
})

export default Store