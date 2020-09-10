<template>
  <div v-show="toast.isShow" class="toast">
    <div
      :class="['toast-content', toast.status ? 'is-' + toast.status : '']"
      :style="{ animationDuration: toast.duration + 'ms' }"
    >
      {{ toast.message }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Toast',
  computed: {
    ...mapGetters('ui', ['toast'])
  }
}
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  top: 0;
  left: 0;
}

.toast-content {
  padding: 10px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  animation-name: toast;
  // animation-duration: 2000ms;
  animation-fill-mode: forwards;
  border-radius: 8px;

  &.is-success {
    font-size: 0.9rem;
    background-color: #19de97;
  }

  &.is-error {
    font-size: 0.8rem;
    background-color: #ff204d;
  }
}

@keyframes toast {
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  15%,
  85% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}
</style>
