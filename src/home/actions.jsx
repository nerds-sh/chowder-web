import { Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const Actions = () => <Grid container direction="column" style={{ paddingTop: 80 }}>
    <Button component={Link} to="/menu">Menu</Button>
    <Button>Contact</Button>
    <Button>Review us</Button>
</Grid>
