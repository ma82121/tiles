import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, number, select } from '@storybook/addon-knobs'

import Bg from '@/components/Bg'
import Controls from '@/components/Controls'

storiesOf('Controls', module)
  .addDecorator(withKnobs)
  .add('default', () => ({
    components: { Bg, Controls },
    props: {
      stageCurrent: {
        default: number('stageCurrent', 0, { min: 0, max: 24 })
      },
      boardCount: {
        default: number('boardCount', 100, { min: 0 })
      },
      bg: {
        default: select(
          'bg',
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
      <div>
        <Bg
          :type="bg"
          :is-fixed="true"
        />
        <Controls
          :stageCurrent="stageCurrent"
          :boardCount="boardCount"
          :boardLogs="[]"
          :bg="bg"
          @clickPrev="clickPrev"
          @clickNext="clickNext"
          @clickRetry="clickRetry"
        />
      </div>
    `,
    methods: {
      clickPrev: action('clickPrev'),
      clickNext: action('clickNext'),
      clickRetry: action('clickRetry')
    }
  }))
