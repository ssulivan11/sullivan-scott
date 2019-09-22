import React from 'react'
import { storiesOf } from '@storybook/react'
import { motion } from 'framer-motion'
import Image from '../src/components/Image/Image'

const Intro = () => {
  return (
    <div
      style={{
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
      }}>
      <motion.div
        animate={{
          scale: [1, 0.75, 1],
        }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
          loop: Infinity,
        }}>
        <Image alt='storybook-logo' width={256} height={256} src='https://ssullivan.info/images/icon-512x512.png' />
      </motion.div>
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
