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
          <div v-if="photoInfo">
            <div class="modal__photo-wrapper">
              <img :src="photoInfo.urls.full" alt="pic" class="photo" />
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
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState(['toggleModal', 'photoInfo']),
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
