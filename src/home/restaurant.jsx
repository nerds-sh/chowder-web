import { useRestaurant } from '../menu/hooks/use-restaurant'

export const Restaurant = () => {
    const restaurant = useRestaurant()
    
    return <div style={{ paddingTop: 150 }}>
        <h2>{restaurant.name}</h2>
        <img src="img/reservation-bg.jpg" alt="" style={{ width: '80%', margin: '10%' }} />
    </div>
}