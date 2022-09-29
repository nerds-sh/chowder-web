import {useDispatch} from "react-redux";
import {actions as restaurantActions} from "../../menu/slices/get-restaurant";
import { useEffect } from 'react'

export const useGetRestaurants = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(restaurantActions.attempt({name: {equals: "nerds.sh"}}))
    }, [dispatch])
}