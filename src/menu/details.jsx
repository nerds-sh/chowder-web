import { NameAndPrice } from './name-and-price' 
import { IngredientsAndAction } from './ingredients-and-action'
import { useMenu } from './hooks/use-menu'

export const Details = ({ category }) => {
    const menu = useMenu()
    const categoryMenu = menu.filter(item => item.category === category)

    return categoryMenu.map(item => <div className="menus d-flex align-items-center">
        <div className="menu-img rounded-circle">
            <img className="img-fluid" src="img/breakfast-1.jpg" alt=""/>
        </div>
        <div className="text-wrap">
            <NameAndPrice item={item}/>
            <IngredientsAndAction item={item}/>
        </div>
    </div>)
}
