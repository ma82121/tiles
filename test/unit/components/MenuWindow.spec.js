import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import firebase from '@/plugins/firebase'
import MenuWindow from '@/components/MenuWindow'

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
  state as singlePlayState,
  mutations as singlePlayMutations,
  getters as singlePlayGetters,
  actions as singlePlayActions
} from '@/store/singlePlay'

import {
  state as authState,
  mutations as authMutations,
  getters as authGetters,
  actions as authActions
} from '@/store/auth'

const localVue = createLocalVue()
localVue.use(Vuex, VueRouter)

describe('MenuWindow', () => {
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
        singlePlay: {
          namespaced: true,
          state: singlePlayState,
          mutations: singlePlayMutations,
          getters: singlePlayGetters,
          actions: singlePlayActions
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
    const wrapper = shallowMount(MenuWindow, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
