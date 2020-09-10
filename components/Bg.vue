<template>
  <div
    :class="[
      'bg',
      type ? 'is-type-' + type : '',
      isThumb ? 'is-thumb' : '',
      isFixed && !isThumb ? 'is-fixed' : ''
    ]"
    @click="click"
  />
</template>

<script>
export default {
  name: 'Bg',
  props: {
    isFixed: {
      type: Boolean,
      default: true
    },
    isThumb: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: '1'
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
.bg {
  width: 100%;
  height: 100%;
  min-width: 50px;
  min-height: 50px;

  &.is-fixed {
    position: fixed;
    top: 0;
    left: 0;
  }

  &.is-thumb {
    width: 50px;
    height: 50px;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  &.is-type-1 {
    background-color: #fffeee;
  }

  &.is-type-2 {
    background-color: #222222;
  }

  @mixin getAnimationDeclaration($animation-name, $second: 1s) {
    animation-name: $animation-name;
    animation-duration: $second;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-direction: normal;
    animation-fill-mode: forwards;
  }

  &.is-type-3 {
    background: linear-gradient(
      135deg,
      rgba(0, 153, 239, 1) 0%,
      rgba(0, 153, 255, 1) 25%,
      rgba(0, 239, 235, 1) 26%,
      rgba(0, 239, 235, 1) 49%,
      rgba(0, 153, 239, 1) 50%,
      rgba(0, 153, 239, 1) 75%,
      rgba(0, 239, 235, 1) 76%
    );
    background-size: 50px 50px;
    @include getAnimationDeclaration(animation-diagonal, 1s);
  }

  &.is-type-4 {
    background: radial-gradient(black 15%, transparent 16%) 0 0,
      radial-gradient(black 15%, transparent 16%) 25px 25px,
      radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 0 1px,
      radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 25px 26px;
    background-color: #333;
    background-size: 50px 50px;
    @include getAnimationDeclaration(animation-carbon, 2s);
  }

  &.is-type-5 {
    background-color: white;
    background-image: linear-gradient(
        90deg,
        rgba(200, 0, 0, 0.1) 50%,
        transparent 50%
      ),
      linear-gradient(rgba(200, 0, 0, 0.1) 50%, transparent 50%);
    background-size: 50px 50px;
    @include getAnimationDeclaration(animation-check, 2s);
  }

  &.is-type-6 {
    background-color: #ccffcc;
    background-image: linear-gradient(
        45deg,
        #ffffcc 25%,
        transparent 25%,
        transparent 75%,
        #ffffcc 75%,
        #ffffcc
      ),
      linear-gradient(
        45deg,
        #ffffcc 25%,
        transparent 25%,
        transparent 75%,
        #ffffcc 75%,
        #ffffcc
      );
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    @include getAnimationDeclaration(animation-tile, 1s);
  }

  @keyframes animation-diagonal {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -50px 0px;
    }
  }

  @keyframes animation-carbon {
    0% {
      background-position: 0 0, 25px 25px;
    }
    100% {
      background-position: -25px -25px, 0 0;
    }
  }

  @keyframes animation-check {
    0% {
      background-position: 0 0, 50px 50px;
    }
    100% {
      background-position: -50px -50px, 0 0;
    }
  }

  @keyframes animation-tile {
    0% {
      background-position: 0 0, 25px 25px;
    }
    100% {
      background-position: -25px -25px, 0 0;
    }
  }
}
</style>
