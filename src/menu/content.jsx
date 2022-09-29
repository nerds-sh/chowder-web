import { Category } from './category'
import { Details } from './details'
import { useCategories } from './hooks/use-categories'
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

export const Content = () => {
    const categories = useCategories()

    return <div className="row" style={{justifyContent: 'center'}}>
        <div className="col-lg-4 menu-wrap">
            {
                categories.map(category => <>
                        <Category category={category} />
                        <Details category={category} />
                    </>)
            }
        </div>
    </div>
}