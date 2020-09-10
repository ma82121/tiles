<template>
  <div class="creation-page">
    <div class="header-title">Creation</div>
    <div v-if="isLogin">
      <div :class="['board-container', 'is-bg-' + bg]">
        <div>
          <p class="lead">サジェストで表示させる文章(50文字まで)</p>
          <input
            v-model="suggest"
            type="text"
            class="text"
            placeholder="3手詰めだよ"
            @change="changeSuggest"
          />
        </div>
        <div>
          <Board :tiles="tiles" :use-helper="useHelper" @click="clickTile" />
        </div>
        <div>
          <Button theme="warning" size="full" @click="clickRelease">
            <span v-if="isRelease">公開しない</span>
            <span v-else>公開する</span>
          </Button>
        </div>
        <div>
          <Button theme="primary" size="full" @click="clickPlayButton">
            Play
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Board from '@/components/Board'
import Button from '@/components/Button'

import GameLogicBoard from '@/assets/scripts/gamelogic/Board'

import FirebaseOperation from '@/assets/scripts/firebase/FirebaseOperation'

const board = new GameLogicBoard()

const firebaseOperation = new FirebaseOperation()

export default {
  components: {
    Board,
    Button
  },
  data() {
    return {
      tiles: []
    }
  },
  computed: {
    ...mapGetters('auth', ['isLogin', 'uid']),
    ...mapGetters('config', ['bg', 'useHelper']),
    ...mapGetters('editPlay', ['isRelease', 'stageId', 'suggest', 'getTiles'])
  },
  mounted() {
    this.load()
  },
  methods: {
    ...mapActions('auth', ['loginCheck']),
    ...mapActions('editPlay', ['loadEditBoard', 'setTiles', 'setIsRelease']),

    async load() {
      await this.loginCheck()

      if (this.isLogin) {
        await this.loadEditBoard(this.uid)
        this.tiles = this.getTiles

        if (!this.uid) {
          this.tiles = board.resetTiles()
        }
      }
    },
    clickPlayButton() {
      this.$router.push({ name: 'play-id', params: { id: this.uid } })
    },
    clickRelease() {
      this.setIsRelease(!this.isRelease)
      this.save()
    },
    clickTile(tile) {
      console.log(this.tiles)
      console.log(tile)

      this.tiles = board.changeTile(this.tiles, tile.index)
      this.save()
    },
    changeSuggest() {
      this.save()
    },
    save() {
      /* eslint-disable no-console */
      if (this.suggest.length > 50) {
        return false
      }
      const response = firebaseOperation.setEditList(
        this.uid,
        this.tiles,
        this.suggest,
        this.isRelease
      )
      console.log(response)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins/board.scss';

.header-title {
  position: relative;
  font-size: 2rem;
  font-weight: bold;
  line-height: 80px;
  text-align: center;
}

.board-container {
  @include boardContainer;
  &.is-bg-2,
  &.is-bg-4 {
    color: #fff;
  }
}
.lead {
  font-size: 0.9rem;
}

.text {
  padding: 6px;
  width: 300px;
  height: 100px;
  border-radius: 4px;
  border: 1px solid #999;
}
</style>
