<template>
    <header class="header fixed-top">
        <nav>
            
            <!-- Sidebar toggle button-->
            
            
            <div class="navbar float-left">
                <div>
                    <div class="dropdown hidden-xs-down btn-group">
                        <router-link to="/admin/accounts" exact class="user_name_max drpodowtext">
                            Accounts
                        </router-link>
                    </div>
                    <b-dropdown class="user user-menu bell_bg user_btn" right link>
                        <span slot="text">
                            <!-- User name-->
                            <router-link to="" exact class="user_name_max drpodowtext">
                                Distributors
                            </router-link>
                        </span>
                        <b-dropdown-item exact class="dropdown_content">
                            <router-link to="/admin/distributors" exact class="drpodowtext">
                                Accounts
                            </router-link>
                        </b-dropdown-item>
                        <b-dropdown-item exact class="dropdown_content">
                            <router-link to="/admin/distributor_import_pricefile" exact class="drpodowtext">
                                Import Pricefile
                            </router-link>
                        </b-dropdown-item>
                        <b-dropdown-item exact class="dropdown_content">
                            <router-link to="/admin/distributor_import_pricefile" exact class="drpodowtext">
                                New Vendor Pricefile
                            </router-link>
                        </b-dropdown-item>
                        <b-dropdown-item exact class="dropdown_content">
                            <router-link to="/admin/distributor_item" exact class="drpodowtext">
                                Items
                            </router-link>
                        </b-dropdown-item>
                        
                    </b-dropdown>
                    <b-dropdown class="user user-menu bell_bg user_btn" right link>
                        <span slot="text">
                            
                            <!-- User name-->
                            <router-link to="" exact class="user_name_max drpodowtext">
                                Library
                            </router-link>
                        </span>
                        <b-dropdown-item exact class="dropdown_content">
                            <router-link to="/admin/item_library" exact class="drpodowtext">
                                Item Library
                            </router-link>
                        </b-dropdown-item>
                        <b-dropdown-item exact class="dropdown_content">
                            <router-link to="/admin/import_wizard" exact class="drpodowtext">
                                Import Wizard
                            </router-link>
                        </b-dropdown-item>
                        <b-dropdown-item exact class="dropdown_content">
                            <router-link to="/admin/export_item_library" exact class="drpodowtext">
                                Export
                            </router-link>
                        </b-dropdown-item>
                    </b-dropdown>
                    <b-dropdown class="user user-menu bell_bg user_btn" right link>
                        <span slot="text">
                            
                            <!-- User name-->
                            <router-link to="" exact class="user_name_max drpodowtext">
                                Support
                            </router-link>
                        </span>
                        <b-dropdown-item exact class="dropdown_content">
                            <router-link to="" exact class="drpodowtext">
                                Feedback
                            </router-link>
                        </b-dropdown-item>
                        <b-dropdown-item exact class="dropdown_content">
                            <router-link to="" exact class="drpodowtext">
                                Videos
                            </router-link>
                        </b-dropdown-item>
                        <b-dropdown-item exact class="dropdown_content">
                            <router-link to="" exact class="drpodowtext">
                                Facebook
                            </router-link>
                        </b-dropdown-item>
                    </b-dropdown>

                    <b-dropdown class="user user-menu bell_bg user_btn" right link>
                        <span slot="text">
                            <!-- User name-->
                            <router-link to="" exact class="user_name_max drpodowtext">
                                Reports
                            </router-link>
                        </span>
                        <b-dropdown-item exact class="dropdown_content">
                            <router-link to="/admin/reports_basic" exact class="drpodowtext">
                                Basic
                            </router-link>
                        </b-dropdown-item>
                        <b-dropdown-item exact class="dropdown_content">
                            <router-link to="" exact class="drpodowtext">
                                Advance
                            </router-link>
                        </b-dropdown-item>
                    </b-dropdown>
                    <div class="dropdown btn-group">
                        <router-link to="/admin/ads" exact class="user_name_max drpodowtext">
                            Ads
                        </router-link>
                    </div>
                    <div class="dropdown btn-group">
                        <router-link to="/admin/plugins" exact class="user_name_max drpodowtext">
                            Add Plugins
                        </router-link>
                    </div>
                    <b-dropdown class="user user-menu bell_bg user_btn" right link >
                        <span slot="text">
                            
                            <!-- User name-->
                            <router-link to="" exact class="user_name_max drpodowtext">
                                Settings
                            </router-link>
                        </span>
                        <b-dropdown-item exact class="dropdown_content">
                            <router-link to="" exact class="drpodowtext">
                                Plans
                            </router-link>
                        </b-dropdown-item>
                        <b-dropdown-item exact class="dropdown_content">
                            <router-link to="" exact class="drpodowtext">
                                Gateways
                            </router-link>
                        </b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
            <div class="navbar-right">

                <!--drop downs-->
                <div>
                    <!--<div class="dropdown hidden-xs-down btn-group fullscreen" v-if="fullscreen">
                        <a href="javascript:void(0)" @click="fullscreen">
                            <i class="fa fa-arrows-alt"></i>
                        </a>
                    </div>-->

                    <!-- User Account: style can be found in dropdown-->
                    <b-dropdown class="user user-menu bell_bg user_btn admin-setting" right link>
                        <span slot="text">
                            <!-- <img :src="this.$store.state.user.picture" class="rounded-circle" alt="User Image"> -->
                            <button type="button" class="btn btn-secondary dropdown-toggle" ><span ><i class="fa fa-bell-o noti-icon"></i> <div  class="notifications_badge_top"><span class="badge badge-danger">4
                            </span></div></span></button>
                            <!-- User name-->
                            <p class="user_name_max">{{this.$store.state.user.name}}</p>
                        </span>
                        <b-dropdown-item exact class="dropdown_content">
                            <router-link to="/admin/user_profile" exact class="drpodowtext">
                                Profile
                            </router-link>
                        </b-dropdown-item>
                        <b-dropdown-item exact class="dropdown_content">
                            <router-link to=""  exact class="drpodowtext">
                                <button @click="lockscreen" class="drpodowtext">Lock Screen</button>
                            </router-link>
                        </b-dropdown-item>
                        <b-dropdown-item exact class="dropdown_content">
                            <router-link to=""  exact class="drpodowtext">
                                <button @click="logout" class="drpodowtext"> Logout</button>
                            </router-link>
                        </b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
    import screenfull from "screenfull"
    export default {
        name: "vueadmin_header",

        methods: {
            toggle_menu() {
                this.$store.commit('left_menu', "toggle");
            },
            fullscreen() {
                if (screenfull.enabled) {
                    screenfull.toggle();
                }
            },
            lockscreen() {
                axios.post('./lockscreen')
                .then( response =>{                       
                    this.$router.push("/pin");
                })

            },

            logout() {
                axios.post('./logout')
                .then( response =>{                       
                    this.$router.push("/");
                })
            }

        }
    }
