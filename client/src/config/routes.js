import LayoutAdmin from '../layouts/LayoutAdmin';

import AdminHome from '../pages/Admin';
import AdminSignIn from '../pages/Admin/SignIn';

const routes = [
    {
        path: '/admin',
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: '/admin',
                component: AdminHome,
                exact: true
            },
            {
                path: '/admin/loginn',
                component: AdminSignIn,
                exact: true
            }
        ]
    }
];

export default routes;