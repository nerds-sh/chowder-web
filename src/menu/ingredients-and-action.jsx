import { Button } from '@material-ui/core'
import {Link, useParams} from "react-router-dom";

export const IngredientsAndAction = ({ item }) => {
    const { restaurantName } = useParams()
    
    return <div className="row">
        <div className="col-8">
            <p>{item.details}</p>
        </div>
        <Button variant="outlined" component={Link} to={`/${restaurantName}/ar/${item.name.toLowerCase()}`}>See 3D</Button>
    </div>;
}

