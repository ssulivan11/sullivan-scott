import React from 'react'
import { motion } from 'framer-motion'

import * as style from './home.scss'

interface HomeProps {
  windowSize: {
    height: number
    width: number
  }
  mainHeadingText: string
  subHeadingText: string
  active?: string
  'data-test': string
}

const animation = {
  h1: {
    transition: { duration: 1 },
    animate: { y: 0, opacity: 1 },
    initial: { y: -100, opacity: 0 },
  },
  h2: {
    transition: { duration: 1 },
    animate: { y: 0, opacity: 1 },
    initial: { y: 100, opacity: 0 },
  },
  hr: {
    transition: { delay: 1 },
    animate: { x: 0, opacity: 1 },
    initial: { x: 100, opacity: 0 },
  },
  button: {
    transition: { delay: 2 },
    animate: { opacity: 1 },
    initial: { opacity: 0 },
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  },
}

const Home: React.FunctionComponent<HomeProps> = ({
  mainHeadingText,
  subHeadingText,
  windowSize,
  active,
  'data-test': dataTest,
}) => (
  <div style={{ height: windowSize.height, position: 'relative' }} data-test={dataTest}>
    <header className={`container ${style.home} ${active === 'home' ? style['home-active'] : style['home-inactive']}`}>
      <div data-test='home-headings' className={style['home-headings']}>
        <div>
          <motion.h1 id='title1' className={`${style.heading} ${style['main-heading']}`} {...animation.h1}>
            {mainHeadingText}
          </motion.h1>
          <motion.hr className={style['home-hr']} {...animation.hr} />
          <motion.h2 className={`${style.heading} ${style['sub-heading']}`} {...animation.h2}>
            {subHeadingText}
          </motion.h2>
          <motion.button
            type='button'
            className={style['home-button']}
            {...animation.button}
            onClick={() =>
              window.scrollTo({
                top: windowSize.height,
                behavior: 'smooth',
              })
            }>
            Learn more
          </motion.button>
        </div>
      </div>
    </header>
  </div>
)

export default Home
