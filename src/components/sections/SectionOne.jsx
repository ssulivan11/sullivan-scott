import React from 'react'
import PropTypes from 'prop-types'
import style from './sections.scss'

const SectionOne = ({ mainHeadingText, subHeadingText, windowSize, isActive }) => {
  const scrollDown = () => {
    window.scroll({
      top: windowSize.height,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div style={{ height: windowSize.height }}>
      <div
        className={`${style['section-one']} ${isActive ? style['section-one-active'] : style['section-one-inactive']}`}>
        <div
          data-test='section-one-button'
          className={style['section-one-button']}
          onKeyDown={() => scrollDown()}
          onClick={() => scrollDown()}
          role='button'
          tabIndex='0'>
          <h1 className={`${style.heading} ${style['main-heading']}`}>{mainHeadingText}</h1>
          <h2 className={`${style.heading} ${style['sub-heading']}`}>{subHeadingText}</h2>
        </div>
      </div>
      <div className={style['section-one-background']} style={{ height: windowSize.height }} />
    </div>
  )
}

SectionOne.propTypes = {
  mainHeadingText: PropTypes.string,
  subHeadingText: PropTypes.string,
  windowSize: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  isActive: PropTypes.bool,
}

export default SectionOne
