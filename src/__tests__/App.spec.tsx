import * as React from 'react'
import * as ReactTestUtils from 'react-dom/test-utils'
import { shallow, mount } from 'enzyme'

import App from '../App'

window.scrollTo = jest.fn()

const defaultProps = { compiler: 'TypeScript', framework: 'React' }

const setup = (renderer = mount) => {
  let component

  ReactTestUtils.act(() => {
    component = renderer(<App {...defaultProps} />)
  })

  return {
    getInstance: () => component,
    getApp: () => component.find(App),
    debug: () => component.debug(),
  }
}

let wrapper
describe('<App />', () => {
  it('active container', () => {
    wrapper = setup(shallow)

    expect(wrapper).toBeDefined()
    expect(wrapper).toMatchSnapshot()
  })
})

describe('<App />', () => {
  it('active container "contact"', () => {
    wrapper = setup(mount)

    ReactTestUtils.act(() => {
      // @ts-ignore
      window.dispatchEvent(new window.UIEvent('scroll'))
      // @ts-ignore
      window.dispatchEvent(new window.UIEvent('resize'))
    })

    expect(wrapper).toBeDefined()
    expect(wrapper).toMatchSnapshot()
  })

  it('active container "home"', () => {
    wrapper = setup(mount)

    // @ts-ignore
    Object.defineProperty(document.documentElement, 'clientHeight', { writable: true, configurable: true, value: 1000 })
    // @ts-ignore
    window.pageYOffset = 500

    ReactTestUtils.act(() => {
      // @ts-ignore
      window.dispatchEvent(new window.UIEvent('scroll'))
      // @ts-ignore
      window.dispatchEvent(new window.UIEvent('resize'))
    })

    expect(wrapper).toBeDefined()
    expect(wrapper).toMatchSnapshot()
  })

  it('active container "about"', () => {
    wrapper = setup(mount)

    // @ts-ignore
    Object.defineProperty(document.documentElement, 'clientHeight', { writable: true, configurable: true, value: 600 })
    // @ts-ignore
    window.pageYOffset = 500

    ReactTestUtils.act(() => {
      // @ts-ignore
      window.dispatchEvent(new window.UIEvent('scroll'))
      // @ts-ignore
      window.dispatchEvent(new window.UIEvent('resize'))
    })

    expect(wrapper).toBeDefined()
    expect(wrapper).toMatchSnapshot()
  })

  it('should unnmount resize listeners functions', () => {
    const wrapper = mount(<App {...defaultProps} />)
    wrapper.unmount()
  })
})
