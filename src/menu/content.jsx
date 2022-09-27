import { Category } from './category'
import { Details } from './details'
import { useCategories } from './hooks/use-categories'

export const Content = () => {
    const categories = useCategories()

    return <div className="row" style={{justifyContent: 'center'}}>
        <div className="col-lg-4 menu-wrap">
            {
                categories.map(category => {
                    console.log('cccc', category)
                    return <>
                        <Category category={category} />
                        <Details category={category} />
                    </>
                })
            }
        </div>
    </div>
}