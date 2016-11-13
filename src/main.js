import Vue from 'vue'
import App from './App'
import Element from 'element-ui'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueResource)
Vue.use(Element)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
