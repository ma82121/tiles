<template>
  <div
    :class="[
      'tile',
      'is-type-' + type,
      'is-index-' + index,
      isOpen ? 'is-open' : '',
      isRotate ? 'is-rotate' : '',
      hasHelper ? 'has-helper' : '',
      isOnBoard ? 'is-on-board' : ''
    ]"
    @click="$emit('clickTile')"
  >
    <div class="tile-inner">
      <span class="tile-front" />
      <span class="tile-back" />
    </div>
    <div v-show="hasDebugHelper" class="tile-debug">
      <span class="tile-debug-index">{{ index }}</span>
      <span class="tile-debug-type">{{ type }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TileView',
  props: {
    type: {
      type: String,
      default: '1'
    },
    index: {
      type: Number,
      default: 0
    },
    isOpen: {
      type: Boolean,
      default: true
    },
    isOnBoard: {
      type: Boolean,
      default: true
    },
    isRotate: {
      type: Boolean,
      default: false
    },
    hasDebugHelper: {
      type: Boolean,
      default: false
    },
    hasHelper: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.tile {
  display: block;
  position: relative;
  width: 60px;
  height: 60px;
  perspective: 200;

  &.is-open .tile-inner {
    transform: rotateY(0deg);
  }

  .tile-inner {
    width: 60px;
    height: 60px;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateY(180deg);
    transition-duration: 0.5s;
  }

  .tile-front,
  .tile-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;
    backface-visibility: hidden;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .tile-front {
    background-color: #fff;
    background-position: center center;
    background-repeat: no-repeat;
    border: 1px solid #ccc;
  }

  .tile-back {
    background-color: #222;
    background-position: center center;
    background-repeat: no-repeat;
    border: 1px solid #ccc;
    transform: rotateY(180deg);
  }

  &.is-type-2 {
    .tile-back {
      background-color: #0f0;
    }
  }

  &.is-type-3 {
    .tile-back {
      background-color: #f00;
    }
  }

  &.is-type-4 {
    .tile-back {
      background-color: #ff0;
    }
  }

  // helper
  &.is-type-1.has-helper {
    .tile-front {
      background-image: url('../assets/images/helper-0.svg');
      border: 1px solid #222;
    }
    .tile-back {
      background-image: url('../assets/images/helper-1.svg');
      border: 1px solid #fff;
    }
  }

  &.is-type-2.has-helper {
    .tile-front {
      background-image: url('../assets/images/helper-0.svg');
      border: 1px solid #0f0;
    }
    .tile-back {
      background-image: url('../assets/images/helper-2.svg');
      border: 1px solid #fff;
    }
  }

  &.is-type-3.has-helper {
    .tile-front {
      background-image: url('../assets/images/helper-0.svg');
      border: 1px solid #f00;
    }
    .tile-back {
      background-image: url('../assets/images/helper-3.svg');
      border: 1px solid #fff;
    }
  }

  &.is-type-4.has-helper {
    .tile-front {
      background-image: url('../assets/images/helper-0.svg');
      border: 1px solid #ff0;
    }
    .tile-back {
      background-image: url('../assets/images/helper-4.svg');
      border: 1px solid #fff;
    }
  }

  &.is-rotate {
    .tile-inner {
      animation-name: rotate;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      // transform: rotateY(0deg);
      // transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
  }

  .tile-debug {
    .tile-debug-index {
      position: absolute;
      top: 0;
      left: 0;
      width: 60px;
      height: 60px;
      line-height: 60px;
      color: #666;
      font-size: 20px;
      text-align: center;
    }

    .tile-debug-type {
      position: absolute;
      top: 0;
      left: 0;
      width: 20px;
      height: 20px;
      line-height: 20px;
      color: #666;
      font-size: 10px;
      text-align: center;
    }
  }

  @for $i from 0 through 24 {
    &.is-on-board.is-index-#{$i} {
      position: absolute;
      top: 60px * floor($i / 5);
      left: 60px * ($i % 5);
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>
