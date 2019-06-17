<template>
  <v-layout
    fill-height
    wrap
  >
    <loading-progress
      v-if="loading"
      label="Загрузка карты"
    />

    <yandex-map
      v-show="!loading"
      ref="yMap"
      zoom="4"
      :coords="coordinates"
      :controls="[]"
      style="width: 100%; height: 100vh;"
      @map-was-initialized="initMap"
    >
      <!-- <ymap-marker
        v-for="(marker, index) in mapData.markers"
        :key="index + 1"
        :marker-id="index + 1"
        :marker-fill="{ color: styles[marker.task_type_cd].fill, opacity: 1 }"
        :marker-stroke="{ color: styles[marker.task_type_cd].stroke, width: 4}"
        :coords="marker.coordinates"
        :hint-content="marker.task_status_cd"
        marker-type="circle"
        circle-radius="50"
        :callbacks="{ click: () => {
          createWay(marker.machine_id);
        }}"
      /> -->
    </yandex-map>
  </v-layout>
</template>

<script>
import LoadingProgress from '@/components/LoadingProgress';

const colors = ['#42A5F5', '#1976D2', '#0D47A1', '#5C6BC0', '#3949AB', '#283593', '#1A237E'];

export default {
  name: "MapPage",
  components: {
    LoadingProgress,
  },
  data: () => ({
    colors,
    color: 0,

    loading: true,
    coordinates: [54.62896654088406, 39.731893822753904],
  }),
  methods: {
    initMap() {
      this.loading = false;

      const { yMap } = this.$refs;
      let lastCoord;

      this.adventures.forEach(adventure => {
        ymaps.geocode(adventure.city.name, {
          results: 1
        })
          .then(res => {
            var firstGeoObject = res.geoObjects.get(0);

            if (!!firstGeoObject.geometry) {
              const coord = firstGeoObject.geometry.getCoordinates();

              if (!!lastCoord) {
                this.createLine(yMap, coord, lastCoord);
              }
              lastCoord = coord;

              firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());
              firstGeoObject.properties.set('balloonContentBody',
                `<span class="subheading font-weight-bold">${adventure.country.name}</span>` +
                ` - <span>${adventure.city.name}</span>` +
                `<div class="body font-italic">${adventure.date}</div>`);
              firstGeoObject.options.set('preset', 'islands#nightCircleIcon');


              yMap.myMap.geoObjects.add(firstGeoObject);
            }
          })
          .catch(err => {
            console.error(err);
          });
      });
    },
    createLine(yMap, coord, lastCoord) {
      if (coord !== lastCoord) {
        const adventureLine = new ymaps.Polyline([coord, lastCoord], {
          balloonContent: 'Линия путешествия',
        },
        {
          balloonCloseButton: false,
          strokeColor: this.colors[this.color],
          strokeWidth: 4,
          strokeOpacity: 0.8,
        });

        if (this.color === colors.length) this.color = 0;
        else this.color++;

        yMap.myMap.geoObjects.add(adventureLine);
      }
    },
  },
};
</script>

<style>
.ymaps-2-1-74-map-copyrights-promo {
  display: none !important;
}
.ymaps-2-1-74-ground-pane {
  filter: grayscale(100%);
}
</style>
