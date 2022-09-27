import data from './restaurant.json'
import { of } from 'rxjs'

export const getRestaurant = () => of(data)