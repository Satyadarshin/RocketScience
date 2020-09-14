/*
 * Home view unit test with Jest.
 */
// import Vue from 'vue';
import HomeView from '@/views/Home.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
// const router = new VueRouter()

describe('Home view', () => {

  const wrapper = shallowMount(HomeView, {
    localVue
    // stubs: ['router-link']
  })

  it('Should display main heading', () => {
    // For every unit test there will be an expected result,
    // based on how we expect the code to behave if it is working correctly.
    const expected = 'Science Fiction:a literary genre';
    // An actual result which we get from running the code.
    const actual = wrapper.find('h2').text();
    // We then compare the two to check if the code behaves as expected.
    expect(actual).toEqual(expected);
  });

});
