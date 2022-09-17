import { combineEpics } from 'redux-observable'
import { getMenu as getMenuEpic } from './get-menu'

export const getMenu = combineEpics(getMenuEpic)