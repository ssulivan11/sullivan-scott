import * as React from 'react'
import { shallow, mount } from 'enzyme'
import Image from './Image'

const defaultProps = {
  src: 'https://ssullivan.info/images/icon-512x512.png',
  alt: 'scott sullivan logo',
  width: 200,
  height: 200,
}

const responsiveProps = {
  ...defaultProps,
  responsive: true,
  lazy: false,
}

const setup = (props, renderer = shallow) => {
  const component = renderer(<Image {...props} />)

  return {
    getComponent: () => component,
    debug: () => component.debug(),
  }
}

describe('Image Component', () => {
  it('display default image', () => {
    const component = setup(defaultProps, mount)
    expect(component.getComponent()).toBeDefined()
  })

  it('display responsive container version', () => {
    const component = setup(responsiveProps, mount)
    expect(component.getComponent()).toMatchSnapshot()
  })
})
