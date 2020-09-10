import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'

import Vuex, { mapGetters, mapActions } from 'vuex'

import Button from '@/components/Button'
import Caption from '@/components/Caption'

import {
  state as uiState,
  mutations as uiMutations,
  getters as uiGetters,
  actions as uiActions
} from '@/store/ui'

storiesOf('Caption', module)
  .addDecorator(withKnobs)
  .add('default', () => ({
    components: { Button, Caption },
    template: `
      <div>
        <Button @click="onClick">Button</Button>
        <Caption />
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
      ...mapGetters('ui', ['caption'])
    },
    methods: {
      ...mapActions('ui', ['playCaption', 'setCaption']),
      onClick() {
        this.setCaption({
          message: 'success',
          duration: 3000,
          isShow: false
        })
        this.playCaption()
      }
    }
  }))
