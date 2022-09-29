import {Button, List, ListItem, ButtonGroup, Box} from '@material-ui/core'
import { useCategories } from './hooks/use-categories'

const flexContainer = {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    overflow: 'auto',
    whiteSpace: 'nowrap',
    backgroundColor: 'lightgray',
}

export const Categories = () => {
    const categories = useCategories()
    console.log('categoroies', categories)

    return <div>
        <Box sx={flexContainer}>
            <ButtonGroup variant="text" aria-label="text button group">
        {
            categories.map(category =>
                    <button className="btn shadow-none" onClick={() => document.getElementById(`${category.name}`).scrollIntoView({behavior: "smooth"})}>
                        {category.name}
                    </button>)
        }
            </ButtonGroup>
        </Box>
    </div>
}
