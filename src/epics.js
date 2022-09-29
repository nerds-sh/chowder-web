import { combineEpics } from 'redux-observable'
import { getFood } from './menu/epics'
import { review } from './review/epics'

export const rootEpic = combineEpics(getFood, review)