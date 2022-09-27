import { of } from 'rxjs'
import data from './categories.json'

export const getCategories = () => of(data)