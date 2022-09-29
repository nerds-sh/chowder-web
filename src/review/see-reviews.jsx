import { Box } from '@material-ui/core'
import {useSelector} from 'react-redux'
import {get} from 'lodash'
import {OneReview} from './one-review'

export const SeeReviews = () => {
    const reviews = useSelector(state => get(state, 'review.get.data.reviews', []))
    
    return <Box mt={5} ml={5} mr={5} mb={5} pt={3} pb={3} style={{borderRadius:20, backgroundColor: '#E6E6E6'}}>
        <h3> Reviews </h3>
        {
            reviews.map(review => <OneReview review={review} />)
        }
    </Box>
}