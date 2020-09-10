import { shallowMount } from '@vue/test-utils'
import ClearAnimation from '@/components/ClearAnimation'

describe('ClearAnimation', () => {
  test('snapshot', () => {
    const wrapper = shallowMount(ClearAnimation)
    expect(wrapper.element).toMatchSnapshot()
  })
})
