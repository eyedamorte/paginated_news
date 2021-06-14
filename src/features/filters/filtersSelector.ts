import { createSelector } from '@reduxjs/toolkit'

import type { FiltersStateType } from './filtersTypes';
import type { RootReducerType } from '../../store'

export const getSearchValue = createSelector<RootReducerType, FiltersStateType['search'], FiltersStateType['search']>(
    state => state.filters.search,
    value => value
)

