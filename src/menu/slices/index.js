import { combineReducers } from 'redux'
import { getMenuSlice } from './get-menu'
import { getCategoriesSlice } from './get-categories'
import { getRestaurantSlice } from './get-restaurant'

export const getFood = combineReducers({ 
    getRestaurant: getRestaurantSlice.reducer,
    getMenu: getMenuSlice.reducer,
    getCategories: getCategoriesSlice.reducer,
})