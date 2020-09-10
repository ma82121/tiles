export const state = () => ({
  debugMode: false
})

export const mutations = {
  switchDebugMode(state) {
    state.debugMode = !state.debugMode
  }
}

export const getters = {
  debugMode: state => {
    return state.debugMode
  }
}

export const actions = {
  switchDebugMode({ commit }) {
    commit('switchDebugMode')
  }
}
