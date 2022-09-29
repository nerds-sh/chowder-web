import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { actions as categoryActions } from '../slices/get-categories'
import { actions as userActions } from '../slices/get-user'

export const useGetMenu = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(userActions.attempt())
        dispatch(categoryActions.attempt({
                restaurant: {
                    name: {
                        equals: "nerds.sh"
                    }
                }
        }))
    }, [dispatch])
}