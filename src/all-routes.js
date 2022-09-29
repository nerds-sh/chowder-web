import { Menu } from './menu'
import { Home } from './home'
import { Ar } from './ar'
import { Review } from './review'
import {Contact} from "./contact";

export const allRoutes = [{
        path: '/:restaurantName',
        element: Home,
    },
    {
        path: '/:restaurantName/menu',
        element: Menu,
    },
    {
        path: '/:restaurantName/ar/:objectPath',
        element: Ar
    },
    {
        path: '/:restaurantName/review-us',
        element: Review,
    },
    {
        path: '/:restaurantName/contact-us',
        element: Contact,
    }
]