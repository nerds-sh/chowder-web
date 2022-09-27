import { combineEpics } from 'redux-observable'
import { getFood } from './menu/epics'

export const rootEpic = combineEpics(getFood)