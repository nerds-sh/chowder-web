import React from 'react'
import {Grid, List, Box} from '@material-ui/core'

import {Behaviour} from "./behaviour"
import {HomeItem} from "./home-item";
import {EmailItem} from "./email-item";
import {PhoneItem} from "./phone-item";

export const Contact = () => <>
    <Behaviour/>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Grid item xs={8}>
                <h2>Contact us</h2>
                <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                    <HomeItem />
                    <EmailItem />
                    <PhoneItem />
                </List>
            </Grid>
        </Box>
</>
