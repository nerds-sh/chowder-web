import { Button, Grid } from '@material-ui/core'
import {Link, useParams} from 'react-router-dom'

export const Actions = () => {
    const { restaurantName } = useParams()
    return <Grid container direction="column" style={{paddingTop: 50}}>
        <Button component={Link} to={`/${restaurantName}/menu`}>Menu</Button>
        <Button component={Link} to={`/${restaurantName}/contact-us`}>Contact</Button>
        <Button component={Link} to={`/${restaurantName}/review-us`}>Review us</Button>
    </Grid>;
}
