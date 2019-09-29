import React from 'react'
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import Alert from './Alert'

const stories = storiesOf('Components | Alert', module)

stories.addParameters({ options: { showPanel: true, isToolshown: true } })
stories.addDecorator(withKnobs)

function addKnobs(props) {
  return {
    ...props,
    message: text('message', props.message),
    kind: select('kind', ['success', 'error'], props.kind),
  }
}

function getItem(props = {}) {
  const propsWithKnobs = addKnobs(props)
  return <Alert {...propsWithKnobs} />
}

stories.add(
  'Dialogue',
  () =>
    getItem({
      kind: 'error',
      message: "Oops, something's gone wrong, please try again later.",
    }),
  {
    knobs: {
      escapeHTML: false,
    },
  },
)
