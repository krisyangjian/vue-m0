import App from './app.vue'
import Vue from 'vue'
import router from './router.utils';

Vue.component('app', App);

new Vue({
    el: '#app',
    router,
    template: '<app></app>'
 });
