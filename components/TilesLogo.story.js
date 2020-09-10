import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import TilesLogo from '@/components/TilesLogo'

storiesOf('TilesLogo', module)
  .addDecorator(withKnobs)
  .add('default', () => ({
    components: { TilesLogo },
    props: {
      hasAnimation: {
        default: boolean('hasAnimation', true)
      }
    },
    template: `
      <TilesLogo
        :hasAnimation="hasAnimation"
      />
    `
  }))
