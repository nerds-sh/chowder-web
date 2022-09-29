import { combineEpics } from 'redux-observable'
import { getMenu } from './get-menu'
import { getCategories } from './get-categories'
import { getRestaurant } from './get-restaurant'
import { getUser } from './get-user'

export const getFood = combineEpics(getUser, getRestaurant, getMenu, getCategories)