import React, {useEffect} from 'react'
import { actions } from '../menu/slices/get-user'
import {useDispatch} from 'react-redux' 
import { actions as restaurantActions } from '../menu/slices/get-restaurant'

export const Behaviour = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(actions.attempt())
        dispatch(restaurantActions.attempt({ name: { equals: "nerds.sh" }}))
    })

    return ''
}