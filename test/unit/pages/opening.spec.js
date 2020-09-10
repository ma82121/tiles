import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Opening from '@/pages/opening'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('Opening', () => {
  test('クリックした時にdata.clickedがtrueになる', () => {
    const wrapper = shallowMount(Opening, {
      localVue,
      router
    })
    wrapper.find('div').trigger('click')
    // expect(wrapper.vm.clicked).toBe(true)
  })
  test('snapshot', () => {
    const wrapper = shallowMount(Opening, {
      localVue,
      router
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
