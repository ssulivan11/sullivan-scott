import * as React from 'react'
import { shallow, mount } from 'enzyme'
import Alert from './Alert'

const defaultProps = {
  kind: 'error',
  children: <div />,
  callbackFunction: jest.fn(),
}

const setup = (props, renderer = shallow) => {
  const component = renderer(<Alert {...props} />)

  return {
    getComponent: () => component.find('[data-test="alert-dialogue"]'),
    getCloseButton: () => component.find('[data-test="alert-dialogue-button-close"]'),
    debug: () => component.debug(),
  }
}

describe('Alert Dialogue', () => {
  it('display default error message', () => {
    const component = setup(defaultProps, mount)
    expect(component.getComponent()).toBeDefined()
  })

  it(`should be closeable when clicking the close button`, () => {
    const component = setup(defaultProps, mount)
    expect(component.getCloseButton().length).toBe(1)
    component.getCloseButton().simulate('click')
    expect(component.getComponent().length).toBe(0)
  })
})
