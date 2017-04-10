import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login.vue'
import Index from '../pages/index'
import startRating from '../pages/start-rating'
import search from '../pages/search'
import history from '../pages/history'
import result from '../pages/result'
import rating from '../pages/rating'

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'login',
    component: Login
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/index',
    name: 'index',
    component: require('../pages/index')
  }, {
    path: '/startRating/:name',
    name: 'startRating',
    component: require('../pages/start-rating')
  }, {
    path: '/search',
    name: 'search',
    component: require('../pages/search')
  }, {
    path: '/history',
    name: 'history',
    component: require('../pages/history')
  }, {
    path: '/result',
    name: 'result',
    component: require('../pages/result')
  }, {
    path: '/rating',
    name: 'rating',
    component: require('../pages/rating')
  }]
})