<template lang="pug">
div(
  :class="['logo', hasAnimation ? 'has-animation' : 'none-animation']"
)
  .alphabet.is-t
    -for (var i=1; i<=25; i++)
      .alphabet-item
  .alphabet.is-i
    -for (var i=1; i<=25; i++)
      .alphabet-item
  .alphabet.is-l
    -for (var i=1; i<=25; i++)
      .alphabet-item
  .alphabet.is-e
    -for (var i=1; i<=25; i++)
      .alphabet-item
  .alphabet.is-s
    -for (var i=1; i<=25; i++)
      .alphabet-item
</template>

<script>
export default {
  name: 'TilesLogo',
  props: {
    hasAnimation: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 320px;
  margin: 0 auto;
  padding: 10px 0;
  background-color: #222;
}

.logo div {
  margin: 2px;
}

.alphabet {
  position: relative;
  width: 50px;
  height: 50px;
}

.alphabet-item {
  content: '';
  width: 10px;
  height: 10px;
  position: absolute;
  background: #fff;
  border: 1px solid #222;
  box-sizing: border-box;
  opacity: 0.5;
}

@for $i from 0 through 24 {
  .alphabet-item:nth-of-type(#{$i + 1}) {
    top: 10px * floor($i / 5);
    left: 10px * ($i % 5);
  }
}

$T: 1, 2, 3, 4, 5, 8, 13, 18, 23;
$I: 2, 3, 4, 8, 13, 18, 22, 23, 24;
$L: 1, 6, 11, 16, 22, 23, 24, 25;
$E: 2, 3, 4, 5, 6, 11, 12, 13, 14, 15, 16, 22, 23, 24, 25;
$S: 2, 3, 4, 5, 6, 12, 13, 14, 20, 21, 22, 23, 24;
$color: #fff;

@each $num in $T {
  .alphabet.is-t .alphabet-item:nth-of-type(#{$num}) {
    background: $color;
  }
}
@each $num in $I {
  .alphabet.is-i .alphabet-item:nth-of-type(#{$num}) {
    background: $color;
  }
}
@each $num in $L {
  .alphabet.is-l .alphabet-item:nth-of-type(#{$num}) {
    background: $color;
  }
}
@each $num in $E {
  .alphabet.is-e .alphabet-item:nth-of-type(#{$num}) {
    background: $color;
  }
}
@each $num in $S {
  .alphabet.is-s .alphabet-item:nth-of-type(#{$num}) {
    background: $color;
  }
}

.logo.none-animation {
  @for $i from 1 through 25 {
    .alphabet.is-t .alphabet-item:nth-of-type(#{$i}) {
      opacity: 0.2;
      transform: translate(1px, 2px);
    }
    .alphabet.is-i .alphabet-item:nth-of-type(#{$i}) {
      opacity: 0.2;
      transform: translate(1px, 2px);
    }
    .alphabet.is-l .alphabet-item:nth-of-type(#{$i}) {
      opacity: 0.2;
      transform: translate(1px, 2px);
    }
    .alphabet.is-e .alphabet-item:nth-of-type(#{$i}) {
      opacity: 0.2;
      transform: translate(1px, 2px);
    }
    .alphabet.is-s .alphabet-item:nth-of-type(#{$i}) {
      opacity: 0.2;
      transform: translate(1px, 2px);
    }
  }
  @each $num in $T {
    .alphabet.is-t .alphabet-item:nth-of-type(#{$num}) {
      opacity: 0.8;
      transform: translate(-1px, -2px);
    }
  }
  @each $num in $I {
    .alphabet.is-i .alphabet-item:nth-of-type(#{$num}) {
      opacity: 0.8;
      transform: translate(-1px, -2px);
    }
  }
  @each $num in $L {
    .alphabet.is-l .alphabet-item:nth-of-type(#{$num}) {
      opacity: 0.8;
      transform: translate(-1px, -2px);
    }
  }
  @each $num in $E {
    .alphabet.is-e .alphabet-item:nth-of-type(#{$num}) {
      opacity: 0.8;
      transform: translate(-1px, -2px);
    }
  }
  @each $num in $S {
    .alphabet.is-s .alphabet-item:nth-of-type(#{$num}) {
      opacity: 0.8;
      transform: translate(-1px, -2px);
    }
  }
}

.logo.has-animation {
  @for $i from 1 through 25 {
    .alphabet.is-t .alphabet-item:nth-of-type(#{$i}) {
      animation: down 0.2s linear (0.02 * $i + s) 1 forwards;
    }

    .alphabet.is-i .alphabet-item:nth-of-type(#{$i}) {
      animation: down 0.2s linear (0.02 * ($i + 25) + s) 1 forwards;
    }

    .alphabet.is-l .alphabet-item:nth-of-type(#{$i}) {
      animation: down 0.2s linear (0.02 * ($i + 50) + s) 1 forwards;
    }

    .alphabet.is-e .alphabet-item:nth-of-type(#{$i}) {
      animation: down 0.2s linear (0.02 * ($i + 75) + s) 1 forwards;
    }

    .alphabet.is-s .alphabet-item:nth-of-type(#{$i}) {
      animation: down 0.2s linear (0.02 * ($i + 100) + s) 1 forwards;
    }
  }

  @each $num in $T {
    .alphabet.is-t .alphabet-item:nth-of-type(#{$num}) {
      animation: up 0.2s linear (0.02 * $num + s) 1 forwards;
    }
  }
  @each $num in $I {
    .alphabet.is-i .alphabet-item:nth-of-type(#{$num}) {
      animation: up 0.2s linear (0.02 * ($num + 25) + s) 1 forwards;
    }
  }
  @each $num in $L {
    .alphabet.is-l .alphabet-item:nth-of-type(#{$num}) {
      animation: up 0.2s linear (0.02 * ($num + 50) + s) 1 forwards;
    }
  }
  @each $num in $E {
    .alphabet.is-e .alphabet-item:nth-of-type(#{$num}) {
      animation: up 0.2s linear (0.02 * ($num + 75) + s) 1 forwards;
    }
  }
  @each $num in $S {
    .alphabet.is-s .alphabet-item:nth-of-type(#{$num}) {
      animation: up 0.2s linear (0.02 * ($num + 100) + s) 1 forwards;
    }
  }
}

@keyframes up {
  0% {
    opacity: 0.5;
    transform: translate(0px, 0px);
  }
  100% {
    opacity: 0.8;
    transform: translate(-1px, -2px);
  }
}

@keyframes down {
  0% {
    opacity: 0.5;
    transform: translate(0px, 0px);
  }
  100% {
    opacity: 0.2;
    transform: translate(1px, 2px);
  }
}
</style>
