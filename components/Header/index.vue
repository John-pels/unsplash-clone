<template>
  <header class="header">
    <slot />
  </header>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixins.scss';
@import '../../assets/scss/variables.scss';
.header {
  background: #e3e3e3;
  display: flex;
  align-items: center;
  padding: 4rem;

  @include mobile {
    padding: 3rem 2rem;
  }
}
</style>
