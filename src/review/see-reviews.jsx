import { Box } from '@material-ui/core'
import {useSelector} from 'react-redux'
import {get} from 'lodash'
import {OneReview} from './one-review'

export const SeeReviews = () => {
    const reviews = useSelector(state => get(state, 'review.get.data.data.reviews', []))
    console.log(reviews)
    
    return <Box mt={10} xs={4} sm={4}>
        <h3> Reviews </h3>
        {
            reviews.map(review => <OneReview review={review} />)
        }
    </Box>
}