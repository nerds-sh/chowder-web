import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { actions as categoryActions } from '../slices/get-categories'
import { actions as restaurantActions } from '../slices/get-restaurant'
import { actions as foodActions } from '../slices/get-menu'
import {useParams} from "react-router-dom";

export const useGetMenu = () => {
    const dispatch = useDispatch()
    const { restaurantName } = useParams()
    
    useEffect(() => {
        dispatch(restaurantActions.attempt({ name: { equals: `${restaurantName}` } }))
        dispatch(categoryActions.attempt({ restaurant: { name: { equals: `${restaurantName}` }}}))
        dispatch(foodActions.attempt({ category: { restaurant: { name: { equals: `${restaurantName}` }} } }))
    }, [dispatch, restaurantName])
}