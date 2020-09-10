import { shallowMount } from '@vue/test-utils'
import Toast from '@/components/Toast'

describe('Toast', () => {
  test('snapshot', () => {
    const wrapper = shallowMount(Toast)
    expect(wrapper.element).toMatchSnapshot()
  })
})
