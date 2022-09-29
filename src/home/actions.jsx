import { Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const Actions = () => <Grid container direction="column" style={{ paddingTop: 50 }}>
    <Button component={Link} to="/menu">Menu</Button>
    <Button>Contact</Button>
    <Button component={Link} to="/review">Review us</Button>
</Grid>
