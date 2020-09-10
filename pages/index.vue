<template>
  <div>
    <CanvasAnimation :play="isEnding" @click="clickEnding" />
    <ClearAnimation :is-show="board.isClear" @click="clickClearAnimation" />
    <div v-if="isOpening" class="opening" @click="onClickOpening">
      <TilesLogo />
    </div>
    <div class="board-container">
      <div class="mb10">
        <div v-if="useSuggest">
          <Suggest :message="suggest" />
        </div>
      </div>
      <div>
        <Board
          :tiles="board.tiles"
          :use-debug-helper="debugMode"
          :use-helper="useHelper"
          @click="clickTile"
        />
      </div>
      <div class="mt10">
        <Controls
          :board-count="board.count"
          :board-logs="board.logs"
          :bg="bg"
          :stage-current="currentStageIndex"
          @clickPrev="clickPrev"
          @clickNext="clickNext"
          @clickRetry="clickRetry"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Board from '@/components/Board'
import ClearAnimation from '@/components/ClearAnimation'
import CanvasAnimation from '@/components/CanvasAnimation'
import Controls from '@/components/Controls'
import Suggest from '@/components/Suggest'
import TilesLogo from '@/components/TilesLogo'

import { STAGE_LIST } from '@/assets/scripts/dictionary/STAGE_LIST'
import GameLogicBoard from '@/assets/scripts/gamelogic/Board'

export default {
  components: {
    Board,
    ClearAnimation,
    Controls,
    CanvasAnimation,
    Suggest,
    TilesLogo
  },
  data() {
    return {
      board: new GameLogicBoard(),
      isOpening: false,
      isEnding: false
    }
  },
  computed: {
    ...mapGetters('singlePlay', ['currentStageIndex']),
    ...mapGetters('debug', ['debugMode']),
    ...mapGetters('config', ['bg', 'useSuggest', 'useHelper']),
    suggest() {
      return STAGE_LIST[this.currentStageIndex].suggest
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    ...mapActions('singlePlay', [
      'nextStage',
      'setCurrentStage',
      'setClearStage'
    ]),
    load() {
      if (this.currentStageIndex === -1) {
        this.isOpening = true
        this.nextStage()
      }
      this.setBoard()
    },
    setBoard() {
      this.board.reset()
      this.board.setTiles(
        JSON.parse(JSON.stringify(STAGE_LIST[this.currentStageIndex].tiles))
      )
    },
    clickClearAnimation() {
      if (this.currentStageIndex === 24) {
        this.isEnding = true
        return
      }
      this.nextStage()
      this.setBoard()
    },
    clickEnding() {
      this.isEnding = false
      this.nextStage()
      this.setBoard()
    },
    clickPrev() {
      this.board.prev()
    },
    clickNext() {
      this.board.next()
    },
    clickRetry() {
      this.board.retry()
    },
    clickTile(tile) {
      this.board.clickTile(tile.index)
    },
    onClickOpening() {
      this.isOpening = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins/board.scss';

.board-container {
  @include boardContainer;
}

.opening {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #222;
  z-index: 1000;
  top: 0;
  left: 0;
}
</style>
