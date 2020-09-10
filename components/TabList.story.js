import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, select } from '@storybook/addon-knobs'

import TabList from '@/components/TabList'

storiesOf('TabList', module)
  .addDecorator(withKnobs)
  .add('default', () => ({
    components: { TabList },
    props: {
      selectedId: {
        default: select(
          'selectedId',
          {
            tutorial: 'tutorial',
            config: 'config'
          },
          'tutorial'
        )
      }
    },
    template: `
      <TabList
        :list="[
          { id: 'tutorial', label: '遊び方' },
          { id: 'config', label: '設定' }
        ]"
        :current-id="selectedId"
        @clickTab="clickTab"
      />
    `,
    methods: {
      clickTab: action('clickTab')
    }
  }))
