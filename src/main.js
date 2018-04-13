import Vue from 'vue'
import App from './App'
import router from './router'
import Resource from 'vue-resource';
import Element from "element-ui";
import en from "element-ui/lib/locale/lang/en";

/* import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' */

//@import '~vuetify/src/stylus/main' /*Where to put this line ??????*/

//Vue.use(Vuetify)

Vue.use(Element, { locale: en });
Vue.use(Resource)
Vue.config.productionTip = false
Vue.http.options.emulateJSON = true;

Vue.prototype.$hostname = "http://192.168.15.153:5000/inventory/";
// Vue.prototype.$hostname = "http://192.168.15.187:8000/inventory/";
// Vue.prototype.$hostname = "https://qcitech.org:8085/inventory/";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})