import { getCategories } from './get-categories'
import { getMenu } from './get-menu'
import { getRestaurant } from './get-restaurant'
import { getUser } from './get-user'

export const repository = { getUser, getRestaurant, getMenu, getCategories }