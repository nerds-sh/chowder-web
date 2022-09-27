import "../css/style.min.css"
import  "../bootstrap/bootstrap.min.css"
import React from 'react'
import { Behaviour } from './behaviour'
import { Header } from './header'
import { Content } from './content'
import { Categories } from './categories'

export const Menu = () => {
    
    return <div className="section-content">
        <Behaviour />
        <Header />
        <Categories />
        <Content />
    </div>
}