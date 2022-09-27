import { useRestaurant } from './hooks/use-restaurant'

export const Header = () => {
  const restaurant = useRestaurant()

  return <div className="row mb-5">
    <div className="col-md-12">
      <div className="heading-section text-center">
        <span className="subheading"> Specialties </span>
        <h2> {restaurant.name} </h2>
      </div>
    </div>
  </div>
}