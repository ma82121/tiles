import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import firebase from '@/plugins/firebase'
import Creation from '@/pages/creation'
import {
  state as configState,
  mutations as configMutations,
  getters as configGetters,
  actions as configActions
} from '@/store/config'
import {
  state as menuState,
  mutations as menuMutations,
  getters as menuGetters,
  actions as menuActions
} from '@/store/menu'
import {
  state as authState,
  mutations as authMutations,
  getters as authGetters,
  actions as authActions
} from '@/store/auth'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Creation', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        config: {
          namespaced: true,
          state: configState,
          mutations: configMutations,
          getters: configGetters,
          actions: configActions
        },
        menu: {
          namespaced: true,
          state: menuState,
          mutations: menuMutations,
          getters: menuGetters,
          actions: menuActions
        },
        auth: {
          namespaced: true,
          state: authState,
          mutations: authMutations,
          getters: authGetters,
          actions: authActions
        }
      }
    })
  })

  test('snapshot', () => {
    const wrapper = shallowMount(Creation, {
      store,
      localVue
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
