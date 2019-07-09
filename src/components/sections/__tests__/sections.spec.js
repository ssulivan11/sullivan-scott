import React from 'react'
import { mount } from 'enzyme'

import SectionOne from '../SectionOne'

const defaultTestProps = {
  mainHeadingText: 'Main Heading text',
  subHeadingText: 'Subheading text',
  windowSize: {
    height: 500,
    widtth: 0,
  },
}

const setup = (props = defaultTestProps) => {
  const component = mount(<SectionOne {...props} />)
  return {
    getInstance: () => component,
    getSectionOne: () => component.find(SectionOne),
    getSectionOneButton: () => component.find("[data-test='section-one-button']"),
  }
}

let wrapper
describe('<SectionOne />', () => {
  wrapper = setup()

  it('renders', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper).toMatchSnapshot()
  })

  it('clicks well', () => {
    window.scroll = jest.fn()
    wrapper.getSectionOneButton().simulate('click')
    expect(window.scroll).toHaveBeenCalled()
  })
})
