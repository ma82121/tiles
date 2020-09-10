<template>
  <div class="tutorial" @click="onClickTutorial">
    <div class="board-container">
      <div class="mb10">
        <MessageWindow :message="message" />
      </div>
      <div>
        <Board
          :tiles="board.tiles"
          :use-debug-helper="debugMode"
          :use-helper="useHelper"
          @click="onClickTile"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Board from '@/components/Board'
import MessageWindow from '@/components/MessageWindow'

import { TUTORIAL } from '@/assets/scripts/scenario-script/TUTORIAL'
import GameLogicBoard from '@/assets/scripts/gamelogic/Board'

export default {
  components: {
    Board,
    MessageWindow
  },
  data() {
    return {
      statementCurrentIndex: -1,
      statement: {
        type: '',
        content: null
      },
      message: '',
      pleaseTapTimer: null,
      board: new GameLogicBoard()
    }
  },
  computed: {
    ...mapGetters('config', ['useHelper']),
    ...mapGetters('debug', ['debugMode'])
  },
  mounted() {
    this.load()
  },
  methods: {
    ...mapActions('menu', ['closeMenu']),
    ...mapActions('ui', [
      'playCaption',
      'playToast',
      'setPleaseTapIsShow',
      'setCaption',
      'setToast'
    ]),
    load() {
      this.nextStatement()
    },
    displayToast(payload) {
      this.setToast(payload)
      this.playToast(payload)
    },
    /**
     * 次のstatementを取得し実行
     */
    nextStatement() {
      this.statementCurrentIndex++

      // 次のstatementを取得
      this.statement = null
      this.statement = TUTORIAL[this.statementCurrentIndex]

      // 実行
      switch (this.statement.type) {
        case 'settingBoard':
          this.executionSettingBoard()
          break
        case 'heading':
          this.executionCaption()
          break
        case 'message':
          this.executionMessage()
          break
        case 'tileTap':
          this.executionTileTap()
          break
      }
    },
    executionSettingBoard() {
      this.resetBoard(this.statement.content)
      this.setPleaseTapIsShow(true)
    },
    executionCaption() {
      this.setPleaseTapIsShow(false)
      this.setCaption({
        duration: 2000,
        isShow: true,
        message: this.statement.content
      })
      this.playCaption()
      this.pleaseTapTimer = setTimeout(() => {
        this.setPleaseTapIsShow(true)
      }, 2000)
    },
    executionMessage() {
      this.setPleaseTapIsShow(false)
      this.message = this.statement.content
      this.setPleaseTapIsShow(true)
    },
    executionTileTap() {
      this.setPleaseTapIsShow(false)
    },
    onClickTutorial() {
      if (this.statementCurrentIndex === TUTORIAL.length - 1) {
        return false
      }
      switch (this.statement.type) {
        case 'settingBoard':
          this.nextStatement()
          break
        case 'heading':
          this.nextStatement()
          break
        case 'message':
          this.nextStatement()
          break
        case 'tileTap':
          // 何も仕込まない
          break
      }
    },
    onClickTile(tile) {
      if (this.statement.type !== 'tileTap') {
        return false
      }
      this.board.clickTile(tile.index)
      switch (this.statement.content) {
        case 'tileTapStage1':
          this.nextStatement()
          break
        case 'tileTapStage2':
          this.nextStatement()
          break
      }
    },
    onClickTileStage1() {
      // 成功
      if (this.board.count > 2) {
        this.displayToast({
          status: 'success',
          message: 'Good'
        })
        this.nextStatement()
      }
      // 失敗
      // 失敗なし(3回タップでクリアのため)
    },
    onClickTileStage2() {
      // 成功
      if (this.board.count === 1 && this.board.isClear) {
        this.displayToast({
          status: 'success',
          message: 'Good'
        })
        this.nextStatement()
        // 失敗
      } else {
        setTimeout(() => {
          this.retry()
        }, 1000)
      }
    },
    resetBoard(stageInfo) {
      this.board.setTiles(stageInfo.tiles)
    },
    retry() {
      this.displayToast({
        status: 'error',
        message: 'もう一回トライ！'
      })
      this.resetBoard(this.board)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins/board';

.board-container {
  @include boardContainer;
}

.tutorial {
  position: relative;
  height: 100%;
}

.button-area {
  width: 300px;
  height: 60px;
}

.please-touch {
  position: absolute;
  width: 40px;
  height: 40px;
  left: 10px;
  top: 10px;
  animation: blink 1s infinite;
  z-index: 10;
  display: none;

  &.is-show {
    display: block;
  }

  .fas {
    opacity: 0.5;
  }
}

@keyframes blink {
  0%,
  50% {
    opacity: 0;
  }
  51%,
  100% {
    opacity: 1;
  }
}
</style>
