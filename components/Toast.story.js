import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'

import Vuex, { mapGetters, mapActions } from 'vuex'

import Button from '@/components/Button'
import Toast from '@/components/Toast'

import {
  state as uiState,
  mutations as uiMutations,
  getters as uiGetters,
  actions as uiActions
} from '@/store/ui'

storiesOf('Toast', module)
  .addDecorator(withKnobs)
  .add('default', () => ({
    components: { Button, Toast },
    template: `
      <div>
        <Button @click="onClick">
          Button
        </Button>
        <Toast />
      </div>
    `,
    store: new Vuex.Store({
      modules: {
        ui: {
          namespaced: true,
          state: uiState,
          mutations: uiMutations,
          getters: uiGetters,
          actions: uiActions
        }
      }
    }),
    computed: {
      ...mapGetters('ui', ['toast'])
    },
    methods: {
      ...mapActions('ui', ['playToast', 'setToast']),
      onClick() {
        this.setToast({
          message: 'good!',
          status: 'success',
          duration: 3000,
          isShow: false
        })
        this.playToast()
      }
    }
  }))
