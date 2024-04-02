import { Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from './layouts/dashboard';
import CallList from './pages/CallList';
import DashboardApp from './pages/DashboardApp';
// import Home from "./pages/Home";
import Login from './pages/Login';
import NotFound from './pages/Page404';

const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: <DashboardLayout />,
            children: [
                {
                    path: '/',
                    element: <DashboardApp />,
                },
                {path: '/call', element: <CallList />},
            ],
        },
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/',
            children: [
                {path: '404', element: <NotFound />},
                {path: '*', element: <Navigate to='/404' />},
            ],
        },
    ]);
};

export default Router;
