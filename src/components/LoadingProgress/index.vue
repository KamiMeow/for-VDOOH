<template>
  <v-layout
    justify-center
    align-center
    fill-height
    wrap
  >
    <v-flex
      class="text-xs-center"
      shrink
    >
      <v-progress-circular
        :size="150"
        :width="7"
        color="primary"
        indeterminate
      >
        <div>
          {{ label }}
        </div>
      </v-progress-circular>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'LoadingProgress',
  props: {
    label: {
      type: String,
      default: 'Загрузка...',
    },
  },
};
</script>

<style>

</style>
