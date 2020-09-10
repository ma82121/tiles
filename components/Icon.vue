<template>
  <span>
    <i :class="classes" />
    <!-- <font-awesome-icon icon="caret-left" class="fa-4x" /> -->
  </span>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      default: ''
    },
    mag: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes() {
      const array = ['fas']
      if (this.name !== '') {
        array.push('fa-' + this.name)
      }
      if (this.mag !== '') {
        array.push('fa-' + this.mag)
      }
      return array
    }
  }
}
</script>
