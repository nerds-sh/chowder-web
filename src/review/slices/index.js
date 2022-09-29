import { combineReducers } from '@reduxjs/toolkit'
import { createReviewSlice } from './create-review'

export const createReview = combineReducers({
    create: createReviewSlice.reducer
})