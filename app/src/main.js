import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import App from './components/App';

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
