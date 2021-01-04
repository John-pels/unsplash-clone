<template>
  <section class="photos-container"></section>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixins.scss';
@import '../../assets/scss/variables.scss';

.photos-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-auto-rows: min-content;
  grid-gap: 1rem;
  grid-auto-flow: dense;
  box-sizing: border-box;
  max-width: 65%;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid red;

  @include mobile {
    max-width: 100%;
    padding: 0 1rem;
  }
}
</style>
