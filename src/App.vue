<template>
  <v-app>
    <v-layout fill-height>
      <v-flex shrink>
        <the-menu-app />
      </v-flex>

      <v-flex grow>
        <loading-progress v-if="loading" />

        <router-view v-else />
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import TheMenuApp from './components/TheMenuApp';
import LoadingProgress from '@/components/LoadingProgress';

export default {
  name: 'App',
  async created() {
    this.initAdventures();
  },
  components: {
    TheMenuApp,
    LoadingProgress,
  },
  data: () => ({
    loading: true,
  }),
  methods: {
    async initAdventures() {
      this.adventures.filter(a => this.getYear(a.date));
      this.$store.dispatch('initAdventures', (await this.Net.get('adventures')));
      this.loading = false;
    },
    getYear(date) {
      return date.split('-')[0];
    },
  },
};
</script>
