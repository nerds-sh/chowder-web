import { NameAndPrice } from './name-and-price' 
import { IngredientsAndAction } from './ingredients-and-action'
import { useMenu } from './hooks/use-menu'
import { get } from 'lodash'

export const Details = ({ category }) => {
    const menu = useMenu()
    const categoryMenu = menu.filter(item => item.category.name === category.name)
    
    return categoryMenu.map(item => {
        const url = get(item, 'photo.url', null)

        return <div className="menus d-flex align-items-center" style={{backgroundColor: 'lightgreen', paddingTop: 15}}>
            <div className="menu-img rounded-circle">
                <img className="img-fluid" src={url} alt=""/>
            </div>
            <div className="text-wrap">
                <NameAndPrice item={item}/>
                <IngredientsAndAction item={item}/>
            </div>
        </div>
    })
}
