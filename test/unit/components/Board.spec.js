import { shallowMount } from '@vue/test-utils'
import Board from '@/components/Board'

describe('Board', () => {
  test('snapshot', () => {
    const wrapper = shallowMount(Board)
    expect(wrapper.element).toMatchSnapshot()
  })
})
