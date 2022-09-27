import data from './menu.json'
import { of } from 'rxjs'

export const getMenu = () => of(data)