import * as React from 'react'
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

const Home: React.FunctionComponent<HomeProps> = ({
  mainHeadingText,
  subHeadingText,
  windowSize,
  active,
  'data-test': dataTest,
}) => (
  <div style={{ height: windowSize.height, position: 'relative' }} data-test={dataTest}>
    <header className={`container ${style.home} ${active === 'home' ? style['home-active'] : style['home-inactive']}`}>
      <div data-test='home-button' className={style['home-headings']}>
        <motion.h1
          id='title1'
          className={`${style.heading} ${style['main-heading']}`}
          transition={{ duration: 1 }}
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}>
          {mainHeadingText}
        </motion.h1>
        <motion.hr
          className={style['home-hr']}
          transition={{ delay: 1 }}
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
        />
        <motion.h2
          className={`${style.heading} ${style['sub-heading']}`}
          transition={{ duration: 1 }}
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}>
          {subHeadingText}
        </motion.h2>
        <motion.button
          type='button'
          className={style['home-button']}
          transition={{ delay: 2 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            window.scrollTo({
              top: windowSize.height,
              behavior: 'smooth',
            })
          }>
          Learn more
        </motion.button>
      </div>
    </header>
  </div>
)

export default Home
