import "../css/style.min.css"
import  "../bootstrap/bootstrap.min.css"
import { Behaviour } from './behaviour'
import { Header } from './header'
import { Content } from './content'

export const Menu = () => {
    
    return <div className="section-content">
        <Behaviour />
        <Header />
        <Content />
    </div>
}