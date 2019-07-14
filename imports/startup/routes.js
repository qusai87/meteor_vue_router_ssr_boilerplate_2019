import Vue from 'vue';

import Home from './client-vue/ui/pages/Home.vue'
import Login from './client-vue/ui/pages/Login.vue'
import NotFound from './client-vue/ui/NotFound.vue'

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login },
  { path: '*', name: 'not-found', component: NotFound },
]
