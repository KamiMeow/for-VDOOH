export default {
  state: {
    routes: [
      {
        name: 'Добавить путешествие',
        icon: 'add',
        to: '/',
      },
      {
        name: 'Карта путешествий',
        icon: 'map',
        to: '/map',
      },
      {
        name: 'Список путешествий',
        icon: 'list',
        to: '/countries',
      },
      {
        name: 'Статистика',
        icon: 'show_chart',
        to: '/statistic',
      },
    ],
  },
  getters: {
    getRoutes: state => state.routes,
  },
};
