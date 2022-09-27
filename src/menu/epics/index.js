import { combineEpics } from 'redux-observable'
import { getMenu } from './get-menu'
import { getCategories } from './get-categories'
import { getRestaurant } from './get-restaurant'

export const getFood = combineEpics(getRestaurant, getMenu, getCategories)