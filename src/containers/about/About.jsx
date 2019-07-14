import React from 'react'
import PropTypes from 'prop-types'
// import { motion, AnimatePresence } from 'framer-motion'
import style from './about.scss'

const About = ({ windowSize, active, 'data-test': dataTest }) => {
  return (
    <div style={{ minHeight: windowSize.height, position: 'relative' }} data-test={dataTest}>
      <div
        className={`container ${style.about} ${active === 'about' ? style['about-active'] : style['about-inactive']}`}>
        <img
          positionTransition
          key='profile-image'
          className={style['profile-pic']}
          width='150'
          height='150'
          initial={{ scale: 1 }}
          animate={{ scale: 2 }}
          alt="Scott's profile pic"
          src='https://scontent-lhr3-1.cdninstagram.com/vp/c5cdb50d8b3a1286724a1f27f8c125ab/5DA5F673/t51.2885-15/e35/14134966_1175689132493497_1840210486_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com'
        />
        <h2>Hi, I’m Scott, nice to meet you.</h2>
        <p className={style['bio-text']}>
          I am a senior ui engineer, specializing in Javascript and front end libraries/frameworks.
          <ul>
            <li>- React/Redux & Angular</li>
            <li>- Web Performance, Bundlesize management and PWA</li>
            <li>- CMS Headless integration</li>
            <li>- Global JS libraries and style guide patterns</li>
            <li>- Node.js, SSR/isomorphic and Express</li>
            <li>- Jenkins & CI development</li>
            <li>- Docker Container management</li>
            <li>- Git standards and Peer Review</li>
          </ul>
        </p>
      </div>
    </div>
  )
}

About.propTypes = {
  windowSize: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  active: PropTypes.string,
  'data-test': PropTypes.string,
}

export default About
