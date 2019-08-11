import * as React from 'react'
import { shallow, mount } from 'enzyme'

import Contact from '../Contact'
import * as content from '../../../helpers/content'

const defaultTestProps = {
  social: content.social,
  'data-test': 'contact',
  active: 'contact',
  windowSize: {
    height: 500,
    width: 0,
  },
}

const inactiveProps = {
  ...defaultTestProps,
  active: 'home',
}

const setup = (renderer = mount, props) => {
  const component = renderer(<Contact {...props} />)
  return {
    getInstance: () => component,
    getContact: () => component.find(Contact),
    debug: () => component.debug(),
  }
}

let wrapper
describe('<Contact />', () => {
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
})
