import { combineEpics } from 'redux-observable'
import { create } from './create'

export const createReview = combineEpics(create)