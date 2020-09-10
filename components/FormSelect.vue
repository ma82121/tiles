<template>
  <select
    v-model="nowSelected"
    class="select"
    @change="onChange"
    @focus="onFocus"
    @blur="onBlur"
  >
    <option v-for="item in options" :key="item.value" :value="item.value">
      {{ item.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'FormSelect',
  props: {
    options: {
      require: true,
      type: Array,
      default: () => []
    },
    selected: {
      require: true,
      type: String,
      default: ''
    }
  },
  data() {
    return {
      nowSelected: ''
    }
  },
  watch: {
    selected() {
      this.nowSelected = this.selected
    }
  },
  mounted() {
    this.nowSelected = this.selected
  },
  methods: {
    onBlur() {
      this.$emit('blur', this.nowSelected)
    },
    onChange() {
      this.$emit('change', this.nowSelected)
    },
    onFocus() {
      this.$emit('focus', this.nowSelected)
    }
  }
}
</script>
