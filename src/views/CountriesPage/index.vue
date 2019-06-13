<template>
  <v-layout
    justify-center
    align-center
    fill-height
  >
    <v-flex xs6 my-5>
      <v-list two-line subheader>
        <v-subheader inset>Все путешествия</v-subheader>

        <v-list-tile
          v-for="(adventure, index) in adventures"
          :key="adventure.id"
        >
          <v-list-tile-content>
            <v-list-tile-title>
              {{ index + 1 }}. 
              {{ adventure.country.name }} -
              {{ adventure.city.name }}
            </v-list-tile-title>
            <v-list-tile-sub-title>
              {{ adventure.date }}
              <v-divider />
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'CountriesPage',
};
</script>

<style>

</style>
