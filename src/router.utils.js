import Vue from 'vue';
import Router from 'vue-router';
import m0A from './m0.a.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/a', component: m0A
    }
  ]
});

export default router;
