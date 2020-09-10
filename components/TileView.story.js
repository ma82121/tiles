import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs'

import TileView from '@/components/TileView'

storiesOf('TileView', module)
  .addDecorator(withKnobs)
  .add('default', () => ({
    components: { TileView },
    props: {
      type: {
        default: select(
          'type',
          {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4'
          },
          '1'
        )
      },
      index: {
        default: number('index', 0, { min: 0, max: 24 })
      },
      isOpen: {
        default: boolean('isOpen', false)
      },
      isOnBoard: {
        default: boolean('isOnBoard', false)
      },
      isRotate: {
        default: boolean('isRotate', false)
      },
      hasHelper: {
        default: boolean('hasHelper', false)
      },
      hasDebugHelper: {
        default: boolean('hasDebugHelper', false)
      }
    },
    template: `
      <TileView
        :type="type"
        :is-open="isOpen"
        :is-on-open="isOnBoard"
        :is-rotate="isRotate"
        :has-helper="hasHelper"
        :has-debug-helper="hasDebugHelper"
        :index="index"
        @click="click"
      />
    `,
    methods: {
      click: action('click')
    }
  }))
