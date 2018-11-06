const layout = [{
    path: '/admin',
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
    path: '/admin/add_account',
    component: resolve => require(['admin/add_account'], resolve),
    meta: {
        title: "Accounts",
        forAuth : true,

    }
},
{
    path: '/admin/edit_account',
    component: resolve => require(['admin/edit_account'], resolve),
    meta: {
        title: "Accounts",
        forAuth : true,

    }
},
{
    path: '/admin/invoice_history',
    component: resolve => require(['admin/invoice_history'], resolve),
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
    path: '/admin/add_distributor',
    component: resolve => require(['admin/add_distributor'], resolve),
    meta: {
        title: "Distributors",
        forAuth : true,
    }
},
{
    path: '/admin/edit_distributor',
    component: resolve => require(['admin/edit_distributor'], resolve),
    meta: {
        title: "Distributors",
        forAuth : true,
    }
},
{
    path: '/admin/distributor_item',
    component: resolve => require(['admin/distributor_item'], resolve),
    meta: {
        title: "Distributors",
        forAuth : true,
    }
},
{
    path: '/admin/distributor_import_pricefile',
    component: resolve => require(['admin/distributor_import_pricefile'], resolve),
    meta: {
        title: "Distributors",
        forAuth : true,
    }
},

{
    path: '/admin/distributor_new_vendor_pricefile',
    component: resolve => require(['admin/distributor_new_vendor_pricefile'], resolve),
    meta: {
        title: "Distributors",
        forAuth : true,
    }
},


{
    path: '/admin/item_library',
    component: resolve => require(['admin/item_library'], resolve),
    meta: {
        title: "Library",
        forAuth : true,
    }
},
{
    path: '/admin/import_wizard',
    component: resolve => require(['admin/import_wizard'], resolve),
    meta: {
        title: "Library",
        forAuth : true,
    }
},

{
    path: '/admin/export_item_library',
    component: resolve => require(['admin/export_item_library'], resolve),
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
    path: '/admin/reports_basic',
    component: resolve => require(['admin/reports_basic'], resolve),
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
    component: resolve => require(['admin/ads'], resolve),
    meta: {
        title: "Ads",
        forAuth : true,
    }
},

{
    path: '/admin/account_ads',
    component: resolve => require(['admin/account_ads'], resolve),
    meta: {
        title: "Ads",
        forAuth : true,
    }
},

{
    path: '/admin/view_ads',
    component: resolve => require(['admin/view_ads'], resolve),
    meta: {
        title: "Ads",
        forAuth : true,
    }
},
{
    path: '/admin/user_profile',
    component: resolve => require(['admin/user_profile'], resolve),
    meta: {
        title: "View Ads",
        forAuth : true,
    }
},
{
    path: '/admin/modals',
    component: resolve => require(['admin/modals'], resolve),
    meta: {
        title: "Modals",
        forAuth : true,
    }
}

// 19-Oct-2018
 
]

export default layout
