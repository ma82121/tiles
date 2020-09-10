<template>
  <div>
    <Button :is-active="debugMode" @click="onClickButton">
      DebugMode
    </Button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Button from '@/components/Button'

export default {
  name: 'EditDebugMode',
  components: {
    Button
  },
  computed: {
    ...mapGetters('debug', ['debugMode'])
  },
  methods: {
    ...mapActions('debug', ['switchDebugMode']),
    onClickButton() {
      this.switchDebugMode()
    }
  }
}
</script>
