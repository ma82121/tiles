import { shallowMount } from '@vue/test-utils'
import MessageWindow from '@/components/MessageWindow'

describe('MessageWindow', () => {
  test('snapshot', () => {
    const wrapper = shallowMount(MessageWindow)
    expect(wrapper.element).toMatchSnapshot()
  })
})
