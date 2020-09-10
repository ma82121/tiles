import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import ClearAnimation from '@/components/ClearAnimation'

storiesOf('ClearAnimation', module)
  .addDecorator(withKnobs)
  .add('default', () => ({
    components: { ClearAnimation },
    props: {
      isShow: {
        default: boolean('isShow', false)
      }
    },
    template: `
      <ClearAnimation
        :is-show="isShow"
        @click="click"
      />
    `,
    methods: {
      click: action('click')
    }
  }))
