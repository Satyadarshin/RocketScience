import { mount } from '@vue/test-utils'
import Authors from '@views/Authors'

describe('Authors.vue', () => {
  it('snapshot', () => {
    const wrapper = mount(Authors)
    expect(wrapper).toMatchSnapshot()
})
})