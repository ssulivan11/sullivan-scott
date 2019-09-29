import React, { useState } from 'react'
import * as style from './alert.scss'

interface AlertProps {
  message: string
  kind: string
}

const Alert: React.FunctionComponent<AlertProps> = ({ message, kind }) => {
  const [show, toggleShow] = useState(true)
  if (!show) return null
  return (
    <div className={`${style.alert} ${style[kind]}`} data-test={'alert-dialogue'}>
      <span>{message}</span>
      <button
        className={style.button}
        data-test={`alert-dialogue-button-close`}
        onClick={() => {
          toggleShow(false)
        }}>
        ×
      </button>
    </div>
  )
}

export default Alert
