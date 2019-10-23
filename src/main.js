import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import {routes} from './routes'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {store} from './store/store'
import Vuelidate from 'vuelidate'
import {scrollBehavior} from './routes'

Vue.use(BootstrapVue)
Vue.use(vueRouter)
Vue.use(Vuelidate)

export const eventBus = new Vue();

const router = new vueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  scrollBehavior,
  store,
  render: h => h(App)
})
