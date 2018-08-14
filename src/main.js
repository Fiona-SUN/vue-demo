// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/index';
import store from './store/index';
import $axios from './assets/js/utils/http';
import './assets/css/index.scss';
import './filter';
import './assets/js/utils/utils';

Vue.config.productionTip = false;
Vue.config.devtools = (process.env.NODE_ENV !== 'production');

Vue.prototype.$axios = $axios;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
});