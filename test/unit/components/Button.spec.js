import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button'

describe('Button', () => {
  test('snapshot', () => {
    const wrapper = shallowMount(Button)
    expect(wrapper.element).toMatchSnapshot()
  })
})
