<template>
  <div v-show="isShow" class="menu-window">
    <div class="menu-window__inner">
      <div class="menu-window__title">
        {{ menuTitle }}
      </div>
      <TabList :list="menuList" :current-id="selectedId" @clickTab="clickTab" />
      <MenuWindowConfig v-show="selectedId === 'config'" />
      <MenuWindowOnline v-show="selectedId === 'online'" />
      <MenuWindowSelectStage v-show="selectedId === 'select-stage'" />
      <MenuWindowTutorial v-show="selectedId === 'tutorial'" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import TabList from '@/components/TabList'
import MenuWindowConfig from '@/components/MenuWindowConfig'
import MenuWindowOnline from '@/components/MenuWindowOnline'
import MenuWindowSelectStage from '@/components/MenuWindowSelectStage'
import MenuWindowTutorial from '@/components/MenuWindowTutorial'

import { MENU_LIST } from '@/assets/scripts/dictionary/MENU_LIST'

export default {
  name: 'MenuWindow',
  components: {
    TabList,
    MenuWindowConfig,
    MenuWindowOnline,
    MenuWindowSelectStage,
    MenuWindowTutorial
  },
  computed: {
    ...mapGetters('menu', ['isShow', 'selectedId']),
    menuTitle() {
      return MENU_LIST.find(item => item.id === this.selectedId).title
    },
    menuList() {
      return MENU_LIST
    }
  },
  methods: {
    ...mapActions('menu', ['setMenuSelectedId']),
    clickTab(string) {
      this.setMenuSelectedId(string)
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-window {
  position: fixed;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 80;
  overflow: auto;
}

.menu-window__inner {
  margin: 0 auto;
  padding-bottom: 40px;
  max-width: 800px;
  font-size: 0.9rem;
  text-align: left;
}

.menu-window__title {
  margin-bottom: 10px;
  height: 60px;
  line-height: 60px;
  font-size: 1.6rem;
  text-align: center;
  font-weight: bold;
  color: #1cc4fd;
}
</style>
