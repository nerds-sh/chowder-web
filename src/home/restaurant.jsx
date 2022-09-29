import { useRestaurant } from '../menu/hooks/use-restaurant'
import { get } from 'lodash'

export const Restaurant = () => {
    const restaurant = useRestaurant()

    const url = get(restaurant, 'photo.url', null)
    return <div style={{ paddingTop: 150 }}>
        <h2>{restaurant.name}</h2>
        <img src={url} alt="" style={{ width: '80%', margin: '10%' }} />
    </div>
}