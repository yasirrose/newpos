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
      if(Vue.auth.isAuthenticated()){
        next({ 
          path : '/'
        })
      }
      else next()
    }
    else if(to.matched.some(record => record.meta.forAuth)){
      if( ! Vue.auth.isAuthenticated()){
        next({ 
          path : '/login'
        })
      }
      else next()
    }
    else next()
});

// Remove the productionTip in dev tool console
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
