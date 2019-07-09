import React from 'react'
import PropTypes from 'prop-types'
import style from './sections.scss'

import * as svg from '../../helpers/svg'

const links = {
  linkedin: 'https://www.linkedin.com/in/scott-j-sullivan-14094a58/',
  github: 'https://github.com/ssulivan11',
  codepen: 'https://codepen.io/ssulivan11',
}

const linkList = Object.keys(links).map((key) => (
  <li key={links[key]}>
    <a href={links[key]}>
      <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path d={svg[key]} />
      </svg>
    </a>
  </li>
))

const SectionThree = ({ windowSize, isActive }) => (
  <div style={{ height: windowSize.height }}>
    <div
      className={`${style['section-three']} ${
        isActive ? style['section-three-active'] : style['section-three-inactive']
      }`}>
      <div className={style['section-three-buttons']}>
        <ul>{linkList}</ul>
      </div>
    </div>
  </div>
)

SectionThree.propTypes = {
  windowSize: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  isActive: PropTypes.bool,
}

export default SectionThree
