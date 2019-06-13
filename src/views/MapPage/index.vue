<template>
  <yandex-map
    ref="yMap"
    zoom="4"
    :coords="coordinates"
    :controls="[]"
    style="width: 100%; height: 100vh;"
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
</template>

<script>
export default {
  name: "MapPage",
  data: () => ({
    coordinates: [54.62896654088406, 39.731893822753904],
  }),
};
</script>

<style>
.ymaps-2-1-74-map-copyrights-promo,
.ymaps-2-1-74-copyright {
  display: none !important;
}
.ymaps-2-1-74-ground-pane {
  filter: grayscale(100%);
}
</style>
