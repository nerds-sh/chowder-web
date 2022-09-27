import { combineReducers } from '@reduxjs/toolkit'
import { getFood } from './menu/slices'

export const rootReducer = combineReducers({
    getFood
})