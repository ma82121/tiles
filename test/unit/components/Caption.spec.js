import { shallowMount } from '@vue/test-utils'
import Caption from '@/components/Caption'

describe('Caption', () => {
  test('snapshot', () => {
    const wrapper = shallowMount(Caption)
    expect(wrapper.element).toMatchSnapshot()
  })
})
