import { from } from 'rxjs'
import { gql } from '@apollo/client'
import { client } from '../../index'

const GET_MENU = gql`
    query($parameter: FoodCategoryWhereInput) {
        foodCategories(where: $parameter) {
            restaurant{
                name
            }
            id
            name
        }
    }
`
export const getCategories = ({ payload }) => from(client().query({
        query: GET_MENU,
        variables: {parameter: payload}
    }))