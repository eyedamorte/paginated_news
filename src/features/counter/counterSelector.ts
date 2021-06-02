import { createSelector } from '@reduxjs/toolkit'

import type { RootReducerType } from '../../store'

export const getCounterValue = createSelector<RootReducerType, number, number>(
    state => state.counter.value,
    value => value
)

