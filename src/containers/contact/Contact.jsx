import React from 'react'
import PropTypes from 'prop-types'
import style from './contact.scss'

import * as svg from '../../helpers/svg'

const Contact = ({ windowSize, isActive, social, 'data-test': dataTest }) => {
  const socialList = Object.keys(social).map((key) => (
    <li key={social[key]}>
      <a className={style['social-link']} href={social[key]}>
        <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path d={svg[key]} />
        </svg>
      </a>
    </li>
  ))

  const currentYear = new Date().getFullYear()

  return (
    <div style={{ height: windowSize.height, position: 'relative' }} data-test={dataTest}>
      <div className={`${style.contact} ${isActive ? style['contact-active'] : style['contact-inactive']}`}>
        <div className={style['contact-buttons']}>
          <ul>{socialList}</ul>
        </div>
      </div>
      <footer className={style['contact-footer']}>© Scott Sullivan {currentYear}</footer>
    </div>
  )
}

Contact.propTypes = {
  windowSize: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  isActive: PropTypes.bool,
  social: PropTypes.shape({
    linkedIn: PropTypes.string,
    github: PropTypes.string,
    codePen: PropTypes.string,
  }),
  'data-test': PropTypes.string,
}

export default Contact
