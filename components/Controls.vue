<template>
  <div :class="['controls', 'is-bg-' + bg]">
    <div class="controls-item">
      <div
        class="button is-prev"
        :disabled="boardCount === 0"
        @click="clickPrev"
      >
        <i class="fas fa-caret-left fa-4x"></i>
      </div>
    </div>
    <div class="controls-item is-stage">
      <div class="text-box">
        <div class="text-box-head">
          STAGE
        </div>
        <div class="text-box-body">
          <span v-if="stageCurrent >= 0">
            {{ stageCurrent + 1 }}
          </span>
          <span v-else>
            -
          </span>
        </div>
      </div>
    </div>
    <div class="controls-item">
      <div class="button is-retry" @click="clickRetry">
        <i class="fas fa-undo-alt fa-3x"></i>
      </div>
    </div>
    <div class="controls-item is-count">
      <div class="text-box">
        <div class="text-box-head">
          COUNT
        </div>
        <div class="text-box-body">
          {{ boardCount }}
        </div>
      </div>
    </div>
    <div class="controls-item">
      <div
        class="button is-next"
        :disabled="boardCount > boardLogs.length - 1"
        @click="clickNext"
      >
        <i class="fas fa-caret-right fa-4x"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Controls',
  props: {
    stageCurrent: {
      type: Number,
      default: -1
    },
    boardCount: {
      type: Number,
      default: 0
    },
    boardLogs: {
      type: Array,
      default: null
    },
    bg: {
      type: String,
      default: '1'
    }
  },
  methods: {
    clickPrev(e) {
      this.$emit('clickPrev', e)
    },
    clickNext(e) {
      this.$emit('clickNext', e)
    },
    clickRetry(e) {
      this.$emit('clickRetry', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.controls {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  .controls-item {
    box-sizing: border-box;
    width: 60px;
    height: 60px;
  }
}

.text-box {
  position: relative;
  width: 60px;
  height: 60px;
  color: #222;
  line-height: 1;

  .text-box-head {
    padding: 10px 0 5px;
    font-size: 0.7rem;
    font-weight: bold;
    text-align: center;
  }

  .text-box-body {
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
  }
}

.controls.is-bg-2,
.controls.is-bg-4 {
  .text-box {
    color: #fff;
  }
}

.button {
  position: relative;
  width: 60px;
  height: 60px;
  color: #fff;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.is-prev {
    background-color: #e2c44d;

    i {
      margin-left: -3px;
    }

    &[disabled] {
      color: #666;
      background-color: #443a12;
    }
  }

  &.is-next {
    background-color: #e2c44d;

    i {
      margin-right: -3px;
    }

    &[disabled] {
      color: #666;
      background-color: #443a12;
    }
  }

  &.is-retry {
    background: #1cc4fd;

    i {
      position: absolute;
      top: 7px;
      left: 7px;
      width: 40px;
      height: 40px;
    }

    path {
      fill: #fff;
    }
  }
}
</style>
