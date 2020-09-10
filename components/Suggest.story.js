import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import Suggest from '@/components/Suggest'

storiesOf('Suggest', module)
  .addDecorator(withKnobs)
  .add('default', () => ({
    components: { Suggest },
    props: {
      isShow: {
        default: boolean('isShow', true)
      },
      message: {
        default: text('message', 'こんにちは')
      }
    },
    template: `
      <Suggest
        :is-show="isShow"
        :message="message"
      />
    `
  }))
