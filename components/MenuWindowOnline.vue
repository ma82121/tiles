<template>
  <div class="menu-window__contents menu-window__contents--online">
    <div class="menu-box">
      <div v-if="isLogin">
        <Button theme="warning" size="full" @click="clickLogoutButton">
          ログアウト
        </Button>
      </div>
      <div v-else>
        <Button theme="warning" size="full" @click="clickLoginButton">
          Googleアカウントでログイン
        </Button>
      </div>
    </div>
    <div class="menu-heading">
      Creation
    </div>
    <p class="text">
      自分だけのステージを作ってみよう
    </p>
    <div class="menu-box">
      <Button
        theme="primary"
        size="full"
        :disabled="!isLogin"
        @click="clickCreationButton"
      >
        Stageを作る(要Googleアカウント)
      </Button>
    </div>
    <div class="menu-heading">
      みんなが作ったStageをプレイ
    </div>
    <div class="menu-box select-stage">
      <div
        v-for="(item, index) in editList"
        :key="item.id"
        class="select-stage__item"
        @click="clickEveryonesStagePlay(index)"
      >
        <StageButton :stage="item.tiles" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Button from '@/components/Button'
import StageButton from '@/components/StageButton'

export default {
  name: 'MenuWindowOnline',
  components: {
    Button,
    StageButton
  },
  computed: {
    ...mapGetters('menu', ['editList', 'isShow', 'selectedId']),
    ...mapGetters('auth', ['isLogin'])
  },
  mounted() {
    this.load()
  },
  methods: {
    ...mapActions('auth', ['loginCheck', 'login', 'logout']),
    ...mapActions('menu', [
      'closeMenu',
      'loadMenu',
      'switchMenu',
      'setMenuSelectedId'
    ]),
    async load() {
      await this.loadMenu()
      await this.loginCheck()
    },
    clickLoginButton() {
      this.login()
    },
    clickLogoutButton() {
      this.logout()
    },
    clickCreationButton() {
      this.closeMenu()
      this.$router.push({ name: 'creation' })
    },
    clickEveryonesStagePlay(index) {
      this.closeMenu()
      this.$router.push({
        name: 'play-id',
        params: { id: this.editList[index].id }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/menu-window-contents';
</style>
