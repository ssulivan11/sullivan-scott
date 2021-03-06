import * as React from 'react'
import { shallow, mount } from 'enzyme'

import Home from '../Home'
import * as content from '../../../helpers/content'

const defaultTestProps = {
  mainHeadingText: content.mainHeadingText,
  subHeadingText: content.subHeadingText,
  'data-test': 'home',
  active: 'home',
  windowSize: {
    height: 500,
    width: 0,
  },
}

const inactiveProps = {
  ...defaultTestProps,
  active: 'contact',
}

const setup = (renderer = mount, props) => {
  const component = renderer(<Home {...props} />)
  return {
    getInstance: () => component,
    getHome: () => component.find(Home),
    getSectionOneButton: () => component.find('[type="button"]'),
    debug: () => component.debug(),
  }
}

let wrapper
describe('<Home />', () => {
  it('active container', () => {
    wrapper = setup(shallow, defaultTestProps)
    expect(wrapper).toBeDefined()
    expect(wrapper).toMatchSnapshot()
  })

  it('inactive container', () => {
    wrapper = setup(shallow, inactiveProps)
    expect(wrapper).toBeDefined()
    expect(wrapper).toMatchSnapshot()
  })

  it('onclick scrollTo', () => {
    window.scrollTo = jest.fn()
    wrapper = setup(shallow, defaultTestProps)
    wrapper.getSectionOneButton().simulate('click')
    expect(window.scrollTo).toHaveBeenCalled()
  })
})
