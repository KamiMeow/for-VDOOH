<template>
  <v-layout
    justify-center
    align-center
    fill-height
  >
    <v-flex xs6 my-5>
      <v-card>
        <v-card-title class="headline px-4">
          Все путешествия
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text>
          <v-list two-line subheader>
            <v-list-tile
              v-for="(adventure, index) in adventures"
              :key="adventure.id"
            >
              <v-list-tile-content>
                <v-list-tile-title class="subheading">
                  {{ index + 1 }}. 
                  <span class="font-weight-bold">
                    {{ adventure.country.name }}
                  </span> - 
                  г. {{ adventure.city.name }}
                </v-list-tile-title>

                <v-list-tile-sub-title>
                  <div class="py-1 px-3">{{ adventure.date }}</div>
                  <v-divider />
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card-text>
      </v-card>
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
