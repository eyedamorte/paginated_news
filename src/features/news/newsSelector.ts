import { createSelector } from '@reduxjs/toolkit'

import type { NewsStateType } from './newsTypes';
import type { RootReducerType } from '../../store'

export const getNewsList = createSelector<RootReducerType, NewsStateType, NewsStateType>(
    state => state.news,
    value => value
)

