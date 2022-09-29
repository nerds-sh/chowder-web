import { combineReducers } from '@reduxjs/toolkit'
import { getFood } from './menu/slices'
import { review } from './review/slices'

export const rootReducer = combineReducers({
    getFood,
    review,
})