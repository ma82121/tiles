export const state = () => ({
  clearStageIndex: -1, // -1 - 24
  currentStageIndex: 0 // 0 - 24
})

export const mutations = {
  setIsEnding(state, isEnding) {
    state.isEnding = isEnding
  },
  setClearStage(state, clearStageIndex) {
    state.clearStageIndex = clearStageIndex
  },
  setCurrentStage(state, currentStageIndex) {
    state.currentStageIndex = currentStageIndex
  }
}

export const getters = {
  clearStageIndex: state => {
    return state.clearStageIndex
  },
  currentStageIndex: state => {
    return state.currentStageIndex
  }
}

export const actions = {
  /**
   * ステージクリア時の処理
   */
  nextStage({ commit, state }) {
    // 最高記録の更新
    if (state.clearStageIndex < state.currentStageIndex) {
      commit('setClearStage', state.currentStageIndex)
    }

    // 最後のステージをクリアした
    if (state.currentStageIndex === 24) {
      commit('setCurrentStage', 0)
      return
    }

    // それ以外のステージをクリアした
    commit('setCurrentStage', state.currentStageIndex + 1)
  },

  setClearStage({ commit }, clearStageIndex) {
    commit('setClearStage', clearStageIndex)
  },
  setCurrentStage({ commit }, currentStageIndex) {
    commit('setCurrentStage', currentStageIndex)
  }
}
