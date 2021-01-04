<template>
  <form ref="form" class="form" @submit.prevent="onSubmit">
    <section class="form__input-group">
      <font-awesome-icon :icon="['fas', 'search']" class="icon" />
      <input
        v-model="value"
        type="text"
        placeholder="search for photo"
        class="form__input-group--field"
      />
    </section>
  </form>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      value: '',
    }
  },
  methods: {
    onSubmit() {
      this.$router.push({ name: 'search', query: { q: this.value } })
    },
  },
})
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
