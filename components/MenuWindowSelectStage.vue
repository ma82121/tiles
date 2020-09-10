<template>
  <div class="menu-window__contents menu-window__contents--select-stage">
    <div class="select-stage">
      <StageButton
        v-for="(item, index) in stages"
        :key="index"
        class="select-stage__item"
        :stage-number="index"
        :stage="item.tiles"
        :is-disabled="index > clearStageIndex + 1"
        @click="clickSelectStage(index)"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import StageButton from '@/components/StageButton'

import { STAGE_LIST } from '@/assets/scripts/dictionary/STAGE_LIST'

export default {
  name: 'MenuWindowSelectStage',
  components: {
    StageButton
  },
  data() {
    return {
      stages: STAGE_LIST
    }
  },
  computed: {
    ...mapGetters('singlePlay', ['clearStageIndex', 'currentStageIndex'])
  },
  methods: {
    ...mapActions('singlePlay', ['setBoard', 'setCurrentStage']),
    ...mapActions('menu', ['closeMenu']),
    clickSelectStage(index) {
      if (index <= this.clearStageIndex + 1) {
        this.closeMenu()
        this.setCurrentStage(index)
        this.$router.go({ name: 'index' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/menu-window-contents';
</style>
