<template>
  <section class="photo-container">
    <section v-if="isPhotosArray">
      <div v-for="photo in photos" :key="photo.id">
        <div class="photo-container__card">
          <div class="photo-container__card--photo" @click="popup(photo)">
            <img :src="photo.urls.full" alt="pic" />
            <div class="photo-container__card--info">
              <p class="name">
                {{ photo.user.first_name }} {{ photo.user.last_name }}
              </p>
              <p class="location">{{ photo.user.location }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="photo-container__card">
        <div class="photo-container__card--photo" @click="popup">
          <img
            src="https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I"
            alt="pic"
          />
          <div class="photo-container__card--info">
            <p class="name">Felix Navidad</p>
            <p class="location">Location, Nigeria</p>
          </div>
        </div>
      </div>

      <div class="photo-container__card">
        <div class="photo-container__card--photo" @click="popup">
          <img
            src="https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I"
            alt="pic"
          />
          <div class="photo-container__card--info">
            <p class="name">Felix Navidad</p>
            <p class="location">Location, Nigeria</p>
          </div>
        </div>
      </div>

      <div class="photo-container__card">
        <div class="photo-container__card--photo" @click="popup">
          <img
            src="https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I"
            alt="pic"
          />
          <div class="photo-container__card--info">
            <p class="name">Felix Navidad</p>
            <p class="location">Location, Nigeria</p>
          </div>
        </div>
      </div>

      <div class="photo-container__card">
        <div class="photo-container__card--photo" @click="popup">
          <img
            src="https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I"
            alt="pic"
          />
          <div class="photo-container__card--info">
            <p class="name">Felix Navidad</p>
            <p class="location">Location, Nigeria</p>
          </div>
        </div>
      </div>

      <div class="photo-container__card">
        <div class="photo-container__card--photo" @click="popup">
          <img
            src="https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I"
            alt="pic"
          />
          <div class="photo-container__card--info">
            <p class="name">Felix Navidad</p>
            <p class="location">Location, Nigeria</p>
          </div>
        </div>
      </div>

      <div class="photo-container__card">
        <div class="photo-container__card--photo" @click="popup">
          <img
            src="https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I"
            alt="pic"
          />
          <div class="photo-container__card--info">
            <p class="name">Felix Navidad</p>
            <p class="location">Location, Nigeria</p>
          </div>
        </div>
      </div>

      <div class="photo-container__card">
        <div class="photo-container__card--photo" @click="popup">
          <img
            src="https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I"
            alt="pic"
          />
          <div class="photo-container__card--info">
            <p class="name">Felix Navidad</p>
            <p class="location">Location, Nigeria</p>
          </div>
        </div>
      </div>

      <div class="photo-container__card">
        <div class="photo-container__card--photo" @click="popup">
          <img
            src="https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I"
            alt="pic"
          />
          <div class="photo-container__card--info">
            <p class="name">Felix Navidad</p>
            <p class="location">Location, Nigeria</p>
          </div>
        </div>
      </div> -->
    </section>
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
  data() {
    return {
      isPhotosArray: Array.isArray(this.photos) && this.photos.length > 0,
    }
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
