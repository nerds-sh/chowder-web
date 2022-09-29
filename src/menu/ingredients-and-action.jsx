import { Button } from '@material-ui/core'
import {Link, useParams} from "react-router-dom";

export const IngredientsAndAction = ({ item }) => {
    const { restaurantName } = useParams()
    
    return <div className="row">
        <div className="col-6" style={{width: 30}}>
            <p>{item.ingredients}</p>
        </div>
        <Button variant="outlined" style={{height: 40}} component={Link} to={`/${restaurantName}/ar/${item.name.toLowerCase()}`}>See 3D</Button>
    </div>;
}

