import layout_routes_admin from './layout_admin';

const routes = [{
    path: '/admin',
    component: resolve => require(['src/layout'], resolve),
    children: layout_routes_admin
    },   
    
    {
        path: '/',
        component: resolve => require(['pages/login'], resolve),
        meta: {
            title: "login",
            forVisitors : true,
        }
    },
    {
        path: '/pin',
        component: resolve => require(['pages/pin'], resolve),
        meta: {
            title: "PIN",
            forPartialAuth : true,
        }
    },

    {
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
