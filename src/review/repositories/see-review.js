import {from} from 'rxjs'
import {client} from '../../index'
import {gql} from '@apollo/client'

const SEE_REVIEW = gql`
query($parameter: ReviewWhereInput) {
  reviews(where: $parameter) {
    username
    text
    rate
   }
}
`

export const seeReview = ({ payload }) => from(client().query({
    query: SEE_REVIEW,
    variables: {parameter: payload}
}))