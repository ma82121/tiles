<template>
  <div class="menu-window__contents menu-window__contents--config">
    <div class="menu-heading">サジェスト</div>
    <p class="text">ヒントを表示します</p>
    <div class="menu-box">
      <Button
        theme="primary"
        size="full"
        :is-active="useSuggest"
        @click="clickSuggestButton"
      >
        <span v-if="useSuggest">表示しない</span>
        <span v-else>表示する</span>
      </Button>
    </div>
    <div class="menu-heading">ヘルパー</div>
    <p class="text">
      タイルをタップした時、影響を及ぼすタイルの位置を示します
    </p>
    <div class="menu-box">
      <Button
        theme="primary"
        size="full"
        :is-active="useHelper"
        @click="clickHelperButton"
      >
        <span v-if="useHelper">表示しない</span>
        <span v-else>表示する</span>
      </Button>
    </div>
    <div class="menu-heading">背景</div>
    <p class="text">背景を変更できます</p>
    <div class="menu-box">
      <div class="showcase">
        <div
          v-for="number in 6"
          :key="number"
          :class="[String(number) === bg ? 'is-current' : '']"
          class="showcase__item"
        >
          <Bg
            :type="String(number)"
            :is-thumb="true"
            @click="clickBg(String(number))"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Bg from '@/components/Bg'
import Button from '@/components/Button'

export default {
  name: 'MenuWindowConfig',
  components: {
    Bg,
    Button
  },
  computed: {
    ...mapGetters('config', ['bg', 'useHelper', 'useSuggest'])
  },
  methods: {
    ...mapActions('config', [
      'setConfigBg',
      'switchConfiUseSuggest',
      'switchConfiUseHelper'
    ]),
    clickBg(bgId) {
      this.setConfigBg(bgId)
    },
    clickSuggestButton() {
      this.switchConfiUseSuggest()
    },
    clickHelperButton() {
      this.switchConfiUseHelper()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/menu-window-contents';

.menu-window__contents--config {
  .showcase {
    width: 100%;
    display: flex;
  }

  .showcase__item {
    flex: 1;

    &.is-current {
      .bg {
        border: 3px solid #f00 !important;
      }
    }
  }
}
</style>
