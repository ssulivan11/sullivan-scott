import React from 'react'
import Alert from '../Alert/Alert'

interface Props {
  callbackFunction?: () => {}
  retries: number
  showErrorMsg?: boolean
  errorMsg?: string
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
