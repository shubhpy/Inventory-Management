// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Resource from 'vue-resource';
import Element from "element-ui";
import en from "element-ui/lib/locale/lang/en";

Vue.use(Element, { locale: en });
Vue.use(Resource);
Vue.config.productionTip = false;
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

// Vue.directive('clickoutside', {
//   priority: 700,
//   bind () {
//     let self  = this
//     this.event = function (event) { 
//     	console.log('emitting event')
//     	self.vm.$emit(self.expression,event) 
//  	  }
//     this.el.addEventListener('click', this.stopProp)
//     document.body.addEventListener('click',this.event)
//   },
  
//   unbind() {
//   	console.log('unbind')
//     // this.el.removeEventListener('click', this.stopProp)
//     // document.body.removeEventListener('click',this.event)
//   },
//   stopProp(event) {event.stopPropagation() }
// })
