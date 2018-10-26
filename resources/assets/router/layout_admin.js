const layout = [{
    path: '/admin/',
    component: resolve => require(['admin/index'], resolve),
    meta: {
        title: "Dashboard",
        forAuth : true,
    }
},

// 19-Oct-2018

{
    path: '/admin/accounts',
    component: resolve => require(['admin/accounts'], resolve),
    meta: {
        title: "Accounts",
        forAuth : true,

    }
},
{
    path: '/admin/distributors',
    component: resolve => require(['admin/distributors'], resolve),
    meta: {
        title: "Distributors",
        forAuth : true,
    }
},

{
    path: '/admin/item_library',
    component: resolve => require(['admin/blank'], resolve),
    meta: {
        title: "Library",
        forAuth : true,
    }
},

{
    path: '/admin/feedback',
    component: resolve => require(['admin/blank'], resolve),
    meta: {
        title: "Support",
        forAuth : true,
    }
},

{
    path: '/admin/reports',
    component: resolve => require(['admin/blank'], resolve),
    meta: {
        title: "Reports",
        forAuth : true,
    }
},

{
    path: '/admin/plans',
    component: resolve => require(['admin/blank'], resolve),
    meta: {
        title: "Settings",
        forAuth : true,
    }
},

{
    path: '/admin/plugins',
    component: resolve => require(['admin/plugins'], resolve),
    meta: {
        title: "Plugins",
        forAuth : true,
    }
},

{
    path: '/admin/ads',
    component: resolve => require(['admin/blank'], resolve),
    meta: {
        title: "Ads",
        forAuth : true,
    }
},
{
    path: '/admin/user_profile',
    component: resolve => require(['admin/user_profile'], resolve),
    meta: {
        title: "Ads",
        forAuth : true,
    }
}

// 19-Oct-2018
 
]

export default layout
