import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Suggest from '@/components/Suggest'

const localVue = createLocalVue()
localVue.use(Vuex)

let store
beforeEach(() => {
  store = new Vuex.Store({
    state: {
      config: {
        useSuggest: true
      }
    }
  })
})

describe('Suggest', () => {
  test('is a vue instance', () => {
    const message = '10手詰'
    const wrapper = shallowMount(Suggest, {
      store,
      localVue,
      propsData: {
        message
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders props.message when passed', () => {
    const message = '10手詰'
    const wrapper = shallowMount(Suggest, {
      store,
      localVue,
      propsData: {
        message
      }
    })
    const div = wrapper.find('.suggest-message')
    expect(div.text()).toBe(message)
  })

  test('snapshot', () => {
    const message = '10手詰'
    const wrapper = shallowMount(Suggest, {
      store,
      localVue,
      propsData: {
        message
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
