import { Menu } from './menu'
import { Home } from './home'
import { Ar } from './ar'
import { Review } from './review'
import {Contact} from "./contact";

export const allRoutes = [{
        path: '/',
        element: Home,
    },
    {
        path: '/menu',
        element: Menu,
    },
    {
        path: '/ar/:objectPath',
        element: Ar
    },
    {
        path: '/review',
        element: Review,
    },
    {
        path: '/contact-us',
        element: Contact,
    }
]