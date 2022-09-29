import { combineReducers } from '@reduxjs/toolkit'
import { createReviewSlice } from './create-review'
import { getReviewSlice } from './get-reviews'

export const review = combineReducers({
    create: createReviewSlice.reducer,
    get: getReviewSlice.reducer,
})