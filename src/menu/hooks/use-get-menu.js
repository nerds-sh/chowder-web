import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { actions } from '../slices/get-menu'
import { actions as categoryActions } from '../slices/get-categories'

export const useGetMenu = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(actions.attempt())
        dispatch(categoryActions.attempt())
    }, [dispatch])
}