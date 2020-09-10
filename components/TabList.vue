<template>
  <ul class="tablist" role="tablist">
    <li
      v-for="item in list"
      :key="item.id"
      :class="{ 'is-current': currentId === item.id }"
      role="tab"
      class="tab"
      @click="clickTab(item.id)"
    >
      {{ item.label }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TabList',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    currentId: {
      type: String,
      default: ''
    }
  },
  methods: {
    clickTab(string) {
      this.$emit('clickTab', string)
    }
  }
}
</script>

<style lang="scss" scoped>
.tablist {
  display: flex;
  margin: 0 0 20px;
  padding: 0;
  width: 100%;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid #1cc4fd;
  overflow: hidden;

  .tab {
    flex: 1;
    padding: 0 2px;
    box-sizing: border-box;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1cc4fd;
    border-right: 1px solid #fff;
    color: #fff;
    font-size: 0.65rem;

    &:last-child {
      border-right: none;
    }

    &.is-current {
      background-color: #fff;
      color: #1cc4fd;
    }
  }
}

@media screen and (min-width: 400px) {
  .tablist {
    .tab {
      font-size: 0.8rem;
    }
  }
}
</style>
