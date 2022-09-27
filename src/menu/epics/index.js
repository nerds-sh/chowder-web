import { combineEpics } from 'redux-observable'
import { getMenu } from './get-menu'
import { getCategories } from './get-categories'

export const getFood = combineEpics(getMenu, getCategories)