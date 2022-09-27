import { Restaurant } from './restaurant'
import { Actions } from './actions'
import { Behaviour } from '../menu/behaviour'
import { Grid } from '@material-ui/core'

export const Home = () => <Grid>
    <Behaviour />
    <Restaurant />
    <Actions />
</Grid>