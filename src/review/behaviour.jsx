import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { actions } from './slices/get-reviews'
import {useRestaurantId} from "../menu/hooks/use-restaurant-id";
import {actions as restaurantActions} from "../menu/slices/get-restaurant";
import {useParams} from "react-router-dom";

const useGetReviews = () => {
    const dispatch = useDispatch()
    const { restaurantName } = useParams()
    const restaurantId = useRestaurantId()
    
    return useEffect(() => {
        dispatch(restaurantActions.attempt({ name: { equals: `${restaurantName}` }}))
        if(restaurantId) {
            dispatch(actions.attempt({
                restaurant: {
                    id: {
                        equals: `${restaurantId}`
                    }
                }
            }))
        }
    }, [dispatch, restaurantId, restaurantName])
}

export const Behaviour = () => {
    useGetReviews()
    
    return ''
}