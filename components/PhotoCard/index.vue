<template>
  <div class="card" @click="popup">
    <div class="card--photo">
      <nuxt-image :src="photo.urls.regular" alt="pic" class="image" />
      <div class="card--info">
        <p class="name">
          {{ photo.user.first_name }} {{ photo.user.last_name }}
        </p>
        <p class="location">{{ photo.user.location }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    photo: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    ...mapActions(['toggleModalAction', 'grabPhotoInfo']),
    popup() {
      this.toggleModalAction(true)
      this.grabPhotoInfo(this.photo)
    },
  },
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
