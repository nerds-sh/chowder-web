import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { actions as categoryActions } from '../slices/get-categories'
import { actions as restaurantActions } from '../slices/get-restaurant'

export const useGetMenu = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(restaurantActions.attempt({ name: { equals: "nerds.sh" } }))
        dispatch(categoryActions.attempt({ restaurant: { name: { equals: "nerds.sh" }}}))
    }, [dispatch])
}