import { useSelector } from 'react-redux'
import { get } from 'lodash'

export const useMenu = () => useSelector(state => get(state, 'getMenu.get.data.data', []))