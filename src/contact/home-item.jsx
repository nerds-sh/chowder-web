import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import HomeIcon from "@mui/icons-material/Home";
import {useRestaurant} from "../menu/hooks/use-restaurant"
import React from 'react'

export const HomeItem = () => {
    const restaurant = useRestaurant()

    return <ListItem>
        <ListItemAvatar>
            <Avatar>
                <HomeIcon/>
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Address" secondary={restaurant.address}/>
    </ListItem>;
}