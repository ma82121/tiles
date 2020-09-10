import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'

import Button from '@/components/Button.vue'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => ({
    components: { Button },
    props: {
      isActive: {
        default: boolean('isActive', false)
      },
      disabled: {
        default: boolean('disabled', false)
      },
      size: {
        default: select(
          'size',
          {
            '-': '',
            half: 'half',
            full: 'full'
          },
          ''
        )
      },
      theme: {
        default: select(
          'type',
          {
            primary: 'primary',
            danger: 'danger'
          },
          'primary'
        )
      }
    },
    template: `
      <Button
        :disabled="disabled"
        :is-active="isActive"
        :size="size"
        :theme="theme"
        @blur="onBlur"
        @click="onClick"
        @focus="onFocus"
      >
        Button
      </Button>
    `,
    methods: {
      onBlur: action('onBlur'),
      onClick: action('onClick'),
      onFocus: action('onFocus')
    }
  }))
