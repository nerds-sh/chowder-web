import { useMenu } from './hooks/use-menu'

export const NameAndPrice = ({ item }) => {
    console.log('aaa', useMenu())
    return <div className="row align-items-start">
        <div className="col-8">
            <h4>{item.name}</h4>
        </div>
        <div className="col-4">
            <h4 className="text-muted menu-price">{item.price}</h4>
        </div>
    </div>
}
