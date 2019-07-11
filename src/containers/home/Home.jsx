import React from 'react'
import PropTypes from 'prop-types'
import style from './home.scss'

const Home = ({ mainHeadingText, subHeadingText, windowSize, isActive, 'data-test': dataTest }) => (
  <div style={{ height: windowSize.height, position: 'relative' }} data-test={dataTest}>
    <div className={`${style.home} ${isActive ? style['home-active'] : style['home-inactive']}`}>
      <div data-test='home-button' className={style['home-headings']}>
        <h1 className={`${style.heading} ${style['main-heading']}`}>{mainHeadingText}</h1>
        <h2 className={`${style.heading} ${style['sub-heading']}`}>{subHeadingText}</h2>
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
