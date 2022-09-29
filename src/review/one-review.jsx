import {Box, Grid} from '@material-ui/core'
import { customIcons } from './reviews'

export const OneReview = ({ review }) => <Box pt={1} pb={1} style={{ marginBottom: 5, marginLeft: 20, width: 300, backgroundColor: '#CCCCCC', borderRadius: 20 }}>
    <Grid container rowSpacing={1}>
        <Grid item xs={6}>
            <div>{review.username}</div>
        </Grid>
        <Grid item xs={6}>
            <div>{ customIcons[review.rate].icon }</div>
        </Grid>
    </Grid>
</Box>
