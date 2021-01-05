<template>
  <section v-if="photos.length" class="photo-container">
    <div v-for="(columns, i) in payload" :key="i" class="group">
      <PhotoCard v-for="photo in columns" :key="photo.id" :photo="photo" />
    </div>
  </section>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    photos: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      NUM_COLUMN: 3,
    }
  },
  computed: {
    payload() {
      const resp = []
      this.photos.map((photo, index) => {
        const col = index % this.NUM_COLUMN

        if (resp[col]) {
          resp[col].push(photo)
        } else {
          resp[col] = [photo]
        }
        return {}
      })
      return resp
    },
  },
})
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
