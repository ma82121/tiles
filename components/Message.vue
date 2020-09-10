<template>
  <div v-if="isShow" class="message">
    {{ displayMessage }}
  </div>
</template>

<script>
export default {
  name: 'Message',
  methods: {
    update() {
      if (this.count > this.message.length) {
        this.stop()
      } else {
        const text = this.message.substr(0, this.count)
        this.displayMessage = text
        this.count++
      }
    },
    play() {
      this.reset()
      this.timer = setInterval(this.update, 1000 / this.speed)
    },
    stop() {
      this.displayMessage = this.message
      clearInterval(this.timer)
    },
    reset() {
      this.timer = null
      this.displayMessage = ''
      this.count = 0
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  position: relative;
  margin: 0 auto;
  padding: 2px;
  width: 300px;
  height: 60px;
  box-sizing: border-box;
  font-size: 0.9rem;
  font-weight: bold;
}
</style>
