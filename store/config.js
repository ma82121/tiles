export const state = () => ({
  bg: '1',
  useHelper: false,
  useSuggest: false
})

export const mutations = {
  setConfigBg(state, string) {
    state.bg = String(string)
  },
  switchConfiUseSuggest(state) {
    state.useSuggest = !state.useSuggest
  },
  switchConfiUseHelper(state) {
    state.useHelper = !state.useHelper
  }
}

export const getters = {
  bg: state => {
    return state.bg
  },
  useHelper: state => {
    return state.useHelper
  },
  useSuggest: state => {
    return state.useSuggest
  }
}

export const actions = {
  setConfigBg({ commit }, bg) {
    commit('setConfigBg', bg)
  },
  switchConfiUseSuggest({ commit }) {
    commit('switchConfiUseSuggest')
  },
  switchConfiUseHelper({ commit }) {
    commit('switchConfiUseHelper')
  }
}
