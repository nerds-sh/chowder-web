import data from './menu.json'
import {from, of} from 'rxjs'

export const getMenu = () => of(data)