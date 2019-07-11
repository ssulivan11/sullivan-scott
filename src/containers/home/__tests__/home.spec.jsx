import React from 'react'
import { shallow, mount } from 'enzyme'

import Home from '../Home'

const defaultTestProps = {
  mainHeadingText: 'Main Heading text',
  subHeadingText: 'Subheading text',
  windowSize: {
    height: 500,
    width: 0,
  },
}

const setup = (renderer = mount, props = defaultTestProps) => {
  const component = renderer(<Home {...props} />)
  return {
    getInstance: () => component,
    getHome: () => component.find(Home),
  }
}

let wrapper
describe('<Home />', () => {
  wrapper = setup(shallow)

  it('renders', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper).toMatchSnapshot()
  })

  // it('clicks well', () => {
  //   window.scroll = jest.fn()
  //   wrapper.getSectionOneButton().simulate('click')
  //   expect(window.scroll).toHaveBeenCalled()
  // })
})
