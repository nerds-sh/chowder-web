import { allRoutes } from './all-routes'
import { Route, Routes as RouterRoutes } from 'react-router-dom'

export const Routes = () => <RouterRoutes>
    {
        allRoutes.map(route => <Route key={route.path} path={route.path} element={<route.element />} />)
    }
</RouterRoutes>