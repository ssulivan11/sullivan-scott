import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import style from './home.scss'

const Home = ({ mainHeadingText, subHeadingText, windowSize, isActive, 'data-test': dataTest }) => (
  <div style={{ height: windowSize.height, position: 'relative' }} data-test={dataTest}>
    <div className={`${style.home} ${isActive ? style['home-active'] : style['home-inactive']}`}>
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
  isActive: PropTypes.bool,
  'data-test': PropTypes.string,
}

export default Home
