import React, { Fragment, useState } from 'react'
import { storiesOf } from '@storybook/react'

import ErrorBoundary from './ErrorBoundary'

const stories = storiesOf('Components | Error Boundary', module)

function getItem(type = 'default') {
  const demoStyle = { padding: 15 }
  const containerStyle = { marginTop: 25, maxWidth: 600, padding: 15, borderRadius: 5, backgroundColor: '#f9f9f9' }
  return (
    <div>
      <h5 style={demoStyle}>
        Increasing any counter to the magic number of <strong>3</strong> will simulate a JS error in the component.
      </h5>
      <div>
        {type === 'default' && (
          <div data-test='error-boundary-top-level' style={demoStyle}>
            <h3>Top Level</h3>
            <p className='no-line-height'>These three components are inside the same error top level boundary.</p>
            <p className='no-line-height'>If one crashes, the error boundary will replace both of them.</p>
            <div className='container' style={containerStyle}>
              <strong>Page Demo Example:</strong>
              <ErrorBoundary showErrorMsg>
                <BuggyCounter component='header' />
                <BuggyCounter component='body' />
                <BuggyCounter component='footer' />
              </ErrorBoundary>
            </div>
          </div>
        )}

        {type === 'retries' && (
          <div data-test='error-boundary-top-level-retries' style={demoStyle}>
            <h3>Top Level w/ 2 Retries</h3>
            <p className='no-line-height'>These three components are inside the same error top level boundary.</p>
            <p className='no-line-height'>
              There is a retry limit set to 2 in this case. So the boundary can fail only a max of 2 times.
            </p>
            <div className='container' style={containerStyle}>
              <ErrorBoundary showErrorMsg retries={2}>
                <BuggyCounter component='header' />
                <BuggyCounter component='body' />
                <BuggyCounter component='footer' />
              </ErrorBoundary>
            </div>
          </div>
        )}

        {type === 'component-level' && (
          <div data-test='error-boundary-component-level' style={demoStyle}>
            <h3>HOC Level</h3>
            <p className='no-line-height'>These three components are each inside of their own error boundary.</p>
            <p className='no-line-height'>So if one crashes, the other is not affected.</p>
            <div className='container' style={containerStyle}>
              <ErrorBoundary>
                <BuggyCounter component='header - no error msg' />
              </ErrorBoundary>
              <ErrorBoundary showErrorMsg>
                <BuggyCounter component='body' />
              </ErrorBoundary>
              <ErrorBoundary showErrorMsg errorMsg='Looks like the footer is having an issue.'>
                <BuggyCounter component='footer - unique error' />
              </ErrorBoundary>
            </div>
          </div>
        )}

        {type === 'entry-error' && (
          <div style={demoStyle}>
            <h3>JS Entry Error</h3>
            <p className='no-line-height'>
              As component renders, there is a JS error. The prop showErrorMsg is set to true.
            </p>
            <br />
            <ErrorBoundary showErrorMsg>
              <InstantBugginess />
            </ErrorBoundary>
          </div>
        )}

        {type === 'no-error-boundary' && (
          <div style={demoStyle}>
            <h3>
              NO BOUNDARY - <span style={{ color: 'red' }}>SUPER FAIL</span>
            </h3>
            <p className='no-line-height'>These components are NOT inside of a boundary.</p>
            <p className='no-line-height'>So if any component crashes, all other components and the page will break.</p>
            <div className='container' style={containerStyle}>
              <BuggyCounter component='header' />
              <BuggyCounter component='body' />
              <BuggyCounter component='footer' />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

stories
  .add('Default', () => getItem('default'))
  .add('With Retries', () => getItem('retries'))
  .add('Component Level', () => getItem('component-level'))
  .add('Entry Error', () => getItem('entry-error'))
  .add('With No Error Boundary', () => getItem('no-error-boundary'))

interface BuggyCounterProps {
  component: string
}

const BuggyCounter: React.FunctionComponent<BuggyCounterProps> = ({ component }) => {
  const [count, setCounter] = useState(0)

  const handleClick = () => setCounter(count + 1)
  if (count === 3) throw new Error('I crashed!')
  return (
    <div style={{ border: '1px dashed #ccc', padding: '0 15px 15px', margin: 15, borderRadius: 5 }}>
      <h3>{component}</h3>
      <button onClick={() => handleClick()}>+</button> <strong>{count}</strong>
    </div>
  )
}

const InstantBugginess = ({ message = 'This is a simulated crash!' }) => {
  throw new ReferenceError(message)
}
