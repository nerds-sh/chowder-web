import { from } from 'rxjs'
import { client } from '../../index'
import { gql } from '@apollo/client'

const GET_MENU = gql`
query($parameter: FoodWhereInput) {
    foods(where: $parameter) {
        category {
            name
        }
        id
        name
        price
        ingredients
        photo {
            url
        }
    }
}
`

export const getMenu = ({ payload }) => from(client().query({
    query: GET_MENU,
    variables: {parameter: payload}
}))