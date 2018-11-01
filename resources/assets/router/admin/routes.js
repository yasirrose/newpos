import layout_routes from './layout'

const routes = [{
    path: '/',
    component: resolve => require(['src/layout'], resolve),
    children: layout_routes
    }, {
        path: '/login',
        component: resolve => require(['pages/login'], resolve),
        meta: {
            title: "login",
            forVisitors : true,
        }
    },
    {
        path: '/register',
        component: resolve => require(['pages/register'], resolve),
        meta: {
            title: "register",
            forVisitors : true,
        }
    }, {
        path: '/forgotpassword',
        component: resolve => require(['pages/forgotpassword'], resolve),
        meta: {
            title: "Forgot Password",
            forVisitors : true,
        }
    }, {
        path: '/reset_password',
        component: resolve => require(['pages/reset_password'], resolve),
        meta: {
            title: "Reset Password",
            forVisitors : true,
        }
    }, {
        path: '/lockscreen',
        component: resolve => require(['pages/lockscreen'], resolve),
        meta: {
            title: "Lockscreen",
            forVisitors : true,
        }
    }, {
        path: '/500',
        component: resolve => require(['pages/500'], resolve),
        meta: {
            title: "500",
            forVisitors : true,
        }
    },
    {
        path: '*',
        component: resolve => require(['pages/404'], resolve),
        meta: {
            title: "404",
            forVisitors : true,
        }
    }
]
export default routes
