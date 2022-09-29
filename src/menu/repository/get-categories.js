import { from } from 'rxjs'
import { gql } from '@apollo/client'
import { client } from '../../index'

const GET_CATEGORIES = gql`
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
        query: GET_CATEGORIES,
        variables: {parameter: payload}
    }))