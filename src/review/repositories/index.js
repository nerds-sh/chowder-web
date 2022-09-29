import { from, map } from 'rxjs'
import { client } from '../../index'
import {gql} from '@apollo/client'

const CREATE_REVIEW = gql`
    mutation($input: ReviewCreateInput!) {
      createReview(data: $input) {
        username,
        rate,
        text
      }
    }
`
export const createReview = ({ payload }) =>
    from(client().mutate({
        mutation: CREATE_REVIEW,
        variables: {input: payload}
    }))
.pipe(map(response => response.data))