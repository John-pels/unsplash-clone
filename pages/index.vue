<template>
  <main class="container" :class="toggleModal ? 'fixed' : ''">
    <Header>
      <Form />
    </Header>
    <section>
      <div v-if="isLoading" class="loader">
        <ContentLoader />
      </div>
      <div v-else>
        <List :class="mt" :photos="random" />
      </div>
    </section>
    <Modal />
  </main>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
export default Vue.extend({
  data() {
    return {
      mt: 'margin-top',
    }
  },
  computed: {
    ...mapState(['isLoading', 'random', 'toggleModal']),
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
@import '../assets/scss/mixins.scss';
@import '../assets/scss/variables.scss';
.loader {
  max-width: 70%;
  margin-top: -2rem;
  margin-right: auto;
  margin-left: auto;

  @include mobile {
    max-width: 100%;
    padding: 0 1rem;
  }
}
.margin-top {
  margin-top: -1.5rem;
}
</style>
