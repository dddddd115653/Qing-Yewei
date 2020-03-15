import Vue from 'vue'
import VueRouter from 'vue-router'
import routesList from './routesList.js'

Vue.use(VueRouter)

const routes = routesList
const router = new VueRouter({
  routes
})

export default router
