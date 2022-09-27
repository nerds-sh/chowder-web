import { List, ListItem } from '@material-ui/core'
import { useCategories } from './hooks/use-categories'

const flexContainer = {
    overflow: 'auto',
    whiteSpace: 'nowrap',
    backgroundColor: 'lightgray'
}

export const Categories = () => {
    const categories = useCategories()

    return <div style={{justifyContent: 'center' }} className="row">
        <List style={flexContainer} class="col-lg-4 menu-wrap">
            {
                categories.map(category => <ListItem style={{display: 'inline-block', width: 'auto'}}>
                    {category}</ListItem>)
            }
        </List>
    </div>
}
