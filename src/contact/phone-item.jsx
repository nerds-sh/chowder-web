import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {useRestaurant} from "../menu/hooks/use-restaurant"
import React from 'react'
import PhoneIcon from "@mui/icons-material/Phone";

export const PhoneItem = () => {
    const restaurant = useRestaurant()

    return <ListItem>
        <ListItemAvatar>
            <Avatar>
                <PhoneIcon/>
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Phone" secondary={restaurant.phone}/>
    </ListItem>
}