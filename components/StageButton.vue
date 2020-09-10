<template>
  <div
    :class="['stage-button', isDisabled ? 'is-disabled' : '']"
    @click="click"
  >
    <div v-show="stageNumber > -1" class="stage-button-head">
      {{ stageNumber + 1 }}
    </div>
    <div class="stage-button-body">
      <div class="stage-button-board">
        <div
          v-for="tile in stage"
          :key="tile.id"
          :class="['tile', 'is-' + tile.type, tile.isOpen ? 'is-open' : '']"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StageButton',
  props: {
    stage: {
      type: Array,
      default: () => []
    },
    stageNumber: {
      type: Number,
      default: -1
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.stage-button {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 4px;
  padding: 5px;
  cursor: pointer;
  color: #fff;
  background-color: #1cc4fd;

  width: 80px;
  height: 80px;

  &.is-disabled {
    background-color: #444;
    cursor: default;

    .tile {
      display: none;
    }
  }

  .stage-button-head {
    margin: -3px 0 3px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    line-height: 1;
  }

  .stage-button-body {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .stage-button-board {
    position: relative;
    width: 50px;
    height: 50px;
  }

  .tile {
    position: absolute;
    width: 11px;
    height: 11px;
    border-radius: 2px;
    box-sizing: border-box;
    border: 1px solid #999;

    @for $i from 0 through 24 {
      &:nth-of-type(#{$i + 1}) {
        top: 10px * floor($i / 5);
        left: 10px * ($i % 5);
      }
    }

    &.is-1 {
      background-color: #222;
    }

    &.is-2 {
      background-color: #0f0;
    }

    &.is-3 {
      background-color: #f00;
    }

    &.is-4 {
      background-color: #ff0;
    }

    &.is-open {
      &.is-1,
      &.is-2,
      &.is-3,
      &.is-4 {
        background-color: #fff;
      }
    }
  }
}
</style>
