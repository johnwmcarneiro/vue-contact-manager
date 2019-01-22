import Vue from 'vue'
import Router from 'vue-router'
import Contacts from './views/Contacts.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'contacts', component: Contacts },
    // { path: 'contacts/:id', component: ConatctsShow }
  ]
})
