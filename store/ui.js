export const state = () => ({
  caption: {
    duration: 1000,
    isShow: false,
    message: 'ようこそ'
  },
  message: {
    count: 0,
    displayMessage: '',
    isShow: false,
    message: '',
    speed: 30,
    timer: null
  },
  pleaseTap: {
    isShow: false
  },
  toast: {
    duration: 2000,
    isShow: false,
    message: 'success!',
    status: 'success'
  }
})

export const mutations = {
  setCaption(state, caption) {
    state.caption = caption
  },
  setCaptionIsShow(state, isShow) {
    state.caption.isShow = isShow
  },
  setPleaseTapIsShow(state, isShow) {
    state.pleaseTap.isShow = isShow
  },
  setMessage(state, message) {
    state.message = message
  },
  setToast(state, toast) {
    state.toast = toast
  },
  setToastIsShow(state, isShow) {
    state.toast.isShow = isShow
  }
}

export const getters = {
  caption: state => {
    return state.caption
  },
  pleaseTap: state => {
    return state.pleaseTap
  },
  message: state => {
    return state.message
  },
  toast: state => {
    return state.toast
  }
}

export const actions = {
  // caption
  playCaption({ commit, state }) {
    commit('setCaptionIsShow', true)
    setTimeout(() => {
      commit('setCaptionIsShow', false)
    }, state.caption.duration)
  },
  setCaption({ commit }, caption) {
    commit('setCaption', caption)
  },
  // pleaseTap
  setPleaseTapIsShow({ commit }, isShow) {
    commit('setPleaseTapIsShow', isShow)
  },
  // message
  playMessage({ commit, state }) {},
  setMessage({ commit }, message) {
    commit('setMessage', message)
  },
  // toast
  playToast({ commit, state }) {
    commit('setToastIsShow', true)
    setTimeout(() => {
      commit('setToastIsShow', false)
    }, state.toast.duration)
  },
  setToast({ commit }, toast) {
    commit('setToast', toast)
  }
}
