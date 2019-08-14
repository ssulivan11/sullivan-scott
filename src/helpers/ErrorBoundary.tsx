import * as React from 'react'

interface Props {
  callbackFunction: object
  retries: number
  children: JSX.Element[] | JSX.Element
}

interface State {
  hasError: boolean
  errorCount: number
}

class ErrorBoundary extends React.Component<Props, State> {
  static defaultProps = {
    retries: 0,
    callbackFunction: () => {},
  }

  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      errorCount: 0,
    }
  }

  componentDidCatch(error, errorInfo) {
    const { retries, callbackFunction } = this.props
    if (retries >= 1) {
      this.setState((oldState) => ({ errorCount: oldState.errorCount + 1 }))
    } else {
      this.setState({
        hasError: true,
      })
      // Object.keys(errorInfo).forEach((key) => {
      //   console.warn(key, errorInfo[key])
      // })
      if (typeof callbackFunction === 'function') callbackFunction()
    }
  }

  render() {
    const { children, retries } = this.props
    const { errorCount, hasError } = this.state

    if ((retries >= 1 && errorCount > retries) || hasError) return null
    return children
  }
}

export default ErrorBoundary
