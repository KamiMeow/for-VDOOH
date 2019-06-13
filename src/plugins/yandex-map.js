import Vue from 'vue';
import YmapPlugin from 'vue-yandex-maps';

const settings = {
  apiKey: 'ea8bdf2d-e514-427a-a3f3-1df83a71b621',
  lang: 'ru_RU',
  version: '2.1',
};

Vue.use(YmapPlugin, settings);
