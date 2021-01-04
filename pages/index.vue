<template>
  <main class="container">
    <Header>
      <Form />
    </Header>
    <PhotoCard :class="mt" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      mt: 'margin-top',
    }
  },
}
</script>

<style scoped lang="scss">
.margin-top {
  margin-top: -1.5rem;
}
</style>
