import { shallowMount } from '@vue/test-utils'
import CanvasAnimation from '@/components/CanvasAnimation'

describe('CanvasAnimation', () => {
  test('snapshot', () => {
    const wrapper = shallowMount(CanvasAnimation)
    expect(wrapper.element).toMatchSnapshot()
  })
})
