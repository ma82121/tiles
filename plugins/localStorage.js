import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'tiles',
    paths: ['config', 'debug', 'singlePlay']
  })(store)
}
