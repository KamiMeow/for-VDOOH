<template>
  <v-layout
    id="main-menu"
    align-space-around
    justify-center
    fill-height
    column
  >
    <v-flex
      class="item-menu"
      v-for="route in routes"
      :key="route.to"
      shrink
    >
      <v-btn
        class="ma-0 py-4"
        :to="route.to"
        flat
      >
        <v-icon>
          {{ route.icon }}
        </v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'TheMenuApp',
};
</script>

<style>
#main-menu {
  height: 100vh;
  position: fixed;
  background-color: #fff;
  border-right: 2px solid #EBECF1;
  z-index: 1000;
}

.item-menu .v-btn{
  border-left: 5px solid #fff;
  padding-left: 8px;
  transition: .3s;
}
.item-menu:hover .v-btn {
  border-left: 5px solid #0084ffc0;
  transition: .6s;
}

.item-menu .v-btn--active {
  border-left: 5px solid #0082ff;
  padding-left: 8px;
}
</style>
