<template>
  <div>
    <Bg :type="bg" />
    <div class="mainarea">
      <nuxt />
    </div>
    <Caption />
    <Toast />
    <MenuWindow />
    <MenuButton />
    <PleaseTap />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Bg from '@/components/Bg'
import Caption from '@/components/Caption'
import MenuButton from '@/components/MenuButton'
import MenuWindow from '@/components/MenuWindow'
import PleaseTap from '@/components/PleaseTap'
import Toast from '@/components/Toast'

export default {
  components: {
    Bg,
    Caption,
    MenuButton,
    MenuWindow,
    PleaseTap,
    Toast
  },
  computed: {
    ...mapGetters('config', ['bg']),
    ...mapGetters('ui', ['caption', 'pleaseTap', 'toast'])
  }
}
</script>

<style lang="scss" scoped>
.mainarea {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  width: 100vw;
}
</style>
