import { Menu } from './menu'
import { Home } from './home'
import { Ar } from './ar'

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
    }
]