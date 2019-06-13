import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import plugins from './plugins';
import { mapGetters } from 'vuex';

Vue.config.productionTip = false;

Vue.prototype.plugins = { ...plugins };
Vue.mixin({
  data: () => ({
    ...plugins,
  }),
  computed: {
    ...mapGetters({
      routes: 'getRoutes',
      adventures: 'getAdventures',
    }),
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
