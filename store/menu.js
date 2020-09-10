import FirebaseOperation from '@/assets/scripts/firebase/FirebaseOperation'
const firebaseOperation = new FirebaseOperation()

export const state = () => ({
  editList: [],
  isShow: false,
  selectedId: 'tutorial'
})

export const mutations = {
  setMenuDisplay(state, boolean) {
    state.isShow = boolean
  },
  setMenuSelectedId(state, string) {
    state.selectedId = string
  },
  openMenu(state) {
    state.isShow = true
  },
  closeMenu(state) {
    state.isShow = false
  },
  switchMenu(state) {
    state.isShow = !state.isShow
  },
  setEditList(state, response) {
    state.editList = response
  }
}

export const getters = {
  editList: state => {
    return state.editList
  },
  isShow: state => {
    return state.isShow
  },
  selectedId: state => {
    return state.selectedId
  }
}

export const actions = {
  closeMenu({ commit }) {
    commit('closeMenu')
  },
  async loadMenu({ commit }) {
    const response = await firebaseOperation.loadEditListAll()
    if (response) {
      commit('setEditList', response)
    }
  },
  switchMenu({ commit }) {
    commit('switchMenu')
  },
  setMenuSelectedId({ commit }, selectedId) {
    commit('setMenuSelectedId', selectedId)
  }
}
