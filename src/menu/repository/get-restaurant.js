import { client } from '../../index'
import { from, map } from 'rxjs'
import {gql} from '@apollo/client'

const GET_RESTAURANT = gql`
    query($parameter: RestaurantWhereInput) {
        restaurants(where: $parameter) {
            id
            name
            photo {
                url
            }
            banner {
                url
            }
            phone
            email
            address
        }
    }
`

export const getRestaurant = ({ payload }) => from(client().query({
    query: GET_RESTAURANT,
    variables: { parameter: payload } 
}))
.pipe(map(response => response.data))