import {Button, List, ListItem} from '@material-ui/core'
import { useCategories } from './hooks/use-categories'

const flexContainer = {
    overflow: 'auto',
    whiteSpace: 'nowrap',
    backgroundColor: 'lightgray'
}

export const Categories = () => {
    const categories = useCategories()
    console.log('categoroies', categories)

    return <div style={{justifyContent: 'center' }} className="row">
        <List style={flexContainer} class="col-lg-4 menu-wrap">
        {
            categories.map(category => <ListItem style={{display: 'inline-block', width: 'auto'}}>
                    <Button onClick={() => document.getElementById(`${category.name}`).scrollIntoView({behavior: "smooth"})}>
                        {category.name}
                    </Button>
                </ListItem>)
        }
        </List>
    </div>
}
