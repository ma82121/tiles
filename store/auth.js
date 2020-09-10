import FirebaseOperation from '@/assets/scripts/firebase/FirebaseOperation'
const firebaseOperation = new FirebaseOperation()

export const state = () => ({
  displayName: '',
  uid: null
})

export const mutations = {
  setDisplayName(state, displayName) {
    state.displayName = displayName
  },
  setUid(state, uid) {
    state.uid = uid
  }
}

export const getters = {
  displayName: state => {
    return state.displayName
  },
  isLogin: state => {
    return state.uid !== null
  },
  uid: state => {
    return state.uid
  }
}

export const actions = {
  async loginCheck({ commit }) {
    const response = await firebaseOperation.authCheck()
    if (response) {
      commit('setDisplayName', response.displayName)
      commit('setUid', response.uid)
    }
  },
  login() {
    firebaseOperation.signInWithRedirect()
  },
  logout({ commit }) {
    firebaseOperation.signOut()
    commit('setDisplayName', '')
    commit('setUid', null)
  }
}
