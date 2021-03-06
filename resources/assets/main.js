window.axios = require('axios')
import Vue from 'vue'
import App from './App'
import Auth from './Auth.js';
import router from './router'
import store from './store/store.js'
import VueAnalytics from 'vue-analytics'
Vue.use(Auth);
// window.axios.defaults.headers.common = {
//     'X-Requested-With': 'XMLHttpRequest'
// }

// Google Analytics
const google_analytics_key = store.state.google_analytics_key

if (google_analytics_key && google_analytics_key.length) {

    Vue.use(VueAnalytics, {
        id:google_analytics_key,
        router,
        checkDuplicatedScript: true,
        autoTracking: {
            pageviewTemplate(route) {
                return {
                    page: 'default/' + route.path
                }
            }
        }
    })

}

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.forVisitors)){



 axios.get('./isloggedinComplete')
      .then( response =>{
      
      if(response.data.error == "Unauthorised"){
           next();
         }
         else if(response.data.error == "PINUnauthorised") {

        next({ 
          path : '/pin'
        })
      
       } 
       else if(response.data.error == false) {

          next({ 
          path : '/admin'
        })
      
       } }); ///

 }
    else if(to.matched.some(record => record.meta.forPartialAuth)){

      axios.get('./isloggedinComplete')
      .then( response =>{
      
      if(response.data.error == "Unauthorised"){


         next({ 
          path : '/'
        })}
         else if(response.data.error == "PINUnauthorised") {

         next();
      
       } 
       else if(response.data.error == false) {

          next({ 
          path : '/admin'
        })
      
       } }); ///
    }

    else if(to.matched.some(record => record.meta.forAuth)){

      axios.get('./isloggedinComplete')
      .then( response =>{
      
      if(response.data.error == "Unauthorised"){


        next({ 
          path : '/'
        })}
         else if(response.data.error == "PINUnauthorised") {

          next({ 
          path : '/pin'
        })
      
       } 
       else if(response.data.error == false) {

         next()
         store.state.preloader = false
      
       } }); ///
    }
    else next()


});


export const AuthenticationStore = new Vue({
  data: {
    client_secret: '4kRbNGR95XVayf31TiZFPRdHPGEfrgOjX2Xi1Vd8',
    client_id : 2, 
    grant_type: 'password'


  }
})
// Remove the productionTip in dev tool console
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
