import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import style from './home.scss'

const Home = ({ mainHeadingText, subHeadingText, windowSize, active, 'data-test': dataTest }) => (
  <div style={{ height: windowSize.height, position: 'relative' }} data-test={dataTest}>
    <div className={`container ${style.home} ${active === 'home' ? style['home-active'] : style['home-inactive']}`}>
      <div data-test='home-button' className={style['home-headings']}>
        <motion.h1
          className={`${style.heading} ${style['main-heading']}`}
          transition={{ duration: 1 }}
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -1000, opacity: 0 }}>
          {mainHeadingText}
        </motion.h1>
        <motion.hr
          className={style['home-hr']}
          transition={{ delay: '0.8' }}
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: 1000, opacity: 0 }}
        />
        <motion.h2
          className={`${style.heading} ${style['sub-heading']}`}
          transition={{ duration: 1 }}
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 1000, opacity: 0 }}>
          {subHeadingText}
        </motion.h2>
        <motion.button
          type='button'
          className={style['home-button']}
          transition={{ delay: 3 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
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
  </div>
)

Home.propTypes = {
  mainHeadingText: PropTypes.string,
  subHeadingText: PropTypes.string,
  windowSize: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  active: PropTypes.string,
  'data-test': PropTypes.string,
}

export default Home
