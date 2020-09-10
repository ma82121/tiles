import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import CanvasAnimation from '@/components/CanvasAnimation'

storiesOf('CanvasAnimation', module)
  .addDecorator(withKnobs)
  .add('default', () => ({
    components: { CanvasAnimation },
    props: {
      play: {
        default: boolean('play', true)
      }
    },
    template: `
      <CanvasAnimation
        :play="play"
        @click="click"
      />
    `,
    methods: {
      click: action('click')
    }
  }))
