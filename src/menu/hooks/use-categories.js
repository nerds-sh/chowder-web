import { useSelector } from 'react-redux'
import { get } from 'lodash'

export const useCategories = () => useSelector(state => get(state, 'getFood.getCategories.data.data.categories', []))