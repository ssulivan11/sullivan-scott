import React from 'react'
import { storiesOf } from '@storybook/react'
import { motion } from 'framer-motion'
import Image from '../src/components/Image/Image'

const Intro = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Image alt='storybook-logo' width={256} height={256} src='https://ssullivan.info/images/icon-512x512.png' />

      <motion.h1 initial={{ rotate: 180, scale: 2, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1 }}>
        Welcome
      </motion.h1>
    </div>
  )
}

storiesOf('Welcome | Introduction', module)
  .addParameters({ options: { showPanel: false, isToolshown: true } })
  .addParameters({
    info: {
      disable: true,
    },
  })
  .add('Default', () => <Intro />)
