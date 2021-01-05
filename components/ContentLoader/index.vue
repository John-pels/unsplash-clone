<template>
  <content-loader :height="450" :width="820" :speed="2">
    <rect x="10" y="10" rx="5" ry="5" width="260" height="140" />
    <rect x="280" y="10" rx="5" ry="5" width="260" height="280" />
    <rect x="550" y="10" rx="5" ry="5" width="260" height="140" />
    <rect x="10" y="160" rx="5" ry="5" width="260" height="280" />
    <rect x="280" y="300" rx="5" ry="5" width="260" height="140" />
    <rect x="550" y="160" rx="5" ry="5" width="260" height="280" />
  </content-loader>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'
export default {
  components: { ContentLoader },
}
</script>

<style lang="scss" scoped></style>
