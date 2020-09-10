import FirebaseOperation from '@/assets/scripts/firebase/FirebaseOperation'
const firebaseOperation = new FirebaseOperation()

export const state = () => ({
  isRelease: false,
  stageId: null,
  suggest: '',
  tiles: []
})

export const mutations = {
  setStageId(state, stageId) {
    state.stageId = stageId
  },
  setTiles(state, tiles) {
    state.tiles = tiles
  },
  setIsRelease(state, isRelease) {
    state.isRelease = isRelease
  },
  setSuggest(state, suggest) {
    state.suggest = suggest
  }
}

export const getters = {
  stageId: state => {
    return state.stageId
  },
  getTiles: state => {
    return state.tiles
  },
  getSuggest: state => {
    return state.suggest
  },
  isRelease: state => {
    return state.isRelease
  }
}

export const actions = {
  async loadEditBoard({ commit }, id) {
    const response = await firebaseOperation.loadEditBoard(id)
    if (response) {
      commit('setTiles', response.tiles)
      commit('setSuggest', response.suggest)
      commit('setIsRelease', response.isRelease)
    }
  },

  async setEditBoard({ commit, state }) {
    await firebaseOperation.setEditBoard(
      state.uid,
      state.tiles,
      state.suggest,
      state.isRelease
    )
  },

  setIsRelease({ commit }, isRelease) {
    commit('setIsRelease', isRelease)
  },
  setStageId({ commit }, stageId) {
    commit('setStageId', stageId)
  },
  setTiles({ commit }, tiles) {
    commit('setTiles', tiles)
  },
  setSuggest({ commit }, suggest) {
    commit('setSuggest', suggest)
  }
}
