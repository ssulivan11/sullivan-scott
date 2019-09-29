import React from 'react'
import Alert from '../Alert/Alert'

interface Props {
  /**
   * Callback function once error retry limit is reached
   */
  callbackFunction?: () => {}
  /**
   * Set the amount of times to retry a success state until error is captured
   */
  retries: number
  /**
   * If error is caught, to show or not to show the error message
   */
  showErrorMsg?: boolean
  /**
   * If showErrorMsg, then you can define a custom error message
   */
  errorMsg?: string
  /**
   * Specify the content of your ErrorBoundary
   */
  children?: JSX.Element[] | JSX.Element
}

interface State {
  hasError: boolean
  errorCount: number
}

class ErrorBoundary extends React.Component<Props, State> {
  static defaultProps = {
    retries: 0,
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
      if (typeof callbackFunction === 'function') callbackFunction()
      console.error(error, errorInfo)
    }
  }

  render() {
    const {
      children,
      retries,
      showErrorMsg = false,
      errorMsg = "Oops, something's gone wrong, please try again later.",
    } = this.props
    const { errorCount, hasError } = this.state

    if ((retries >= 1 && errorCount > retries) || hasError) {
      if (showErrorMsg) return <Alert kind='error' message={errorMsg} />
      return null
    }
    return children
  }
}

export default ErrorBoundary
