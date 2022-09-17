import "../css/style.min.css"
import  "../bootstrap/bootstrap.min.css"
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { actions } from './slices/get-menu'
import { get } from 'lodash'

const useGetMenu = () => {
    const dispatch = useDispatch()

    return useEffect(() => {
        dispatch(actions.attempt())
    }, [dispatch])
}

export const Menu = () => {
    useGetMenu()
    const menu = useSelector(state => get(state, 'getMenu.get.data.data', {}))
    
    return <div className="section-content">
        <div className="row mb-5">
            <div className="col-md-12">
                <div className="heading-section text-center">
                                <span className="subheading">
                                    Specialties
                                </span>
                    <h2>
                        Our Menu
                    </h2>
                </div>
            </div>
        </div>
        <div className="row" style={{justifyContent: 'center'}}>
            <div className="col-lg-4 menu-wrap">
                <div className="heading-menu">
                    <h3 className="text-center mb-5">Breakfast</h3>
                </div>
                <div className="menus d-flex align-items-center">
                    <div className="menu-img rounded-circle">
                        <img className="img-fluid" src="img/breakfast-1.jpg" alt=""/>
                    </div>
                    <div className="text-wrap">
                        <div className="row align-items-start">
                            <div className="col-8">
                                <h4>Egg Sandwich</h4>
                            </div>
                            <div className="col-4">
                                <h4 className="text-muted menu-price">$30</h4>
                            </div>
                        </div>
                        <p>Meat Ball, Mie</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}