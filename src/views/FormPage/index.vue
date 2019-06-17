<template>
  <v-layout
    justify-center
    align-center
    fill-height
    wrap
  >
    <v-snackbar
      v-model="snackbar"
      color="success"
      :timeout="2500"
      top
    >
      Путешествие успешно добавлено
      <v-btn
        color="light"
        flat
        icon
        @click="snackbar = false"
      >
        <v-icon>
          close
        </v-icon>
      </v-btn>
    </v-snackbar>

    <v-flex xs6>
      <v-form>
        <v-card>
          <v-card-title
            class="text-xs-center headline pa-3 pb-2"
            xs12
          >
            Добавить путешествие
          </v-card-title>
          <v-divider />

          <v-card-text class="pa-4">
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              min-width="290px"
              full-width
              offset-y
              lazy
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="adventure.date"
                  label="Выберите дату путешествия"
                  append-icon="event"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>

              <v-date-picker
                v-model="adventure.date"
                :rules="NoEmpty"
                locale="ru-ru"
                @input="menu = false"
              />
            </v-menu>

            <v-autocomplete
              v-model="adventure.country"
              :items="countries"
              item-value="id"
              item-text="name"
              label="Выберите страну"
            >
              <template v-slot:no-data>
                <div class="pa-3">Данной страны не существует</div>
              </template>
            </v-autocomplete>

            <v-autocomplete
              v-model="adventure.city"
              :items="cities"
              item-value="id"
              item-text="name"
              label="Выберите город"
            >
              <template v-slot:no-data>
                <div class="pa-3">Данного города не существует</div>
              </template>
            </v-autocomplete>
          </v-card-text>

          <v-card-actions class="pa-4">
            <v-layout justify-end>
              <v-btn
                class="px-4"
                color="primary"
                @click="addAdventure"
              >
                Добавить путешествие
              </v-btn>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
const apiKey = '';

const adventure = {
  date: new Date().toISOString().substr(0, 10),
  country: 1,
  city: 0,
};

export default {
  name: 'FormPage',
  created() {
    this.getCountries();
  },
  data: () => ({
    countries: [],
    cities: [],

    snackbar: false,

    menu: false,
    adventure,
    apiKey,

    NoEmpty: [() => !!name || 'Поле не должно быть пустым'],
  }),
  methods: {
    async getCountries() {
      this.countries = (await this.Net.get('http://localhost:3000/countries'));
      if (this.countries.length > 0) this.adventure.country = this.countries[0].id;
    },
    async addAdventure() {
      this.adventure.country = (await this.Net.get(`http://localhost:3000/countries?id=${this.adventure.country}`))[0];
      this.adventure.city = (await this.Net.get(`http://localhost:3000/cities?id=${this.adventure.city}`))[0];
      
      this.$store.dispatch('addAdventure', this.adventure);
      
      this.snackbar = true;
      this.clearData();
    },
    clearData() {
      this.adventure = {
        date: new Date().toISOString().substr(0, 10),
        country: '',
        city: '',
      };
      if (this.countries.length > 0) this.adventure.country = this.countries[0].id;
    },
  },
  watch: {
    'adventure.country': async function (newVal) {
      this.cities = (await this.Net.get(`http://localhost:3000/cities?country_id=${newVal}`));
      if (this.cities.length > 0) this.adventure.city = this.cities[0].id;
      this.cities.sort((prev, next) => prev.name > next.name ? 1 : -1);
    },
  },
};
</script>

<style>

</style>
