import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { actions } from './slices/get-reviews'

const useGetReviews = () => {
    const dispatch = useDispatch()
    
    return useEffect(() => {
        dispatch(actions.attempt({
            restaurant: {
                id: {
                    equals: "cl8ncnvio0273byyf5uuzveaa"
                }
            }
        }))
    }, [dispatch])
}

export const Behaviour = () => {
    useGetReviews()
    
    return ''
}