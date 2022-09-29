import { combineReducers } from 'redux'
import { getMenuSlice } from './get-menu'
import { getCategoriesSlice } from './get-categories'
import { getRestaurantSlice } from './get-restaurant'
import { getUserSlice } from './get-user'

export const getFood = combineReducers({
    getUser: getUserSlice.reducer,
    getRestaurant: getRestaurantSlice.reducer,
    getMenu: getMenuSlice.reducer,
    getCategories: getCategoriesSlice.reducer,
})