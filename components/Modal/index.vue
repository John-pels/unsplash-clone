<template>
  <section v-if="toggleModal">
    <section class="modal-background">
      <div class="modal__close">
        <font-awesome-icon
          :icon="['fas', 'times']"
          class="icon"
          @click="handleClose"
        />
      </div>
      <div class="modal">
        <div class="modal__content">
          <div class="modal__photo-wrapper">
            <img
              src="https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I"
              alt="pic"
              class="photo"
            />
          </div>
          <div class="modal__info">
            <p class="name">Felix Navidad</p>
            <p class="location">Location, Nigeria</p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState(['toggleModal']),
  },
  methods: {
    ...mapActions(['toggleModalAction']),
    handleClose() {
      this.toggleModalAction(false)
    },
  },
})
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
