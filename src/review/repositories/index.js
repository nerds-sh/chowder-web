import { from } from 'rxjs'
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
export const createReview = ({ payload }) => {
    console.log('payload', payload)
    return from(client().mutate({
        mutation: CREATE_REVIEW,
        variables: {input: payload}
    }))
}