import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/store.js'
import MintUi from 'mint-ui'
import CubeUi from 'cube-ui'
//import 'mint-ui/lib/style.min.css'
Vue.prototype.$axios=axios
Vue.config.productionTip = false

Vue.use(MintUi);
Vue.use(CubeUi);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
