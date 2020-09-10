import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import MessageWindow from '@/components/MessageWindow'

storiesOf('MessageWindow', module)
  .addDecorator(withKnobs)
  .add('default', () => ({
    components: { MessageWindow },
    props: {
      isShow: {
        default: boolean('isShow', true)
      },
      message: {
        default: text('message', 'こんにちは')
      }
    },
    template: `
      <MessageWindow
        :is-show="isShow"
        :message="message"
      />
    `
  }))
