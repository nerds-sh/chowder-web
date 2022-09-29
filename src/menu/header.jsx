import { useRestaurant } from './hooks/use-restaurant'
import './style/style.css'

export const Header = () => {
  const restaurant = useRestaurant()

  return <div className="row mb-5">
    <div className="col-md-12">
      <div className="col-md-12 text-center marb-35">
        <h1 className="header-h">Our Menu</h1>
        <h2 className='header-h2'> {restaurant.name} </h2>
      </div>
    </div>
  </div>
}