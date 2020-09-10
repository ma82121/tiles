<template>
  <canvas v-show="play" ref="canvas" class="canvas" @click="click" />
</template>

<script>
// canvas-animation
// init, play, stop, loop
import Confetti from '@/assets/scripts/canvas-animation/confetti/app'

export default {
  name: 'CanvasAnimation',
  props: {
    play: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      screen: {
        width: 0,
        height: 0,
        centerX: 0,
        centerY: 0
      },
      animationName: '',
      confetti: new Confetti()
    }
  },
  watch: {
    play(bool) {
      if (bool) {
        this.start()
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.resizeCanvas, false)
    this.resizeCanvas()
    if (this.play) {
      this.start()
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeCanvas, false)
  },
  methods: {
    click(e) {
      this.$emit('click', e)
    },
    resizeCanvas() {
      this.$refs.canvas.style.width = window.innerWidth + 'px'
      this.$refs.canvas.style.height = window.innerHeight + 'px'
      this.$refs.canvas.width = window.innerWidth * window.devicePixelRatio
      this.$refs.canvas.height = window.innerHeight * window.devicePixelRatio
      this.screen.width = window.innerWidth * window.devicePixelRatio
      this.screen.height = window.innerHeight * window.devicePixelRatio
      this.screen.centerX = (window.innerWidth * window.devicePixelRatio) / 2
      this.screen.centerY = (window.innerHeight * window.devicePixelRatio) / 2
    },
    start() {
      this.confetti.init(this.$refs.canvas)
      this.loop()
    },
    loop() {
      if (this.play) {
        this.confetti.loop()
        window.requestAnimationFrame(this.loop)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.canvas {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 20;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
