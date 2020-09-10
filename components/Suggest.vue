<template>
  <div v-if="isShow" class="suggest">
    <div class="suggest-message">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Suggest',
  props: {
    isShow: {
      type: Boolean,
      default: true
    },
    message: {
      type: String,
      default: 'ヒントあげようかな。どうしようかなー'
    }
  }
}
</script>

<style lang="scss" scoped>
.suggest {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.suggest-message {
  position: relative;
  padding: 10px;
  width: 300px;
  height: 60px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #fff;
  font-size: 0.8rem;
  color: #1cc4fd;
  border: 1px solid #1cc4fd;
}
</style>
