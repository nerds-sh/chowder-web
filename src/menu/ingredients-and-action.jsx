import { Button } from '@material-ui/core'

export const IngredientsAndAction = ({ item }) => <div className="row">
    <div className="col-8">
        <p>{item.details}</p>
    </div>
    <Button variant="outlined">See 3D</Button>
</div>

