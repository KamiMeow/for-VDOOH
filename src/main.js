import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import plugins from './plugins';

Vue.config.productionTip = false;

Vue.prototype.plugins = { ...plugins };
Vue.mixin({
  data: () => ({
    ...plugins,
  }),
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
