import * as React from 'react'
import { shallow, mount } from 'enzyme'

import About from '../About'
import * as content from '../../../helpers/content'

const defaultTestProps = {
  skills: content.skills,
  bioText: content.bioText,
  bioHeading: content.bioHeading,
  bioImg: content.bioImg,
  'data-test': 'contact',
  active: 'about',
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
  const component = renderer(<About {...props} />)
  return {
    getInstance: () => component,
    getAbout: () => component.find(About),
    debug: () => component.debug(),
  }
}

let wrapper
describe('<About />', () => {
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
