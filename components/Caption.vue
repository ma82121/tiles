<template>
  <div v-show="caption.isShow" class="caption">
    <div
      class="caption-inner"
      :style="{ animationDuration: caption.duration + 'ms' }"
    >
      {{ caption.message }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Caption',
  computed: {
    ...mapGetters('ui', ['caption'])
  }
}
</script>

<style lang="scss" scoped>
.caption {
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 0;
  left: 0;
}

.caption-inner {
  padding: 30px 0;
  width: 100%;
  text-align: center;
  background-color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  color: #1cc4fd;
  transition: height 3s;

  animation-name: caption;
  // animation-duration: 2s;
  animation-fill-mode: forwards;
}

@keyframes caption {
  0%,
  100% {
    opacity: 0;
    transform: scaleY(0);
  }
  20%,
  80% {
    opacity: 1;
    transform: scaleY(1);
  }
}
</style>
