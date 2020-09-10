<template>
  <div class="wrap">
    <h1>
      {{ error.statusCode }}
    </h1>
    <nuxt-link to="/">
      ホーム
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  mounted() {
    console.log(this.error)
  }
}
</script>
