import Vue from 'vue';
import Router from 'vue-router';
import MapPage from '@/views/MapPage';
import FormPage from '@/views/FormPage';
import CountriesPage from '@/views/CountriesPage';
import StatisticPage from '@/views/StatisticPage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'form',
      component: FormPage,
    },
    {
      path: '/map',
      name: 'map',
      component: MapPage,
    },
    {
      path: '/countries',
      name: 'countries',
      component: MapPage,
    },
    {
      path: '/statistic',
      name: 'statistic',
      component: MapPage,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
