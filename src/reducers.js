import { combineReducers } from '@reduxjs/toolkit'
import { getFood } from './menu/slices'
import { createReview } from './review/slices'

export const rootReducer = combineReducers({
    getFood,
    createReview,
})