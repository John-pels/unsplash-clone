<template>
  <main class="container">
    <Header>
      <h1 class="heading">
        Search Results for <span>"{{ query }}"</span>
      </h1>
    </Header>
    <PhotoCard :class="mt" />
    <!-- <Modal /> -->
  </main>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      mt: 'margin-top',
      query: this.$route.query.q,
    }
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

.margin-top {
  margin-top: -2rem;
}
</style>
