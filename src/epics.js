import { combineEpics } from 'redux-observable'
import { getFood } from './menu/epics'
import { createReview } from './review/epics'

export const rootEpic = combineEpics(getFood, createReview)