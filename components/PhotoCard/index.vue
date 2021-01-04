<template>
  <section class="photos-container">
    <div class="photos-container__card">
      <div class="photos-container__card--photo" @click="popup">
        <img
          src="https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I"
          alt="pic"
        />
        <div class="photos-container__card--info">
          <p class="name">Felix Navidad</p>
          <p class="location">Location, Nigeria</p>
        </div>
      </div>

      <div class="photos-container__card--photo">
        <img
          src="https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I"
          alt="pic"
        />

        <div class="photos-container__card--info">
          <p class="name">Felix Navidad</p>
          <p class="location">Location, Nigeria</p>
        </div>
      </div>

      <div class="photos-container__card--photo">
        <img
          src="https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I"
          alt="pic"
        />

        <div class="photos-container__card--info">
          <p class="name">Felix Navidad</p>
          <p class="location">Location, Nigeria</p>
        </div>
      </div>
    </div>
    <div class="photos-container__card">
      <div class="photos-container__card--photo">
        <img
          src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
          alt="pic"
        />
        <div class="photos-container__card--info">
          <p class="name">Felix Navidad</p>
          <p class="location">Location, Nigeria</p>
        </div>
      </div>

      <div class="photos-container__card--photo">
        <img
          src="https://i.picsum.photos/id/1023/3955/2094.jpg?hmac=AW_7mARdoPWuI7sr6SG8t-2fScyyewuNscwMWtQRawU"
          alt="pic"
        />
        <div class="photos-container__card--info">
          <p class="name">Felix Navidad</p>
          <p class="location">Location, Nigeria</p>
        </div>
      </div>
      <div class="photos-container__card--photo">
        <img
          src="https://i.picsum.photos/id/1023/3955/2094.jpg?hmac=AW_7mARdoPWuI7sr6SG8t-2fScyyewuNscwMWtQRawU"
          alt="pic"
        />

        <div class="photos-container__card--info">
          <p class="name">Felix Navidad</p>
          <p class="location">Location, Nigeria</p>
        </div>
      </div>
    </div>
    <div class="photos-container__card">
      <div class="photos-container__card--photo">
        <img
          src="https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y"
          alt="pic"
        />

        <div class="photos-container__card--info">
          <p class="name">Felix Navidad</p>
          <p class="location">Location, Nigeria</p>
        </div>
      </div>

      <div class="photos-container__card--photo">
        <img
          src="https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y"
          alt="pic"
        />

        <div class="photos-container__card--info">
          <p class="name">Felix Navidad</p>
          <p class="location">Location, Nigeria</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import { mapActions } from 'vuex'
export default Vue.extend({
  methods: {
    ...mapActions(['toggleModalAction']),
    popup() {
      this.toggleModalAction(true)
    },
  },
})
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
