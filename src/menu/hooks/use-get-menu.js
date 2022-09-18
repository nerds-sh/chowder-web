import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { actions } from '../slices/get-menu'

export const useGetMenu = () => {
    const dispatch = useDispatch()

    return useEffect(() => {
        dispatch(actions.attempt())
    }, [dispatch])
}