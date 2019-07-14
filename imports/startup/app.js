import 'isomorphic-fetch';

// Vue modules
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeteorTracker from 'vue-meteor-tracker';

// App modules
import routes from './routes';
import App from './client-vue/ui/layouts/App.vue';

Vue.use(VueRouter);
Vue.use(VueMeteorTracker);


function createApp (context) {
  const router = new VueRouter({
    mode: 'history',
    routes,
  });

  return {
    app: new Vue({
      el: '#app',
      router,
      ...App,
    }),
    router,
  }
}

export default createApp;