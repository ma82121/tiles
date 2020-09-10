import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import MakingBoard from '@/pages/dev/making-board'

import {
  state as configState,
  mutations as configMutations,
  getters as configGetters,
  actions as configActions
} from '@/store/config'
import {
  state as debugState,
  mutations as debugMutations,
  getters as debugGetters,
  actions as debugActions
} from '@/store/debug'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('MakingBoard', () => {
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
        debug: {
          namespaced: true,
          state: debugState,
          mutations: debugMutations,
          getters: debugGetters,
          actions: debugActions
        }
      }
    })
  })

  test('snapshot', () => {
    const wrapper = shallowMount(MakingBoard, {
      store,
      localVue
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
