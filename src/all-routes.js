import { Menu } from './menu'
import { Home } from './home'
import { Ar } from './ar'
import { Review } from './review'

export const allRoutes = [{
        path: '/',
        element: Home,
    },
    {
        path: '/menu',
        element: Menu,
    },
    {
        path: '/ar',
        element: Ar
    },
    {
        path: '/review',
        element: Review,
    }
]