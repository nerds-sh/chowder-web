import { useRestaurant } from '../menu/hooks/use-restaurant'
import { get } from 'lodash'

export const Restaurant = () => {
    const restaurant = useRestaurant()

    const url = get(restaurant, 'banner.url', null)
    const url2 = get(restaurant, 'photo.url', null)

    return <div>
        <img src={url} alt="" style={{ width: '100%', boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px' }} />
        <h2 style={{ marginTop: '20%'}}>{restaurant.name}</h2>
        <img src={url2} alt="" style={{ width: '50%', marginTop: '5%' }} />
    </div>
}