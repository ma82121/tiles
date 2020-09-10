<template>
  <div v-show="isShow" class="clear" @click="click">
    <div ref="clearTitle" class="clear-title">
      <span class="clear-char">S</span>
      <span class="clear-char">t</span>
      <span class="clear-char">a</span>
      <span class="clear-char">g</span>
      <span class="clear-char">e</span>
      <span class="clear-char">C</span>
      <span class="clear-char">l</span>
      <span class="clear-char">e</span>
      <span class="clear-char">a</span>
      <span class="clear-char">r</span>
      <span class="clear-char">!</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClearAnimation',
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.clear {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-out;
}

.clear-title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  font-weight: bold;
  color: #1cc4fd;
}

.clear-char {
  display: block;
  animation-name: rotate;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@keyframes rotate {
  0% {
    opacity: 0;
    transform: rotateY(0deg);
  }
  100% {
    opacity: 1;
    transform: rotateY(360deg);
  }
}
</style>
