import { shallowMount } from '@vue/test-utils'
import TilesLogo from '@/components/TilesLogo'

describe('TilesLogo', () => {
  test('snapshot', () => {
    const wrapper = shallowMount(TilesLogo)
    expect(wrapper.element).toMatchSnapshot()
  })
})
