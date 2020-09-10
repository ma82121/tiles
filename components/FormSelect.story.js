import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import FormSelect from '@/components/FormSelect'

storiesOf('FormSelect', module)
  .addDecorator(withKnobs)
  .add('Minimun', () => ({
    components: { FormSelect },
    template: `
      <FormSelect
        :options="[{
          label: '1',
          value: '1'
        },
        {
          label: '2',
          value: '2'
        }]"
        selected="1"
        @blur="onBlur"
        @change="onChange"
        @focus="onFocus"
      />
    `,
    methods: {
      onBlur: action('onBlur'),
      onChange: action('onChange'),
      onFocus: action('onFocus')
    }
  }))
