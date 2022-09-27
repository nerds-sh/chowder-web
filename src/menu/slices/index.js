import { combineReducers } from 'redux'
import { getMenuSlice } from './get-menu'
import { getCategoriesSlice } from './get-categories'

export const getFood = combineReducers({ 
    getMenu: getMenuSlice.reducer,
    getCategories: getCategoriesSlice.reducer,
})