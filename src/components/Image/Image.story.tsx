import React from 'react'
import { withKnobs, number, text, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import Image from './Image'

const stories = storiesOf('Components | Image', module)

stories.addParameters({ options: { showPanel: true, isToolshown: true } })
stories.addDecorator(withKnobs)

function addKnobs(props) {
  return {
    ...props,
    src: text('src', props.src),
    alt: text('alt', props.alt),
    width: number('width', props.width),
    height: number('height', props.height),
    lazy: boolean('lazy', props.lazy),
    responsive: boolean('responsive', props.responsive),
  }
}

function getItem(props = {}) {
  const propsWithKnobs = addKnobs(props)
  return <Image {...propsWithKnobs} />
}

stories.add('Default', () =>
  getItem({
    src: 'https://ssullivan.info/images/icon-512x512.png',
    alt: 'scott sullivan logo',
    width: 200,
    height: 200,
    responsive: false,
  }),
)
