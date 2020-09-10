<template>
  <div class="board">
    <TileView
      v-for="tile in tiles"
      :key="tile.index"
      :index="tile.index"
      :type="tile.type"
      :is-open="tile.isOpen"
      :has-debug-helper="useDebugHelper"
      :has-helper="useHelper"
      @clickTile="clickTile(tile)"
    />
  </div>
</template>

<script>
import TileView from '@/components/TileView'

export default {
  name: 'Board',
  components: {
    TileView
  },
  props: {
    tiles: {
      require: true,
      type: Array,
      default: () => []
    },
    useDebugHelper: {
      type: Boolean,
      default: false
    },
    useHelper: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clickTile(tile) {
      this.$emit('click', tile)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins/board.scss';

.board {
  @include board;
}
</style>
