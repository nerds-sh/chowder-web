import {Box, Grid} from '@material-ui/core'
import { customIcons } from './reviews'

export const OneReview = ({ review }) => <Box>
    <Grid container rowSpacing={1}>
        <Grid item xs={6}>
            <div>{review.username}</div>
        </Grid>
        <Grid item xs={6}>
            <div>{ customIcons[review.rate].icon }</div>
        </Grid>
    </Grid>
</Box>