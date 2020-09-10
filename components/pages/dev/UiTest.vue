<template>
  <div>
    <Button
      theme="primary"
      :is-active="caption.isShow"
      @click="onClickPlayCaptionButton"
    >
      playCaption
    </Button>
    <Button
      theme="primary"
      :is-active="toast.isShow"
      @click="onClickPlayToastButton"
    >
      playToast
    </Button>
    <Button
      theme="primary"
      :is-active="pleaseTap.isShow"
      @click="onClickPleaseTapToggleButton"
    >
      pleaseTapToggle
    </Button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Button from '@/components/Button'

export default {
  name: 'UiTest',
  components: {
    Button
  },
  computed: {
    ...mapGetters('ui', ['caption', 'pleaseTap', 'toast'])
  },
  methods: {
    ...mapActions('ui', [
      'playCaption',
      'playToast',
      'setPleaseTapIsShow',
      'setCaption',
      'setToast'
    ]),
    onClickPlayCaptionButton() {
      this.setCaption({
        message: 'success',
        duration: 3000,
        isShow: false
      })
      this.playCaption()
    },
    onClickPlayToastButton() {
      this.setToast({
        message: 'good!',
        status: 'success',
        duration: 3000,
        isShow: false
      })
      this.playToast()
    },
    onClickPleaseTapToggleButton() {
      const newFlag = !this.pleaseTap.isShow
      this.setPleaseTapIsShow(newFlag)
    }
  }
}
</script>
