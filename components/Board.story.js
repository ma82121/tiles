import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import Board from '@/components/Board'

storiesOf('Board', module)
  .addDecorator(withKnobs)
  .add('default', () => ({
    components: { Board },
    props: {
      useHelper: {
        default: boolean('useHelper', false)
      },
      useDebugHelper: {
        default: boolean('useDebugHelper', false)
      }
    },
    template: `
      <Board
        :tiles="[
          { index: 0, type: '1', isOpen: false },
          { index: 1, type: '2', isOpen: false },
          { index: 2, type: '3', isOpen: false },
          { index: 3, type: '4', isOpen: false },
          { index: 4, type: '1', isOpen: false },
          { index: 5, type: '1', isOpen: false },
          { index: 6, type: '1', isOpen: false },
          { index: 7, type: '1', isOpen: true },
          { index: 8, type: '1', isOpen: false },
          { index: 9, type: '1', isOpen: false },
          { index: 10, type: '1', isOpen: false },
          { index: 11, type: '1', isOpen: false },
          { index: 12, type: '1', isOpen: false },
          { index: 13, type: '1', isOpen: false },
          { index: 14, type: '1', isOpen: false },
          { index: 15, type: '1', isOpen: false },
          { index: 16, type: '1', isOpen: false },
          { index: 17, type: '1', isOpen: true },
          { index: 18, type: '1', isOpen: false },
          { index: 19, type: '1', isOpen: false },
          { index: 20, type: '1', isOpen: false },
          { index: 21, type: '1', isOpen: false },
          { index: 22, type: '1', isOpen: false },
          { index: 23, type: '1', isOpen: false },
          { index: 24, type: '1', isOpen: false }
        ]"
        :use-debug-helper="useDebugHelper"
        :use-helper="useHelper"
      />
    `
  }))
