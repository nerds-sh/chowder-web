import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { actions as categoryActions } from '../slices/get-categories'

export const useGetMenu = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(categoryActions.attempt({
                restaurant: {
                    name: {
                        equals: "nerds.sh"
                    }
                }
        }))
    }, [dispatch])
}