</script>
<!-- <style scoped src="assets/css/button.css" rel="stylesheet"></style> -->

<style scoped src="assets/css/style.css" rel="stylesheet"></style>

<style lang="scss" scoped>

@import "../css/customvariables";
.header {
z-index: 1030;
nav {
margin-bottom: 0;
/*background: $header_color;*/
background-size: 100% 100%;
/*box-shadow: 0px 0px 10px #CCC;*/
}
.nav_bg_c {
background: #000;
color: #FFF;
}
.bttn_bg {
background: #000;
}
.name_mrgn {
margin-top: 8px;
color: #FFF;
}
.inner_bttn_a {
color: #FFF;
}
.navbar-right {
float: right;
margin-right: 15px;
}
.logo {
display: block;
float: left;
height: 50px;
line-height: 41px;
padding: 3px 10px;
text-align: center;
width: 250px;
img {
width: 125px;
}
}
.navbar-right {
.dropdown-item {
padding: 0;
width: 100%;
outline: none;
}
div.dropdown {
>a {
color: $zoom_color;
}
.dropdown-menu>button {
padding: 10px 15px;
}
&.notifications-menu {
height: 50px;
.noti-icon {
font-size: 18px;
}
}
>a>i {
font-size: 23px;
}
>a {
display: block;
padding: 12px;
}
&:hover>a {
background-color: #EDEDED;
color: #000;
}
>a.padding-user {
padding-top: 8px;
padding-bottom: 6px;
}
}
}
nav .sidebar-toggle {
float: left;
color: #fff;
font-size: 19px;
padding-top: 10px;
}
}

