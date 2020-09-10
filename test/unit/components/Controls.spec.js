import { shallowMount } from '@vue/test-utils'
import Controls from '@/components/Controls'

describe('Controls', () => {
  const stageCurrent = 5
  const boardCount = 0
  const boardLogs = []
  const bg = '3'
  const wrapper = shallowMount(Controls, {
    propsData: {
      stageCurrent,
      boardCount,
      boardLogs,
      bg
    }
  })

  test('renders props.stageCurrent when passed', () => {
    const div = wrapper.find('.controls-item.is-stage .text-box-body')
    expect(div.text()).toBe(String(stageCurrent + 1))
  })

  test('renders props.boardCount when passed', () => {
    const div = wrapper.find('.controls-item.is-count .text-box-body')
    expect(div.text()).toBe(String(boardCount))
  })

  test('snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
