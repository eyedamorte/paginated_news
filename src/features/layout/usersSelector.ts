import { createSelector } from '@reduxjs/toolkit'

import type { UserStateType } from './userTypes';
import type { RootReducerType } from '../../store'

export const getUsers = createSelector<RootReducerType, UserStateType['users'], UserStateType['users']>(
    state => state.users.users,
    value => value
)

