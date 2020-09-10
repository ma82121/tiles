<template>
  <div>
    clearStageIndex<br />
    <FormSelect
      :options="clearOptions"
      :selected="String(clearStageIndex)"
      @change="onChangeClear"
    /><br />
    currentStageIndex<br />
    <FormSelect
      :options="currentOptions"
      :selected="String(currentStageIndex)"
      @change="onChangeCurrent"
    /><br />
  </div>
</template>

<script>
import _ from 'lodash'

import { mapGetters, mapActions } from 'vuex'

import FormSelect from '@/components/FormSelect'

const createClearOptions = () => {
  const array = []
  const stage = _.range(-1, 25, 1)
  _.forEach(stage, stageValue => {
    array.push({
      label: String(stageValue),
      value: String(stageValue)
    })
  })
  return array
}

const createCurrentOptions = () => {
  const array = []
  const stage = _.range(0, 25, 1)
  _.forEach(stage, stageValue => {
    array.push({
      label: String(stageValue),
      value: String(stageValue)
    })
  })
  return array
}

export default {
  name: 'EditSinglePlay',
  components: {
    FormSelect
  },
  data() {
    return {
      clearOptions: createClearOptions(),
      currentOptions: createCurrentOptions()
    }
  },
  computed: {
    ...mapGetters('singlePlay', [
      'board',
      'clearStageIndex',
      'currentStageIndex',
      'currentStageIndexSuggest',
      'isEnding'
    ])
  },
  methods: {
    ...mapActions('singlePlay', ['setCurrentStage', 'setClearStage']),
    onChangeClear(value) {
      this.setClearStage(Number(value))
    },
    onChangeCurrent(value) {
      this.setCurrentStage(Number(value))
    }
  }
}
</script>
