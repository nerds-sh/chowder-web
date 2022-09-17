import { combineReducers } from 'redux'
import { getMenuSlice } from './get-menu'

export const getMenu = () => combineReducers({ get: getMenuSlice.reducer })