<template>
  <v-layout
    justify-center
    align-center
    fill-height
  >
    <v-flex xs5>
      <v-card elevation-0>
        <v-card-text>
          <line-chart :chart-data="chartData"></line-chart>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import LineChart from './lineChart.js';

const years = {
  more: 0,
  less: 0,
};

const chartData = {
  labels: [],
  datasets: [
    {
      label: 'Количество путешествий в год',
      backgroundColor: '#0082ff',
      data: [],
    },
  ],
};

export default {
  name: 'StatisticPage',
  components: {
    LineChart,
  },
  async created() {
    this.adventures.reverse().forEach(adveture => {
      const year = this.getYear(adveture.date);

      if (!~this.chartData.labels.indexOf(year)) {
        this.chartData.labels.push(year);
      }
    });

    this.chartData.labels.forEach((label, index) => {
      const adventures = this.adventures.filter(a => this.getYear(a.date) === label);
      this.chartData.datasets[0].data[index] = adventures.length;
    });
  },
  data: () => ({
    chartData,
    years,
  }),
  methods: {
    getYear(date) {
      return date.split('-')[0];
    },
  },
};
</script>

<style>
.map {
  border: 2px solid red;
  width: 100%;
  height: 400px;
}
</style>
