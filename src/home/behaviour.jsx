import React, {useEffect} from 'react'
import { actions } from '../menu/slices/get-user'
import {useDispatch} from 'react-redux' 
import { actions as restaurantActions } from '../menu/slices/get-restaurant'
import {useParams} from "react-router-dom";

export const Behaviour = () => {
    const dispatch = useDispatch()
    const { restaurantName } = useParams()
    
    useEffect(() => {
        dispatch(actions.attempt())
        dispatch(restaurantActions.attempt({ name: { equals: `${restaurantName}` }}))
    })

    return ''
}