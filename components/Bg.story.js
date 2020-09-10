import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'

import Bg from '@/components/Bg'

storiesOf('Bg', module)
  .addDecorator(withKnobs)
  .add('default', () => ({
    components: { Bg },
    props: {
      isFixed: {
        default: boolean('isFixed', true)
      },
      isThumb: {
        default: boolean('isThumb', false)
      },
      type: {
        default: select(
          'type',
          {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
            '6': '6'
          },
          '1'
        )
      }
    },
    template: `
      <Bg
        :type="type"
        :is-fixed="isFixed"
        :is-thumb="isThumb"
        @click="click"
      />
    `,
    methods: {
      click: action('click')
    }
  }))
