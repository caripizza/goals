import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import App from './components/App';

Vue.config.productionTip = false;
Vue.use(VueRouter);

// Register a global custom directive called `v-focus`
Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted(el) {
    // Focus the element
    el.focus();
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
