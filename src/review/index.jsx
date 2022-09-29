import {Grid, Typography} from '@material-ui/core'
import RadioGroupRating from './reviews'

export const Review = () => <Grid>
    <h2>Leave us your opinion.</h2>
    <Typography> What do you think about our restaurant ?</Typography>
    <RadioGroupRating />
    <Typography>What would you like to share with us ?</Typography>
    <input />
</Grid>