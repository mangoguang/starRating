import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'login',
    component: require('../pages/login')
  }, {
    path: '/login',
    name: 'login',
    component: require('../pages/login')
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
  }, {
    path: '/check/:city/:star',
    name: 'check',
    component: require('../pages/check')
  }]
})