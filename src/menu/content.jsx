import { Category } from './category'
import { Details } from './details'

export const Content = () => <div className="row" style={{justifyContent: 'center'}}>
    <div className="col-lg-4 menu-wrap">
        <Category />
        <Details />
    </div>
</div>