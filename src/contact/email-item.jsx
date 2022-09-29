import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {useRestaurant} from "../menu/hooks/use-restaurant"
import React from 'react'
import EmailIcon from "@mui/icons-material/Email";

export const EmailItem = () => {
    const restaurant = useRestaurant()

    return <ListItem>
        <ListItemAvatar>
            <Avatar>
                <EmailIcon/>
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary={restaurant.email}/>
    </ListItem>
}