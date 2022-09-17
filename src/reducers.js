import { combineReducers } from '@reduxjs/toolkit'
import { getMenu } from './menu/slices'

export const rootReducer = combineReducers({
    getMenu
})