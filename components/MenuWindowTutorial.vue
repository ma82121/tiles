<template>
  <div class="menu-window__contents menu-window__contents--tutorial">
    <div class="menu-heading">動作環境</div>
    <div class="menu-box">
      iPhone iOS10以上 Safari<br />
      Android 6.0以上 Chrome<br />
    </div>
    <div class="menu-box">
      <div class="menu-heading">タイルの種類</div>
      <div class="menu-box">
        <div>タイルは全部で4種類</div>
      </div>
    </div>
    <div class="menu-box">
      <div class="showcase">
        <div class="showcase-item">
          <TileView type="1" :is-on-board="false" :is-rotate="true" />
          <div class="showcase-text">
            白/黒
          </div>
        </div>
        <div class="showcase-item">
          <TileView type="2" :is-on-board="false" :is-rotate="true" />
          <div class="showcase-text">
            白/緑
          </div>
        </div>
        <div class="showcase-item">
          <TileView type="3" :is-on-board="false" :is-rotate="true" />
          <div class="showcase-text">
            白/赤
          </div>
        </div>
        <div class="showcase-item">
          <TileView type="4" :is-on-board="false" :is-rotate="true" />
          <div class="showcase-text">
            白/黄
          </div>
        </div>
      </div>
    </div>
    <div class="menu-heading">
      タップした時の挙動
    </div>
    <div class="menu-box">
      <div class="explanation">
        <div class="explanation__head">
          <TileView type="1" :is-on-board="false" :is-open="true" />
        </div>
        <div class="explanation__body">
          <p>タップしたタイルと、上下左右のタイルが裏返る</p>
        </div>
      </div>
      <div class="explanation">
        <div class="explanation__head">
          <TileView type="1" :is-on-board="false" :is-open="false" />
        </div>
        <div class="explanation__body">
          <p>タップしたタイルと、上下左右のタイルが裏返る</p>
        </div>
      </div>
      <div class="explanation">
        <div class="explanation__head">
          <TileView type="2" :is-on-board="false" :is-open="false" />
        </div>
        <div class="explanation__body">
          <p>
            タップしたタイルの斜めのタイルが裏返る。<mark>タップしたタイル自体は裏返らない</mark>くせもの。
          </p>
        </div>
      </div>
      <div class="explanation">
        <div class="explanation__head">
          <TileView type="3" :is-on-board="false" :is-open="false" />
        </div>
        <div class="explanation__body">
          <p>
            タップしたタイルと、縦横ラインのすべてのタイルが裏返る。魔法使いみたいでかっこいい！
          </p>
        </div>
      </div>
      <div class="explanation">
        <div class="explanation__head">
          <TileView type="4" :is-on-board="false" :is-open="false" />
        </div>
        <div class="explanation__body">
          <p>表面のタイルは裏面に、裏面のタイルは表面になる。</p>
        </div>
      </div>
    </div>
    <div class="menu-box">
      <div class="menu-heading">
        ワンポイントアドバイス
      </div>
      <div class="menu-box">
        「白/緑タイル」「白/赤タイル」「白/黄タイル」が置かれているステージでは、初期状態で必ず裏面で置かれます。つまり初見でも最短手で攻略可能です♪
      </div>
    </div>
    <div class="menu-box">
      <Button theme="primary" size="full" @click="onClickButton">
        チュートリアルをプレイ
      </Button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Button from '@/components/Button'
import TileView from '@/components/TileView'

export default {
  name: 'MenuWindowTutorial',
  components: {
    Button,
    TileView
  },
  methods: {
    ...mapActions('menu', ['closeMenu']),
    onClickButton() {
      this.closeMenu()
      this.$router.push({ name: 'tutorial' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/menu-window-contents';

.menu-window__contents--tutorial {
  .showcase {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .showcase-item {
    margin: 0 6px;
  }

  .showcase-text {
    text-align: center;
  }

  .explanation {
    display: flex;
    margin: 6px;
  }

  .explanation__head {
    text-align: center;
  }

  .explanation__body {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 6px;
    line-height: 1.2;
  }
}
</style>
