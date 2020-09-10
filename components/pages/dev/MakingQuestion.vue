<template>
  <div>
    <div class="">
      <Board
        :tiles="board.tiles"
        :use-helper="useHelper"
        :use-debug-helper="debugMode"
        @click="clickTile"
      />
      <div>
        <Controls
          :stage-current="-1"
          :board-count="board.count"
          :board-logs="board.logs"
          bg="1"
          @clickPrev="clickPrev"
          @clickNext="clickNext"
          @clickRetry="clickRetry"
        />
      </div>
    </div>
    <div>
      <div v-show="board.step === 1">
        Step1 タイルのIDを決定する
      </div>
      <div v-show="board.step === 2">
        Step2 問題を作成する
      </div>
      <Button theme="caution" @click="clickStep2Button">
        Step2
      </Button>
    </div>
    <div>問題成立 {{ board.isFormed }}</div>
    <div>Answer {{ board.answer }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Board from '@/components/Board'
import Button from '@/components/Button'
import Controls from '@/components/Controls'

import GameLogicMakingBoard from '@/assets/scripts/gamelogic/MakingBoard'

export default {
  name: 'MakingQuestion',
  components: {
    Board,
    Button,
    Controls
  },
  data() {
    return {
      board: new GameLogicMakingBoard()
    }
  },
  computed: {
    ...mapGetters('debug', ['debugMode']),
    ...mapGetters('config', ['useHelper'])
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      this.board.fillTiles({
        type: '1',
        isOpen: false
      })
    },
    clickTile(tile) {
      this.board.clickTile(tile.index)
    },
    clickStep2Button() {
      this.board.changeStep()
    },
    clickPrev() {
      this.board.prev()
    },
    clickNext() {
      this.board.next()
    },
    clickRetry() {
      this.board.retry()
    }
  }
}
</script>
