<template>
  <div>
    <ClearAnimation :is-show="board.isClear" @click="clickClearAnimation" />
    <div class="board-container">
      <div class="mb10">
        <div v-if="useSuggest">
          <Suggest :message="getSuggest" />
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
import Controls from '@/components/Controls'
import Suggest from '@/components/Suggest'

import FirebaseOperation from '@/assets/scripts/firebase/FirebaseOperation'
import GameLogicBoard from '@/assets/scripts/gamelogic/Board'

const firebaseOperation = new FirebaseOperation()

export default {
  components: {
    Board,
    ClearAnimation,
    Controls,
    Suggest
  },
  data() {
    return {
      board: new GameLogicBoard()
    }
  },
  computed: {
    ...mapGetters('debug', ['debugMode']),
    ...mapGetters('config', ['bg', 'useSuggest', 'useHelper']),
    ...mapGetters('editPlay', ['getSuggest'])
  },
  asyncData({ params }) {
    return {
      p: params
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    ...mapActions('editPlay', ['setSuggest']),
    async load() {
      const response = await firebaseOperation.loadEditList(this.p.id)
      if (response) {
        this.board.reset()
        this.board.setTiles(JSON.parse(JSON.stringify(response.tiles)))
        this.setSuggest(response.suggest)
      }
    },
    clickClearAnimation() {
      this.$router.push({ name: 'index' })
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins/board.scss';

.board-container {
  @include boardContainer;
}
</style>
