import { client } from '../../index'
import { from } from 'rxjs'
import {gql} from '@apollo/client'

const GET_RESTAURANT = gql`
    query($parameter: RestaurantWhereInput) {
        restaurants(where: $parameter) {
            id
            name
            photo {
                url
            }
        }
    }
`

export const getRestaurant = ({ payload }) => from(client().query({
    query: GET_RESTAURANT,
    variables: { parameter: payload } 
}))