.user_name_max {
display: inline-block;
max-width: 180px;
white-space: nowrap;
overflow: hidden !important;
text-overflow: ellipsis;
margin: 0 0 -4px;
}

.noti_msg {
font-size: 16px;
padding: 10px;
border: 1px solid #4F90C1;
border-radius: 50px;
margin-top: 10px;
}

.user.user-menu>button img {
width: 35px;
height: 35px;
}

/**** END HEADER RIGHT SIDE DROPDOWNS ****/

@media screen and (max-width: 767px) {
.dropdown.open .dropdown-menu {
position: absolute;
}
.navbar-right>li>a {
padding: 10px 12px;
}
}
/* Fix menu positions on xs screens to appear correctly and fully */

@media (max-width: 560px) {
body .header .logo,
body .header nav {
width: 100%;
}
body .header nav .sidebar-toggle {
padding-left: 15px;
}
nav {
height: 100px !important;
}
}

.notifications_badge_top {
margin-top: -28px;
margin-left: 10px;
position: absolute;
span {
top: 1px;
left: 2px;
border-radius: 50%;
font-size: 9px;
padding: 0.23em 0.45em;
}
}

.notifications-menu .dropdown-item {
width: 100%;
display: block;
}

.dropdown-footer {
padding: 10px !important;
}
</style>
<style type="text/css" lang="scss">
@import "../css/customvariables";
.wrapper {
margin-top: 50px;
@media screen and (max-width: 560px) {
margin-top: 100px;
}
}

.sidebar-toggle {
margin-left: 10px;
}

.bell_bg {
button.btn-secondary {
background-color:transparent;
border: none;
border-radius: 0;
box-shadow: none !important;
&:hover {
background-color: #666666 !important
}
&:active {
color: $toggle_color !important;
}
} //.btn-secondary:active
&.show button {
background-color: $bell-active !important
}
&.user_btn .dropdown-toggle{
padding:7px 9px;
}
}

.tabs_cont,
.event_date {
background-color: #FFF !important;
}
body.left-hidden aside.right-aside {
margin-left: 0;
}
body.left-hidden .header.fixed-top{
padding-right: 0 !important;
}



.show > .btn-secondary.dropdown-toggle {
    background: #666666;
}
.navbar {
    padding-top: 0;
    padding-bottom: 0;
}
header .drpodowtext {
    color: #fff;
    font-family: arial;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 38px;
}
.dropdown-menu {
    background-color: #f0f1f5;
}
header .dropdown-menu .drpodowtext {
    color: #000;
    line-height: inherit;
}
header .dropdown-menu .dropdown-item {
    padding: 0 1.5rem;
}
header .dropdown-menu .dropdown-item:hover {
    background: #b7b7b7;
}
header .dropdown-menu .drpodowtext:hover {
    margin-left: 0 !important;
}
.dropdown-menu {
    border-radius: 0;
}
.dropdown.btn-group {
    padding: 11px 0;
    vertical-align: top;
}
.btn-group.b-dropdown.dropdown {
    padding: 0;
}
.dropdown.btn-group a {
    padding: 0 9px;
}
.btn-group.b-dropdown.dropdown a {
    line-height: 45px;
    padding: 0 0;
}
header .dropdown-menu .drpodowtext {
    padding: 0 18px !important;
}
.admin-setting button.btn-secondary, .admin-setting button.btn-secondary:hover, header .navbar-right .admin-setting.show > .btn-secondary.dropdown-toggle {
    background: transparent !important;
    padding: 9px 10px !important;
}
.admin-setting p {
    color: #fff;
    font-weight: bold;
}
header .admin-setting .drpodowtext button {
    background: transparent;
    border: medium none;
    padding: 0 !important;
}
.admin-setting .fa.fa-bell-o.noti-icon {
    color: #747678;
    font-size: 20px;
}
.badge-danger {
    background: #317ae2;
}
</style>
