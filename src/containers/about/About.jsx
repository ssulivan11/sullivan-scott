import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import style from './about.scss'

const About = ({ windowSize, isActive, 'data-test': dataTest }) => {
  return (
    <div style={{ height: windowSize.height, position: 'relative' }} data-test={dataTest}>
      <div className={`${style.about} ${isActive ? style['about-active'] : style['about-inactive']}`}>
        <motion.img
          className={style['profile-pic']}
          width='150'
          height='150'
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: 1000, opacity: 0 }}
          alt="Scott's profile pic"
          src='https://scontent-lhr3-1.cdninstagram.com/vp/c5cdb50d8b3a1286724a1f27f8c125ab/5DA5F673/t51.2885-15/e35/14134966_1175689132493497_1840210486_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com'
        />
        {/* <div className={style['bio-text']}>
          <p>
            I'm a ui web developer focusing on the frontend. I build complex React Redux applications and custom UI
            components for startups and big brands around the world. Performance Optimization, Mobile-First Development,
            React Redux, Node & ES6
          </p>
          <p>
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
            illum qui dolorem eum fugiat quo voluptas nulla pariatur. Neque porro quisquam est, qui dolorem ipsum quia
            dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
            dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
            corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
          </p>
        </div> */}
      </div>
    </div>
  )
}

About.propTypes = {
  windowSize: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  isActive: PropTypes.bool,
  'data-test': PropTypes.string,
}

export default About
