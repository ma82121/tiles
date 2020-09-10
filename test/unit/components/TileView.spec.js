import { shallowMount } from '@vue/test-utils'
import TileView from '@/components/TileView'

describe('TileView', () => {
  test('snapshot', () => {
    const wrapper = shallowMount(TileView)
    expect(wrapper.element).toMatchSnapshot()
  })
})
