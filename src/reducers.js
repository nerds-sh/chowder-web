import { combineReducers } from 'redux'
import { getMenu } from './menu/slices'

export const rootReducer = combineReducers({
    getMenu
})