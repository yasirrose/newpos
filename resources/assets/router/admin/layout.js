const layout = [{
    path: '/',
    component: resolve => require(['admin/index'], resolve),
    meta: {
        title: "Dashboard",
        forAuth : true,
    }
},

// 19-Oct-2018

{
    path: '/accounts',
    component: resolve => require(['admin/accounts'], resolve),
    meta: {
        title: "Accounts",
        forAuth : true,

    }
},
{
    path: '/distributors',
    component: resolve => require(['admin/distributors'], resolve),
    meta: {
        title: "Distributors",
        forAuth : true,
    }
},

{
    path: '/item_library',
    component: resolve => require(['admin/blank'], resolve),
    meta: {
        title: "Library",
        forAuth : true,
    }
},

{
    path: '/feedback',
    component: resolve => require(['admin/blank'], resolve),
    meta: {
        title: "Support",
        forAuth : true,
    }
},

{
    path: '/reports',
    component: resolve => require(['admin/blank'], resolve),
    meta: {
        title: "Reports",
        forAuth : true,
    }
},

{
    path: '/plans',
    component: resolve => require(['admin/blank'], resolve),
    meta: {
        title: "Settings",
        forAuth : true,
    }
},

{
    path: '/plugins',
    component: resolve => require(['admin/plugins'], resolve),
    meta: {
        title: "Plugins",
        forAuth : true,
    }
},

{
    path: '/ads',
    component: resolve => require(['admin/blank'], resolve),
    meta: {
        title: "Ads",
        forAuth : true,
    }
}

// 19-Oct-2018
 
]

export default layout
