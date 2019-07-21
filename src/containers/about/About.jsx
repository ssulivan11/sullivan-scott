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
          key='bio-image'
          className={style['bio-pic']}
          width='150'
          height='150'
          initial={{ scale: 1 }}
          animate={{ scale: 2 }}
          alt="Scott's profile pic"
          src='https://scontent-lhr3-1.cdninstagram.com/vp/c5cdb50d8b3a1286724a1f27f8c125ab/5DA5F673/t51.2885-15/e35/14134966_1175689132493497_1840210486_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com'
        />
        <h2 className={style['bio-heading']}>Hello, I’m Scott, nice to meet you.</h2>
        <p className={style['bio-text']}>
          I&#39;m a Sr UI Engineer, specializing in Javascript, Node.js, front end libraries and frameworks.
        </p>

        <div className={style['bio-grid']}>
          <div className={style['bio-grid-item']}>
            <h3 className={style['bio-grid-title']}>1. Developing</h3>
            <ul>
              <li>React · Redux</li>
              <li>CSS (scss, styled-components, stylus)</li>
              <li>Web Performance, Webpack & Bundlesize management</li>
            </ul>
          </div>
          <div className={style['bio-grid-item']}>
            <h3 className={style['bio-grid-title']}>2. Architecture</h3>
            <ul>
              <li>Global JS libraries & styleguide patterns</li>
              <li>CMS Headless integration</li>
              <li>Git standards and Peer Review</li>
            </ul>
          </div>
          <div className={style['bio-grid-item']}>
            <h3 className={style['bio-grid-title']}>3. Engineering</h3>
            <ul>
              <li>Node.js, Express.js, and SSR</li>
              <li>Jenkins & CI development</li>
              <li>Docker Container management</li>
            </ul>
          </div>
        </div>
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
