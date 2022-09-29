import { combineEpics } from 'redux-observable'
import { create } from './create'
import { getReviews } from './get-reviews'

export const review = combineEpics(create, getReviews)