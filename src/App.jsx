import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
import throttle from 'lodash.throttle'

import content from './helpers/content'

import Home from './containers/home/Home'
import About from './containers/about/About'
import Contact from './containers/contact/Contact'
import style from './scss/main.scss'

require('./assets/favicon.ico')

const App = () => {
  const getWindowSize = () => ({
    height: window.innerHeight,
    width: window.innerWidth,
  })
  const getScrollPosition = () => ({ y: window.pageYOffset })

  const [windowSize, setWindowSize] = useState(getWindowSize())
  const [scrollPosition, setScrollPosition] = useState(getScrollPosition())

  const handleResize = throttle(() => {
    setWindowSize(getWindowSize())
  }, 50)
  const handleScroll = throttle(() => {
    setScrollPosition(getScrollPosition())
  }, 50)

  useEffect(() => {
    window.scrollTo(0, 0)
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const heightWithGive = windowSize.height - (windowSize.height / 100) * 20
  const active =
    // eslint-disable-next-line no-nested-ternary
    heightWithGive > scrollPosition.y ? 'home' : heightWithGive * 2 > scrollPosition.y ? 'about' : 'contact'

  const { mainHeadingText, subHeadingText, social, skills, bioHeading, bioText } = content

  return (
    <div className={style.container}>
      <Home
        active={active}
        windowSize={windowSize}
        mainHeadingText={mainHeadingText}
        subHeadingText={subHeadingText}
        data-test='home'
      />
      <About
        active={active}
        windowSize={windowSize}
        bioHeading={bioHeading}
        bioText={bioText}
        skills={skills}
        data-test='about'
      />
      <Contact active={active} windowSize={windowSize} social={social} data-test='contact' />

      <div className={style['gradient-background']} style={{ height: windowSize.height }} />
    </div>
  )
}

export default hot(App)
