<template>
  <transition name="fade">
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
          <div class="modal__content" close="">
            <div v-if="photoInfo">
              <div class="modal__photo-wrapper">
                <nuxt-image
                  :src="photoInfo.urls.regular"
                  alt="pic"
                  class="photo"
                />
              </div>
              <div class="modal__info">
                <p class="name">
                  {{ photoInfo.user.first_name }} {{ photoInfo.user.last_name }}
                </p>
                <p class="location">{{ photoInfo.user.location }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </transition>
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState(['toggleModal', 'photoInfo']),
  },
  mounted() {
    window.addEventListener('keyup', this.handleEscape)
  },
  destroyed() {
    window.removeEventListener('keyup', this.handleEscape)
    this.toggleModalAction(false)
  },
  methods: {
    ...mapActions(['toggleModalAction']),
    handleClose() {
      this.fixScroll(false)
      this.toggleModalAction(false)
    },
    handleEscape(e) {
      if (e.keyCode === 27) {
        this.handleClose()
      }
    },
    fixScroll(val) {
      if (val) {
        window.document.body.classList.add('fixed')
      } else {
        window.document.body.classList.remove('fixed')
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
