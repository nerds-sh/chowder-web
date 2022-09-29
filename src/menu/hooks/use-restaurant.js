import {useSelector} from 'react-redux'
import { get } from 'lodash'

export const useRestaurant = () => useSelector(state => get(state, 'getFood.getRestaurant.data.restaurants[0]', {}))