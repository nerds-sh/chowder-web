import { gql } from '@apollo/client'
import { from } from 'rxjs'
import { client } from '../../index'

const GET_USER = gql`
    mutation {
      authenticateUserWithPassword(email: "admin@gmail.com", password: "admin123") {
        __typename
      }
    }
`
export const getUser = () => from(client().mutate({
    mutation: GET_USER
}))