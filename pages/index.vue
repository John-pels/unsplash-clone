<template>
  <main class="container">
    <Header>
      <Form />
    </Header>
    <PhotoCard :class="mt" />
    <Modal />
  </main>
</template>

<script>
import Vue from 'vue'
import { mapActions } from 'vuex'
export default Vue.extend({
  data() {
    return {
      mt: 'margin-top',
    }
  },

  mounted() {
    this.getRandomPhotos()
  },
  methods: {
    ...mapActions(['getRandomPhotos']),
  },
})
</script>

<style scoped lang="scss">
.margin-top {
  margin-top: -1.5rem;
}
</style>
