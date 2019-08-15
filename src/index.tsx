import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './App'

const render = () => {
  ReactDOM.render(<App compiler='TypeScript' framework='React' />, document.getElementById('app'))
}

if (
  'fetch' in window &&
  'Intl' in window &&
  'URL' in window &&
  'Map' in window &&
  'forEach' in NodeList.prototype &&
  'startsWith' in String.prototype &&
  'endsWith' in String.prototype &&
  'includes' in String.prototype &&
  'includes' in Array.prototype &&
  'assign' in Object &&
  'entries' in Object &&
  'keys' in Object
) {
  render()
} else {
  import('./polyfills').then(render)
}
