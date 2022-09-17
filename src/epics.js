import { combineEpics } from 'redux-observable'
import { getMenu } from './menu/epics'

export const rootEpic = combineEpics(getMenu)