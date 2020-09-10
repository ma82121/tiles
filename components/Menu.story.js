import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-router'

import Vuex from 'vuex'
import MenuButton from '@/components/MenuButton'
import MenuWindow from '@/components/MenuWindow'

import {
  state as configState,
  mutations as configMutations
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
  actions as singlePlayActions
} from '@/store/singlePlay'
import { state as authState, mutations as authMutations } from '@/store/auth'

const Index = {
  template: `<div>index</div>`
}

const Tutorial = {
  template: `<div>tutorial</div>`
}

const PlayId = {
  template: `<div>play-id</div>`
}

storiesOf('Menu', module)
  .addDecorator(
    StoryRouter(
      {},
      {
        routes: [
          { path: '/', component: Index },
          { path: '/tutorial', component: Tutorial },
          { path: '/play-id', component: PlayId }
        ]
      }
    )
  )
  .add('default', () => ({
    components: { MenuButton, MenuWindow },
    template: `
      <div>
        <MenuButton />
        <MenuWindow />
      </div>
    `,
    store: new Vuex.Store({
      modules: {
        config: {
          namespaced: true,
          state: configState,
          mutations: configMutations
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
          actions: singlePlayActions
        },
        auth: {
          namespaced: true,
          state: authState,
          mutations: authMutations
        }
      }
    })
  }))
