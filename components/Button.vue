<template>
  <button
    :class="classes"
    :disabled="disabled || false"
    @click="onClick"
    @focus="onFocus"
    @blur="onBlur"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      const array = ['button']
      if (this.theme) array.push('is-' + this.theme)
      if (this.isActive) array.push('is-active')
      if (this.size) array.push('is-' + this.size)
      return array
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
    onFocus() {
      this.$emit('focus')
    },
    onBlur() {
      this.$emit('blur')
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  font-size: 14px;
  font-weight: bold;
  border: solid 1px;
  border-radius: 5px;
  padding: 2px 6px 3px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-out;
  -webkit-font-smoothing: antialiased;

  align-items: center;
  justify-content: center;
  display: flex;

  width: 180px;
  height: 45px;

  &:hover {
    opacity: 0.9;
  }

  &.is-active {
    opacity: 0.7;
  }

  &.is-full {
    width: 100%;
  }

  &.is-half {
    width: 50%;
  }

  &.is-primary {
    background-color: #1cc4fd;
    border-color: #2e6da4;
    color: #fff;
  }

  &.is-danger {
    background-color: #d9534f;
    border-color: #d43f3a;
    color: #fff;
  }

  &[disabled] {
    color: #aaa;
    background: #ddd;
    border-color: #ddd;
    cursor: default;
  }
}
</style>
