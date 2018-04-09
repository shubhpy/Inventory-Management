// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Resource from 'vue-resource';
import Element from "element-ui";
import en from "element-ui/lib/locale/lang/en";
import { store } from './store/store'
// import cache from 'vue-cache'

// Vue.use(cache, {http: Vue.http, appkey: 'enter your key'});
Vue.use(Element, { locale: en });
Vue.use(Resource)
Vue.config.productionTip = false
Vue.http.options.emulateJSON = true;

Vue.prototype.$hostname = "http://localhost:8000/";

// Vue.prototype.$hostname = "http://192.168.15.187:8000/inventory/";
// Vue.prototype.$hostname = "https://qcitech.org:8085/inventory/";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})