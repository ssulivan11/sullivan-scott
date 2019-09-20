import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

export interface RoundedButtonProps {
  color: 'red'
  style?: React.CSSProperties
  onClick: () => void
  children: React.ReactNode
}

export function RoundedButton(props: RoundedButtonProps) {
  return (
    <button
      style={{
        backgroundColor: props.color,
        border: 'none',
        color: 'white',
        padding: 20,
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        borderRadius: 5,
      }}
      onClick={() => props.onClick()}>
      {props.children}
    </button>
  )
}

storiesOf('RoundedButton', module)
  .add(
    'with text',
    () => (
      <RoundedButton color='hotpink' onClick={action('clicked')}>
        Hello Button
      </RoundedButton>
    ),
    { info: { inline: true } },
  )
  .add(
    'with some emoji',
    () => (
      <RoundedButton color='papayawhip' onClick={action('clicked')}>
        <span role='img' aria-label='so cool'>
          😀 😎 👍 💯
        </span>
      </RoundedButton>
    ),
    { info: { inline: true } },
  )
