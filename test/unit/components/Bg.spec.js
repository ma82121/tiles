import { shallowMount } from '@vue/test-utils'
import Bg from '@/components/Bg'

describe('Bg', () => {
  describe('props', () => {
    test('isFixedがtrueの時、is-fixedクラスを付加すること', () => {
      const wrapper = shallowMount(Bg, {
        propsData: {
          isFixed: true
        }
      })
      const bg = wrapper.find('.bg')
      expect(bg.contains('.is-fixed')).toBe(true)
    })
    test('isFixedがfalseの時、is-fixedクラスが付加されないこと', () => {
      const wrapper = shallowMount(Bg, {
        propsData: {
          isFixed: false
        }
      })
      const bg = wrapper.find('.bg')
      expect(bg.contains('.is-fixed')).toBe(false)
    })
    test('isThumbがtrueの時、is-thumbクラスを付加すること', () => {
      const wrapper = shallowMount(Bg, {
        propsData: {
          isThumb: true
        }
      })
      const bg = wrapper.find('.bg')
      expect(bg.contains('.is-thumb')).toBe(true)
    })
    test('isThumbがfalseの時、is-thumbクラスが付加されないこと', () => {
      const wrapper = shallowMount(Bg, {
        propsData: {
          isThumb: false
        }
      })
      const bg = wrapper.find('.bg')
      expect(bg.contains('.is-thumb')).toBe(false)
    })
  })
  test('snapshot', () => {
    const wrapper = shallowMount(Bg)
    expect(wrapper.element).toMatchSnapshot()
  })
})
