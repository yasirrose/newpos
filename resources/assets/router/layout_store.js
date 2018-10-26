const layout = [{
    path: '/store',
    component: resolve => require(['store/index2'], resolve),
    meta: {
        title: "Dashboard2",
        forAuth : true,
    }
},

// 19-Oct-2018

{
    path: '/store/accounts',
    component: resolve => require(['store/accounts'], resolve),
    meta: {
        title: "Accounts",
        forAuth : true,

    }
},
{
    path: '/store/distributors',
    component: resolve => require(['store/distributors'], resolve),
    meta: {
        title: "Distributors",
        forAuth : true,
    }
},




{
    path: '/store/reports',
    component: resolve => require(['store/blank'], resolve),
    meta: {
        title: "Reports",
        forAuth : true,
    }
}

// 19-Oct-2018
 
]

export default layout
