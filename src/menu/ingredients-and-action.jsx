import { Button } from '@material-ui/core'
import {Link} from "react-router-dom";

export const IngredientsAndAction = ({ item }) => <div className="row">
    <div className="col-8">
        <p>{item.details}</p>
    </div>
    <Button variant="outlined" component={Link} to='/ar'>See 3D</Button>
</div>

