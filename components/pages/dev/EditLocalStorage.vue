<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </ul>
    <Button @click="onClickConsoleButton">
      localStorage「tiles」の情報をコンソール表示
    </Button>
    <Button @click="onClickDeleteButton">
      localStorage「tiles」の削除
    </Button>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  name: 'EditLocalStorage',
  components: {
    Button
  },
  methods: {
    onClickConsoleButton() {
      const items = localStorage.getItem('tiles')
        ? JSON.parse(localStorage.getItem('tiles'))
        : []
      console.log(items)
    },
    onClickDeleteButton() {
      localStorage.setItem('tiles', [])
    }
  }
}
</script>
