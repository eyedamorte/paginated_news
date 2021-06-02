import { createSlice } from '@reduxjs/toolkit'

import type { UserStateType } from './userTypes'

const InitialState: UserStateType = {
    users: []
}

export const usersSlice = createSlice({
  name: 'users',
  initialState: InitialState,
  reducers: {
    setUsers: (state, action) => {
      state = action.payload
    },
  },
})

export const { setUsers } = usersSlice.actions

export default usersSlice.reducer