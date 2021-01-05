<template>
  <main class="container">
    <Header>
      <h1 class="heading">
        Search Results for <span>"{{ query }}"</span>
      </h1>
    </Header>
    <section>
      <div v-if="isLoading" class="loader">
        <ContentLoader />
      </div>
      <div v-else>
        <List :class="mt" :photos="search" />
      </div>
    </section>
    <Modal />
  </main>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      mt: 'margin-top',
      query: this.$route.query.q,
    }
  },
  computed: {
    ...mapState(['isLoading', 'search']),
  },
  mounted() {
    this.searchByQuery(this.query)
  },
  methods: {
    ...mapActions(['searchByQuery']),
  },
})
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins.scss';
@import '../assets/scss/variables.scss';
.heading {
  text-align: left;
  color: #003b74;

  @include mobile {
    font-size: 1.5rem;
  }

  span {
    color: grey;
  }
}
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
  margin-top: -2rem;
}
</style>
