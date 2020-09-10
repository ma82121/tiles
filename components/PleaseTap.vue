<template>
  <div v-show="pleaseTap.isShow" class="please-tap">
    <Icon name="hand-point-up" mag="2x" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Icon from '@/components/Icon'

export default {
  name: 'PleaseTap',
  components: {
    Icon
  },
  computed: {
    ...mapGetters('ui', ['pleaseTap'])
  }
}
</script>

<style lang="scss" scoped>
.please-tap {
  position: fixed;
  width: 40px;
  height: 40px;
  left: 10px;
  top: 10px;
  animation: blink 1s infinite;
  z-index: 10;
}

@keyframes blink {
  0%,
  50% {
    opacity: 0;
  }
  51%,
  100% {
    opacity: 1;
  }
}
</style>
