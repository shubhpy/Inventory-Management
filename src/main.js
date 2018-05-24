import Vue from 'vue'
import App from './App'
import router from './router'
import Resource from 'vue-resource'
import Element from "element-ui"
import en from "element-ui/lib/locale/lang/en"
import { store } from './Store/store'
// import InfiniteLoading from 'vue-infinite-loading'

Vue.use(Element, { locale: en })
Vue.use(Resource)
Vue.config.productionTip = false
Vue.http.options.emulateJSON = true

// Vue.prototype.$hostname = "https://qcitech.org:8082/inventory/"

Vue.prototype.$hostname = 'https://api-inventory.qcitech.org/';

// Vue.prototype.$hostname = "http://192.168.15.153:5000/inventory/";
// var token = localStorage.getItem('token')
// console.log(token)
// this.$http.headers.common['Authorization'] = token

// export default {
//   components: {
//     InfiniteLoading,
//   },
// }

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
