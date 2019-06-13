<template>
  <v-app>
    <v-layout fill-height>
      <v-flex shrink>
        <the-menu-app />
      </v-flex>

      <v-flex grow>
        <router-view />
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import TheMenuApp from './components/TheMenuApp';

export default {
  name: 'App',
  created() {
    this.initAdventures();
  },
  components: {
    TheMenuApp,
  },
  methods: {
    async initAdventures() {
      this.$store.dispatch('initAdventures', (await this.Net.get('adventures')));
    },
  },
};
</script>
