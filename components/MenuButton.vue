<template>
  <div
    :class="[
      'menu-button',
      isFixed ? 'is-fixed' : '',
      isShow ? 'is-menu-open' : ''
    ]"
    @click="onClick"
  >
    <span class="menu-hamburger"></span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MenuButton',
  props: {
    isFixed: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapGetters('menu', ['isShow'])
  },
  methods: {
    ...mapActions('menu', ['switchMenu']),
    onClick() {
      this.switchMenu()
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-button {
  width: 60px;
  height: 60px;
  background-color: #1cc4fd;
  border-radius: 4px;
  box-shadow: 0px 2px 12px rgba(#000, 0.2);

  &.is-fixed {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 100;
  }

  &.is-menu-open > span {
    height: 0;

    &:after,
    &:before {
      top: 0;
      left: -3px;
      width: 46px;
    }

    &:after {
      transform: rotate(-45deg);
    }

    &:before {
      transform: rotate(45deg);
    }
  }
}

.menu-hamburger {
  display: inline-block;
  position: relative;
  height: 2px;
  width: 40px;
  top: 18px;
  left: 10px;
  border-radius: 1px;
  background: #fff;
  vertical-align: middle;

  &:before,
  &:after {
    display: inline-block;
    position: absolute;
    content: '';
    height: 2px;
    border-radius: 1px;
    background: #fff;
    transition: all 200ms;
  }

  &:before {
    top: -12px;
    width: 40px;
  }

  &:after {
    top: 12px;
    width: 40px;
  }
}
</style>
