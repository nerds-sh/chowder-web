import {useSelector} from "react-redux";
import { get } from 'lodash'

export const useRestaurantId = () => useSelector(({ getFood }) => get(getFood, 'getRestaurant.data.restaurants[0].id'))