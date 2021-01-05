<template>
  <section class="photo-container">
    <div
      v-for="photo in photos"
      :key="photo.id"
      class="photo-container__card"
      @click="popup(photo)"
    >
      <div class="photo-container__card--photo">
        <nuxt-image :src="photo.urls.regular" alt="pic" class="image" />
        <div class="photo-container__card--info">
          <p class="name">
            {{ photo.user.first_name }} {{ photo.user.last_name }}
          </p>
          <p class="location">{{ photo.user.location }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import { mapActions } from 'vuex'
export default Vue.extend({
  props: {
    photos: {
      type: Array,
      default: null,
    },
  },

  methods: {
    ...mapActions(['toggleModalAction', 'grabPhotoInfo']),
    popup(info) {
      this.toggleModalAction(true)
      this.grabPhotoInfo(info)
    },
  },
})
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
