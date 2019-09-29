import * as React from 'react'
import { shallow, mount } from 'enzyme'
import ErrorBoundary from './ErrorBoundary'

const defaultProps = {
  retries: 0,
  children: <div />,
  callbackFunction: jest.fn(),
}

const withCallbackFn = {
  ...defaultProps,
  retries: 1,
  callbackFunction: jest.fn(),
}

const badCallbackFn = {
  ...defaultProps,
  callbackFunction: null,
}

const errorMessage = {
  ...defaultProps,
  showErrorMsg: true,
  errorMsg: 'Oops, we got problems',
}

const MockedComponent = () => <div />

const setup = (props, renderer = shallow) => {
  spyOn(console, 'error') // suppress errors from logging
  const component = renderer(
    <ErrorBoundary {...props}>
      <MockedComponent />
    </ErrorBoundary>,
  )

  const error = new Error('mock test error')
  component.find(MockedComponent).simulateError(error)

  return {
    getComponent: () => component,
    debug: () => component.debug(),
  }
}

describe('ErrorBoundary', () => {
  it('Log Error and Build ErrorBoundary Component', () => {
    const component = setup(defaultProps, mount)
    expect(component.getComponent().props().children.type).toBeDefined()
  })

  it('Log Error with multiple retries', () => {
    const component = setup(withCallbackFn, mount)
    expect(component.getComponent().props().children.type).toBeDefined()
  })

  it('Should NOT the callback function if not a fn', () => {
    const component = setup(badCallbackFn, mount)
    expect(component.getComponent().prop('callbackFunction')).toBeNull()
  })

  it('Should NOT the callback function if not a fn', () => {
    const component = setup(errorMessage, mount)
    expect(component.getComponent()).toMatchSnapshot()
  })
})
